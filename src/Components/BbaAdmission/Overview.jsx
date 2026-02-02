import React from "react";
import { BookOpen } from "lucide-react";
import ProgramImg from "../../assets/overview.png"; // <-- apni image ka path

const BBAProgramOverview = () => {
  return (
    <>
      {/* TOP HEADING – SAME */}
      <div className="text-center py-4">
        <h1 className="text-4xl md:text-5xl font-bold">
        </h1>
        
      </div>

      {/* CONTENT SECTION */}
      <section className="bg-gradient-to-r from-[#7A0C1E] via-[#5C1233] to-[#2A0F3F]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-10">

          {/* Main Title */}
          

          {/* LEFT TEXT + RIGHT IMAGE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">

            {/* LEFT – Programme Description */}
            <div>
                <h3 className="text-2xl md:text-4xl font-bold text-white py-4">
                            <span className="bg-[#1B7B7F] text-white px-2  rounded-md">BBA</span> in International Business with <span className="bg-[#1B7B7F] text-white px-2 rounded-md">Global Immersion</span>

            </h3>
              <div className="flex items-center gap-3 mb-5">
                
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Programme Overview
                </h3>
              </div>

              <div className="space-y-5 text-base md:text-lg leading-relaxed text-white/90">
                <p>
                  The{" "}
                  <span className="font-semibold text-white">
                    Bachelor of Business Administration in International Business
                    (Global Immersion)
                  </span>{" "}
                  at Indira University provides a strong academic foundation in
                  international business, strategic management, global marketing,
                  cross-cultural communication, and international trade.
                </p>

                <p>
                  A defining feature of this programme is the structured
                  international exposure through an immersive internship at{" "}
                  <span className="font-semibold text-white">
                    Korea University, South Korea
                  </span>
                  , enabling students to experience global business environments
                  first-hand.
                </p>

                <p>
                  Designed for students aspiring to succeed in the global job
                  market, the curriculum is further enhanced with Korean language
                  training and a two-week intensive business internship in Seoul
                  during the third semester.
                </p>
              </div>
            </div>

{/* RIGHT – IMAGE */}
<div className="flex justify-center md:justify-end bg-none">
  <div
    className="
      w-full
      h-[320px]
      sm:h-[400px]
      md:h-[460px]
      lg:h-[560px]
      xl:h-[600px]
      flex
      items-center
      justify-center
    "
  >
    <img
      src={ProgramImg}
      alt="Global Immersion Programme"
      className="
        max-h-full
        w-auto
        max-w-full
        scale-110
        md:scale-125
        lg:scale-130
        drop-shadow-2xl
        transition-transform
        duration-300
      "
    />
  </div>
</div>

          </div>
        </div>
      </section>
    </>
  );
};

export default BBAProgramOverview;
