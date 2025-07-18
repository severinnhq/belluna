"use client";

import React from 'react';
import Script from 'next/script';

const BookingPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl text-black font-bold mb-4">Foglaljon időpontot!</h1>
      
      {/* Wider Container */}
      <div className="w-full max-w-6xl mb-6">
        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/GOdfmrCSbfu9WlueFtlk"
          style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '800px' }}
          scrolling="no"
          id="GOdfmrCSbfu9WlueFtlk_1752220832259"
          title="Foglaljon időpont widget"
        ></iframe>
      </div>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />

      <p className="text-sm text-gray-600">Kérjük, válassza ki a kívánt időpontot a naptárban.</p>
    </main>
  );
};

export default BookingPage;
