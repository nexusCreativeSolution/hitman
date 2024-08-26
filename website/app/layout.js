import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nexus Creative Solutions',
  description: 'This is the official website of Nexus Creative Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
