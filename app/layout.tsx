// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { useEffect } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';

import { initPixel, pageview } from '@/lib/fpixel';
import { sendCapiEvent } from '@/lib/fb-server';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = { /* … */ };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // init + client pageview
    initPixel();
    pageview();

    // server‑side CAPI pageview
    const ts = Math.floor(Date.now() / 1000);
    sendCapiEvent({
      event_name: 'PageView',
      event_time: ts,
      user_data: {
        em: '',              // sha256(email) if you have it
        client_user_agent: navigator.userAgent,
      },
    });
  }, []);

  return (
    <html lang="en" className="select-none">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <base href="/" />

        {/* Meta Pixel core snippet */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0';
                n.queue=[]; t=b.createElement(e); t.async=!0;
                t.src=v; s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window, document, 'script',
                 'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', ${JSON.stringify(process.env.NEXT_PUBLIC_PIXEL_ID)});
            `,
          }}
        />
        <noscript>
          <img
            height="1" width="1" style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_PIXEL_ID}&ev=PageView&noscript=1`}
            alt="fb pixel"
          />
        </noscript>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
