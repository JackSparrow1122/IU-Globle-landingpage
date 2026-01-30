import React from "react";

const UniversityComparison = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl py-6 font-bold text-center text-gray-800 mb-2">
          ABOUT INDIRA UNIVERSITY
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Indira University Section - Left */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            {/* Faded Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
              }}
            ></div>

            <div className="relative z-10 p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">IU</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Indira University
                  </h2>
                  <p className="text-blue-600 font-medium">Pune, Maharashtra</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Leading BBA College in India
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Indira University ranks amongst India's most progressive
                  institutions offering Bachelor of Business Administration
                  programmes in Pune, Maharashtra's educational hub. Our School
                  of Business (SOB) delivers comprehensive undergraduate
                  business administration courses in international trade, global
                  marketing, cross-cultural management, and multinational
                  business operations with state-of-the-art infrastructure,
                  experienced faculty holding international qualifications, and
                  strong industry partnerships. Our BBA in International
                  Business programme prepares graduates for leadership roles in
                  global organisations with essential business skills,
                  intercultural competencies, and practical industry experience
                  through corporate visits, guest lectures, and comprehensive
                  career development support across our extensive alumni network
                  in multinational corporations.
                </p>
              </div>
            </div>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 opacity-10 rounded-bl-full"></div>
          </div>

          {/* Korea University Section - Right */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-red-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            {/* Faded Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
              }}
            ></div>

            <div className="relative z-10 p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">KU</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Korea University
                  </h2>
                  <p className="text-red-600 font-medium">Seoul, South Korea</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  International Partner for Global Business Education
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Korea University, established in 1905, ranks amongst Asia's
                  most prestigious educational institutions and South Korea's
                  leading research university. Consistently featured in QS World
                  University Rankings and Times Higher Education Rankings, Korea
                  University's renowned Business School in Seoul offers exposure
                  business practices, technological innovation, and dynamic
                  international trade environments. Through our exclusive
                  partnership, Indira University's BBA International Business
                  (Global Immersion) students gain direct access to global
                  academic resources, international business networks, and
                  cross-cultural learning experiences. Located in Seoul's global
                  business hub with strong connections to leading Korean
                  corporations (Samsung, LG, Hyundai, SK Group), Korea
                  University provides competitive advantages in understanding
                  Asian business dynamics, international trade practices, and
                  multicultural business environments.
                </p>
              </div>
            </div>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-500 to-red-700 opacity-10 rounded-bl-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityComparison;
