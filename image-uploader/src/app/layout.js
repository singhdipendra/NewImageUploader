'use client';
import { AppContext } from '@/context/AppContext.js';
import { useInitialState } from '@/hooks/useInitialState.js';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AppContext.Provider>
  )
};
