import React from "react";

const GlobalImmersionProgram = () => {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What, Why <span className="text-blue-600">&</span> How
          </h1>
           <h1 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6">
            UNDERSTANDING GLOBAL IMMERSION PROGRAMMES
          </h1>
          <div className="w-32 h-1.5 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* WHAT Card */}
          <div className="bg-gradient-to-br from-blue-50 to-white border-l-8 border-blue-500 rounded-r-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-blue-700">W</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What is a Global Immersion Program?
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              
              <span className="font-semibold text-blue-700">
                A Global Immersion Programme in BBA education combines international business coursework with hands-on overseas internship experience, providing students with practical cross-cultural management skills and real-world international business exposure at foreign universities like Korea University. 
              </span>
              ,{" "}
              <span className="font-semibold text-blue-700">
                global exposure
              </span>
              ,{" "}
              <span className="font-semibold text-blue-700">
                cultural awareness
              </span>
              <span className="font-semibold text-blue-700">
                academic growth
              </span>
              .
            </p>

          
          </div>

          {/* WHY Card */}
          <div className="bg-gradient-to-br from-green-50 to-white border-l-8 border-green-500 rounded-r-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-green-700">W</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why are Global Immersion Programs important?
              </h2>
              <div className="w-20 h-1 bg-green-500 mb-6"></div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="font-bold text-green-700">
                Global immersion programmes are essential for developing cross-cultural competencies, international business skills, and global networking opportunities that multinational corporations actively seek in BBA graduates, significantly enhancing employability and career prospects in international trade and global business management roles. 
              </span>
             
            </p>

          </div>

          {/* HOW Card */}
          <div className="bg-gradient-to-br from-purple-50 to-white border-l-8 border-purple-500 rounded-r-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-purple-700">H</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How our Global Immersion Programs help you?
              </h2>
              <div className="w-20 h-1 bg-purple-500 mb-6"></div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              
              <span className="font-semibold text-purple-700">Our BBA International Business Global Immersion programme provides Korean language training, Korea University international internship experience, enhanced employability with multinational corporations, Asian business exposure, professional networking opportunities, and comprehensive career development for exceptional career advantages in global business management and export-import sectors. </span>{" "}
            </p>

          </div>
        </div>

      
      </div>
    </div>
  );
};

export default GlobalImmersionProgram;
