// About.jsx
import React from "react";

function About() {
  return (
    <div className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* SECTION 3A: ABOUT INDIRA UNIVERSITY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Content - About Indira University */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              About Indira University | Leading BBA College in India
            </h2>
            
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Indira University ranks amongst India's most progressive institutions offering 
                Bachelor of Business Administration programmes in Pune, Maharashtra's educational hub. 
                Our School of Business (SOB) delivers comprehensive undergraduate business administration 
                courses in international trade, global marketing, cross-cultural management, and 
                multinational business operations with state-of-the-art infrastructure, experienced 
                faculty holding international qualifications, and strong industry partnerships.
              </p>
              
              <p>
                Our BBA in International Business programme prepares graduates for leadership roles 
                in global organisations with essential business skills, intercultural competencies, 
                and practical industry experience through corporate visits, guest lectures, and 
                comprehensive career development support across our extensive alumni network in 
                multinational corporations.
              </p>
            </div>
          </div>
          
          {/* Right Image/Placeholder for Indira University */}
          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-br from-blue-50 to-gray-100 w-full h-80 lg:h-96 rounded-2xl shadow-lg flex items-center justify-center border border-gray-200">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🏫</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Indira University</h3>
                <p className="text-gray-600">Pune, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3B: ABOUT KOREA UNIVERSITY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Image/Placeholder for Korea University */}
          <div className="flex items-center justify-center lg:order-2">
            <div className="bg-gradient-to-br from-red-50 to-gray-100 w-full h-80 lg:h-96 rounded-2xl shadow-lg flex items-center justify-center border border-gray-200">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Korea University</h3>
                <p className="text-gray-600">Seoul, South Korea</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - About Korea University */}
          <div className="space-y-6 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Korea University | Our International Partner for Global Business Education
            </h2>
            
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Korea University, established in 1905, ranks amongst Asia's most prestigious 
                educational institutions and South Korea's leading research university. Consistently 
                featured in QS World University Rankings and Times Higher Education Rankings, 
                Korea University's renowned Business School in Seoul offers exposure business 
                practices, technological innovation, and dynamic international trade environments.
              </p>
              
              <p>
                Through our exclusive partnership, Indira University's BBA International Business 
                (Global Immersion) students gain direct access to global academic resources, 
                international business networks, and cross-cultural learning experiences. Located 
                in Seoul's global business hub with strong connections to leading Korean corporations 
                (Samsung, LG, Hyundai, SK Group), Korea University provides competitive advantages 
                in understanding Asian business dynamics, international trade practices, and 
                multicultural business environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;