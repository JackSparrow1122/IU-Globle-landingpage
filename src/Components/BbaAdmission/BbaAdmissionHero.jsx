import { useState, useEffect, useMemo } from "react";
import backgroundImage2 from "../../assets/IUBanner.jpg";
import NPFWidget from "../NPFWidget";

function CompHero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = useMemo(() => ["Lead.", "Excel.", "Inspire."], []);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      } else {
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 80 : 120);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div
      className="relative min-h-[90vh] bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${backgroundImage2})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex min-h-[90vh] flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 gap-8 md:gap-12">
        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          {/* Main Heading */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#FCC409]">BBA</span> in International Business 
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-2">
                with Global Immersion Programme
              </span>
            </h1>
            
            {/* Partnership */}
            <div className="mt-4 md:mt-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                Indira University x Korea University
              </h2>
            </div>
          </div>

          {/* Typing Animation */}
          <div className="h-12 md:h-14 flex items-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium">
              {currentText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
              Accelerate Your Career with India's Top BBA International Business Degree Featuring Korean Language Training, International Internship Experience, and Global Business Exposure at Korea University 
            </p>
            {/* <ul className="text-base sm:text-lg space-y-2">
              <li className="flex items-center">
                <span className="text-[#FCC409] mr-2">•</span>
                Korean Language Training
              </li>
              <li className="flex items-center">
                <span className="text-[#FCC409] mr-2">•</span>
                International Internship Experience
              </li>
              <li className="flex items-center">
                <span className="text-[#FCC409] mr-2">•</span>
                Global Business Exposure at Korea University
              </li>
            </ul> */}
          </div>

          {/* Admissions Banner */}
          <div className=" py-4">
            <p className="text-lg sm:text-xl md:text-2xl bg-[#780D21] text-white font-bold py-3 px-6 rounded-xl inline-block">
              Admissions Open for 2026-27
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-md bg-black/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-700">
            <NPFWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompHero;