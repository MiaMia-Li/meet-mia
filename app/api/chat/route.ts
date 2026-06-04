import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { miaKnowledge } from '@/lib/knowledge';

export async function POST(req: Request) {
  if (process.env.RATE_LIMIT_ENABLED === 'true') {
    const redis = new Redis({
      url: process.env.KV_REST_API_URL!,
      token: process.env.KV_REST_API_TOKEN!,
    });
    const ratelimit = new Ratelimit({
      redis,
      limiter: Ratelimit.tokenBucket(10, '1 h', 5),
      analytics: true,
      prefix: 'mia-chat',
    });

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'anonymous';

    const { success, limit, remaining, reset } = await ratelimit.limit(ip);

    if (!success) {
      return new Response(
        JSON.stringify({
          error: 'Too many requests — please try again in a few minutes.',
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Limit': String(limit),
            'X-RateLimit-Remaining': String(remaining),
            'X-RateLimit-Reset': String(reset),
          },
        }
      );
    }
  }

  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: miaKnowledge,
    messages,
    maxTokens: 1500,
    temperature: 0.7,
  });

  return result.toDataStreamResponse();
}
