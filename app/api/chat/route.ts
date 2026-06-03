import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { miaKnowledge } from '@/lib/knowledge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: miaKnowledge,
    messages,
    maxTokens: 600,
    temperature: 0.7,
  });

  return result.toDataStreamResponse();
}
