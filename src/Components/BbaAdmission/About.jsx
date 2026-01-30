import React from "react";
import indiraBg from "../../assets/Building.jpg";
import koreaBg from "../../assets/Building.jpg";

const UniversityComparison = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-2 md:mb-4">
          ABOUT <span className="text-[#7A0C1E]">INDIRA UNIVERSITY</span>
         
        </h1>

        <div className="flex flex-col lg:flex-row  gap-2">
          {/* Indira University - LEFT */}
          <div className="flex-1 relative overflow-hidden ">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7A0C1E] via-[#5C1233] to-[#2A0F3F]"></div>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${indiraBg})` }}
            ></div>

            <div className="relative p-6 md:p-8 lg:p-10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Indira University
                </h2>
                
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded">
                  INDIA
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">About Indira University | Leading BBA College in India </h3>              <div className="space-y-4">
                <p className="text-white text-sm md:text-base leading-relaxed">
                  Indira University ranks amongst India's most progressive institutions offering Bachelor of Business Administration programmes in Pune, Maharashtra's educational hub. Our School of Business (SOB) delivers comprehensive undergraduate business administration courses in international trade, global marketing, cross-cultural management, and multinational business operations with state-of-the-art infrastructure, experienced faculty holding international qualifications, and strong industry partnerships.
                </p>
                <p className="text-white text-sm md:text-base leading-relaxed">
                  Our BBA in International Business programme prepares graduates for leadership roles in global organisations with essential business skills, intercultural competencies, and practical industry experience through corporate visits, guest lectures, and comprehensive career development support across our extensive alumni network in multinational corporations.
                </p>
              </div>
            </div>
          </div>

          {/* Korea University - RIGHT */}
          <div className="flex-1 relative overflow-hidden ">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] via-[#1E40AF] to-[#1D4ED8]"></div>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${koreaBg})` }}
            ></div>

            <div className="relative p-6 md:p-8 lg:p-10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Korea University
                </h2>
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded">
                  SOUTH KOREA
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Korea University | Our International Partner for Global Business Education  </h3> 
              <div className="space-y-4">
                <p className="text-white text-sm md:text-base leading-relaxed">
                  Korea University, established in 1905, ranks amongst Asia's most prestigious educational institutions and South Korea's leading research university. Consistently featured in QS World University Rankings and Times Higher Education Rankings, Korea University's renowned Business School in Seoul offers exposure to business practices, technological innovation, and dynamic international trade environments.
                </p>
                <p className="text-white text-sm md:text-base leading-relaxed">
                  Through our exclusive partnership, Indira University's BBA International Business (Global Immersion) students gain direct access to global academic resources, international business networks, and cross-cultural learning experiences. Located in Seoul's global business hub with strong connections to leading Korean corporations (Samsung, LG, Hyundai, SK Group), Korea University provides competitive advantages in understanding Asian business dynamics, international trade practices, and multicultural business environments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Divider Info */}
       
      </div>
    </div>
  );
};

export default UniversityComparison;