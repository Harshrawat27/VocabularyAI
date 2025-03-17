// app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import ClientProvider from './components/ClientProvider';
import './globals.css';
import { ThemeProvider } from './components/ThemeContext';
import Layout from './components/Layout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: {
    icon: '/LearNoted-logo-white-512.svg', // Path to favicon in public directory
  },
  other: {
    'google-site-verification': 'OUXooCc_fRcKZ9mOTlYEnT8NJCOIdpjE1t_zT_nm2B4',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <Layout>
            <ClientProvider>{children}</ClientProvider>{' '}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
