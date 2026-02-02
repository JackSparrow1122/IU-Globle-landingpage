import React from "react";
import { BookOpen } from "lucide-react";
import ProgramImg from "../../assets/overview.png"; // <-- apni image ka path

const BBAProgramOverview = () => {
  return (
    <>
      {/* CONTENT SECTION */}
      <section className="bg-gradient-to-r from-[#7A0C1E] via-[#5C1233] to-[#2A0F3F]">
        <div className=" mx-auto px-6 md:px-16 ">
          {/* Main Title */}

          {/* LEFT TEXT + RIGHT IMAGE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* LEFT – Programme Description */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white py-4">
                <span className=" text-[#D3FFFD] ">
                  BBA
                </span>{" "}
                 IN INTERNATIONAL BUSINESS WITH{" "}
                <span className="text-[#D3FFFD]">
                  GLOBAL IMMERSION 
                </span>
              </h3>
        

              <div className="space-y-5 text-base md:text-lg leading-relaxed text-white/90">
                <p>
                  The{" "}
                  <span className="font-semibold text-white">
                    Bachelor of Business Administration in International
                    Business (Global Immersion)
                  </span>{" "}
                  at Indira University provides a strong academic foundation in
                  international business, strategic management, global
                  marketing, cross-cultural communication, and international
                  trade.
                   A defining feature of this programme is the structured
                  international exposure through an immersive internship at{" "}
                  <span className="font-semibold text-white">
                    Korea University, South Korea
                  </span>
                  , enabling students to experience global business environments
                  first-hand.
                  Designed for students aspiring to succeed in the global job
                  market, the curriculum is further enhanced with Korean
                  language training and a two-week intensive business internship
                  in Seoul during the third semester.
                </p>

                <p>
                 
                </p>

                <p>
                  
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
