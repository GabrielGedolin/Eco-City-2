import type { AppProps } from 'next/app';
import React from 'react';
import "../public/style/style.css"
import "../public/style/clash-display.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <main className="">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;