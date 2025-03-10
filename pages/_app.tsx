import type { AppProps } from 'next/app';
import React from 'react';  
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="layout">
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      
    </div>
  );
}

export default MyApp;