import React from 'react';

function Hero() {
  return (
    <div id="home" className="pt-20 bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Merhaba, Ben İsminiz</span>
            <span className="block text-indigo-200">Web Geliştirici</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Yaratıcı ve kullanıcı dostu web uygulamaları geliştiriyorum.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                İletişime Geç
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;