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
  title: {
    template: 'Amarjeet Singh | %s',
    default: 'Amarjeet Singh',
  },
  description: 'Amarjeet Singh Portfolio',
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
