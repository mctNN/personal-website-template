import React from 'react';

function About() {
  return (
    <div id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Hakkımda
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Yazılım geliştirme konusunda tutkulu bir geliştiriciyim.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Yeteneklerim</h3>
              <div className="mt-4 space-y-4">
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="font-medium">Frontend Geliştirme</p>
                  <p className="text-gray-600">HTML, CSS, JavaScript, React</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="font-medium">Backend Geliştirme</p>
                  <p className="text-gray-600">Node.js, Express, MongoDB</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="font-medium">Diğer Teknolojiler</p>
                  <p className="text-gray-600">Git, Docker, AWS</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Deneyim</h3>
              <div className="mt-4 space-y-4">
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="font-medium">Şirket Adı</p>
                  <p className="text-gray-600">Frontend Geliştirici | 2020 - Günümüz</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="font-medium">Şirket Adı</p>
                  <p className="text-gray-600">Yazılım Geliştirici | 2018 - 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;