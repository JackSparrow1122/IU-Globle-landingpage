import React from 'react';
import { Globe, Award, Users, Briefcase, BookOpen, Target } from 'lucide-react';

const BBAProgramOverview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-blue-100 rounded-full mb-6">
            <Globe className="w-6 h-6 text-blue-600 mr-3" />
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
              Global Business Education
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            BBA INTERNATIONAL BUSINESS
            <span className="block text-blue-600 mt-2">(GLOBAL IMMERSION) PROGRAMME</span>
          </h1>
          
          <div className="relative">
            <div className="w-48 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-1 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Main Headline Card */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-900 to-indigo-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
              <div className="flex items-center mb-6">
                <Award className="w-10 h-10 text-yellow-300 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  BBA in International Business with Global Immersion
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-xl text-blue-100 leading-relaxed">
                  A transformative programme that blends <span className="font-bold text-yellow-300">rigorous academic training</span> with <span className="font-bold text-yellow-300">real-world international experience</span> at Korea University, South Korea.
                </p>
                
                {/* Key Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="bg-blue-800/50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-yellow-300">4</div>
                    <div className="text-sm text-blue-200">Year Programme</div>
                  </div>
                  <div className="bg-blue-800/50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-yellow-300">3rd</div>
                    <div className="text-sm text-blue-200">Semester Internship</div>
                  </div>
                  <div className="bg-blue-800/50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-yellow-300">2</div>
                    <div className="text-sm text-blue-200">Weeks in Seoul</div>
                  </div>
                  <div className="bg-blue-800/50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-yellow-300">Korea</div>
                    <div className="text-sm text-blue-200">University Partner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* University Badge */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full mb-6 mx-auto">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Korea_University_seal.svg/1200px-Korea_University_seal.svg.png" 
                  alt="Korea University"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Korea University</h3>
              <p className="text-gray-600 mb-4">Seoul, South Korea</p>
              <div className="inline-block px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-semibold">
                Premier Partner University
              </div>
              <p className="text-gray-500 text-sm mt-4">
                Ranked among top 100 universities globally
              </p>
            </div>
          </div>
        </div>

        {/* Programme Description */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-16">
          <div className="flex items-center mb-10">
            <BookOpen className="w-10 h-10 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Programme Description</h2>
          </div>
          
          <div className="space-y-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              The <span className="font-bold text-blue-700">Bachelor of Business Administration in International Business (Global Immersion)</span> at Indira University combines rigorous academic training in international business, strategic management, global marketing, cross-cultural communication, and international trade with unparalleled practical exposure through a structured international internship at Korea University, South Korea.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-l-4 border-blue-500">
              <p className="text-gray-700 text-lg leading-relaxed">
                Designed for students seeking competitive advantages in the global job market, this programme delivers comprehensive business administration education, supplemented with Korean language training and participation in a two-week intensive business internship in Seoul, South Korea during their third semester.
              </p>
            </div>
          </div>

    
        </div>

   


      </div>
    </div>
  );
};

export default BBAProgramOverview;