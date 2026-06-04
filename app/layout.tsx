import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/providers/theme-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://himia.me'),
  title: 'Meet Mia — Senior Full-Stack AI Engineer',
  description:
    'Chat with Mia AI — the digital twin of Mengyao Li, a senior full-stack engineer in Singapore building AI workflows, generative AI products, and SaaS systems.',
  keywords: ['AI engineer', 'full-stack engineer', 'Singapore', 'Next.js', 'OpenAI', 'generative AI', 'SaaS', 'EP sponsorship'],
  authors: [{ name: 'Mengyao Li', url: 'https://himia.me' }],
  openGraph: {
    title: 'Meet Mia — Senior Full-Stack AI Engineer',
    description:
      'Chat with my AI twin. Ask about my projects, tech stack, or open roles. AI product engineering · Singapore · Open to senior remote.',
    url: 'https://himia.me',
    siteName: 'Meet Mia',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1536, height: 1024, alt: 'Meet Mia — Senior Full-Stack AI Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Mia — Senior Full-Stack AI Engineer',
    description: 'Chat with my AI twin. Ask about my projects, tech stack, or open roles.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://himia.me',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white dark:bg-neutral-950 text-black dark:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
