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
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white dark:bg-neutral-950 text-black dark:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
