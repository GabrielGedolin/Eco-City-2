import type { AppProps } from 'next/app';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-100 min-vh-100 d-flex flex-column overflow-hidden">
      <main className="flex-grow-1">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;