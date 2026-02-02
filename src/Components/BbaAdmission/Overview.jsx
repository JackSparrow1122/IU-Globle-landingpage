import React from "react";
import { BookOpen } from "lucide-react";
import ProgramImg from "../../assets/hero.jpg"; // <-- apni image ka path

const BBAProgramOverview = () => {
  return (
    <>
      {/* TOP HEADING – SAME */}
      <div className="text-center py-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          BBA INTERNATIONAL BUSINESS
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold">
          (GLOBAL IMMERSION) PROGRAMME OVERVIEW
        </h2>
      </div>

      {/* CONTENT SECTION */}
      <section className="bg-gradient-to-r from-[#7A0C1E] via-[#5C1233] to-[#2A0F3F]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-10">

          {/* Main Title */}
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              BBA in International Business with Global Immersion
            </h3>
          </div>

          {/* LEFT TEXT + RIGHT IMAGE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* LEFT – Programme Description */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Programme Description
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
            <div className="flex justify-center">
              <img
                src={ProgramImg}
                alt="Global Immersion Programme"
                className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default BBAProgramOverview;
