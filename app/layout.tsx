import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/providers/theme-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Meet Mia — Senior Full-Stack AI Engineer',
  description:
    'Mengyao Li is a product-minded senior software engineer in Singapore, focused on AI workflows, generative AI, creative tools, and full-stack SaaS systems.',
  openGraph: {
    title: 'Meet Mia — Senior Full-Stack AI Engineer',
    description:
      'AI product engineering, generative AI workflows, creative tools, and full-stack SaaS systems. Open to EP sponsorship and senior remote roles.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white dark:bg-black text-neutral-900 dark:text-neutral-100`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
