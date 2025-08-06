'use client';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main
        className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden font-sans"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Blurred Background */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(
        ellipse 100% 100% at top,
        #000000 0%,
        #000000 40%,
        #162046 40%,
        #162046 60%,
        #7b8bc7 60%,
        #7b8bc7 65%,
        #fefefe 65%,
        #fefefe 100%
      )`,
            filter: 'blur(80px)',
            transition: 'filter 1s ease-in-out',
            transform: 'scale(1.1)',
            zIndex: -1,
          }}
        />

        {/* Content Container */}
        <div className="z-10 flex flex-col items-center justify-center max-w-2xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Plasztikai Sebészet &</span>
            <span className="block bg-gradient-to-r from-blue-200 to-purple-300 bg-clip-text text-transparent">
              Esztétikai Marketing Szakértők
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10">
            Növelje páciensforgalmát{' '}
            <span className="font-semibold text-white">
              professzionális marketing stratégiákkal
            </span>
            , amelyek az orvosi piac{' '}
            <span className="font-semibold text-white">egyedi kihívásaira</span> fókuszálnak
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            {/* Get Started Button */}
            <button
              className="text-white font-semibold text-lg transition-all duration-300"
              style={{
                width: 'clamp(100px, 30vw, 160px)',
                aspectRatio: '120 / 50',
                backgroundColor: '#1F3A60',
                borderRadius: '25% / 35%',
                boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#18304F';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1F3A60';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.25)';
              }}
            >
              Get Started
            </button>

            {/* Google Login Button */}
            <button
              className="flex items-center justify-center text-lg font-semibold transition-all duration-300"
              style={{
                width: 'clamp(100px, 30vw, 160px)',
                aspectRatio: '120 / 50',
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '25% / 35%',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                color: '#555',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f5f5f5';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="w-6 h-6 mr-2"
              />
              Google Login
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
