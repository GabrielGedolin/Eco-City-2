import type { AppProps } from 'next/app';
import React from 'react';
import "../public/style/style.css"
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <div className="">
      <main className="">
        <Component {...pageProps} />
      </main>
      </div>
    </>
  );
}

export default MyApp;