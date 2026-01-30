import React from 'react';
import { Globe, Award, Users, Briefcase, BookOpen, Target } from 'lucide-react';

const BBAProgramOverview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white ">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            BBA INTERNATIONAL BUSINESS
            <span className="block text-[#011E5A] mt-2">(GLOBAL IMMERSION) PROGRAMME</span>
          </h1>
          
          <div className="relative">
            <div className="w-48 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-1 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          
          {/* Main Headline Card */}
          <div className="lg:col-span-2">
            <div className="bg-[#011E5A] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
              <div className="flex items-center mb-6">
                <Award className="w-10 h-10 text-yellow-300 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold ">
                  BBA in International Business with Global Immersion
                </h2>
              </div>
              
              
            </div>
          </div>

 
        </div>

        {/* Programme Description */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-16">
          <div className="flex items-center mb-10">
            <BookOpen className="w-10 h-10 text-[#011E5A] mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Programme Description</h2>
          </div>
          
          <div className="space-y-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              The <span className="font-bold text-[#011E5A]">Bachelor of Business Administration in International Business (Global Immersion)</span> at Indira University combines rigorous academic training in international business, strategic management, global marketing, cross-cultural communication, and international trade with unparalleled practical exposure through a structured international internship at Korea University, South Korea.
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