import "./globals.css";
import Navigation from '@/components/Navigation';
import { Lora, Space_Grotesk } from 'next/font/google';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.amarjeet.info'),
  title: {
    template: 'Amarjeet Singh | %s',
    default: 'Amarjeet Singh - Software Engineer & AI Enthusiast',
  },
  description: 'Portfolio of Amarjeet Singh, a Software Engineer focusing on Artificial Intelligence, Machine Learning, and highly scalable systems.',
  keywords: ['Amarjeet Singh', 'Amarjeet', 'Software Engineer', 'Machine Learning', 'Artificial Intelligence', 'AI', 'Developer', 'Portfolio'],
  authors: [{ name: 'Amarjeet Singh' }],
  creator: 'Amarjeet Singh',
  openGraph: {
    title: 'Amarjeet Singh - Software Engineer',
    description: 'Portfolio of Amarjeet Singh, a Software Engineer focusing on Artificial Intelligence, Machine Learning, and highly scalable systems.',
    url: 'https://www.amarjeet.info',
    siteName: 'Amarjeet Singh Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amarjeet Singh',
    description: 'Portfolio of Amarjeet Singh, focusing on AI and Software Engineering.',
    creator: '@amarjeet_076',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />
      </head>
      <body suppressHydrationWarning className={`${lora.variable} ${spaceGrotesk.variable} font-space-grotesk text-[16px] leading-relaxed text-[#222]`}>
        <Navigation>
          {children}
        </Navigation>
      </body>
    </html>
  );
}
