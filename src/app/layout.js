import "./globals.css";
import Navigation from '@/components/Navigation';
import { Lora } from 'next/font/google';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
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
      <body className={`${lora.variable} font-lora text-[16px] leading-relaxed text-[#222]`}>
        <Navigation>
          {children}
        </Navigation>
      </body>
    </html>
  );
}
