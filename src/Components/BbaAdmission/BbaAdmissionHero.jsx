import { useState, useEffect, useMemo, useRef } from "react";
import backgroundImage2 from "../../assets/IUBanner.jpg";
import NPFWidget from "../NPFWidget";

function CompHero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [glowEffect, setGlowEffect] = useState(false);
  const containerRef = useRef(null);

  const words = useMemo(() => ["Lead.", "Excel.", "Inspire."], []);

  // Fade in animation on mount
  useEffect(() => {
    setIsVisible(true);
    const glowInterval = setInterval(() => {
      setGlowEffect(prev => !prev);
    }, 3000);
    return () => clearInterval(glowInterval);
  }, []);

  // Typing effect
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

  // Floating animation for partnership text
  useEffect(() => {
    const floatingInterval = setInterval(() => {
      const element = document.querySelector('.partnership-text');
      if (element) {
        element.style.transform = `translateY(${Math.sin(Date.now() / 1000) * 5}px)`;
      }
    }, 50);
    
    return () => clearInterval(floatingInterval);
  }, []);

  return (
    <div
      className="relative min-h-[90vh] bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage2})` }}
      ref={containerRef}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/60 via-black/40 to-[#209EA3]/20"></div>
      
      {/* Floating particles/background elements */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex min-h-[90vh] flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 gap-8 md:gap-12">
        {/* LEFT TEXT */}
        <div className={`w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Main Heading with typing animation */}
          <div className="overflow-hidden">
            <h1 className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold py-4 leading-tight animate-slideUp">
              BBA in International Business with
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-bold mt-2">
                 <br /> Global Immersion Programme
              </span>
            </h1>
            
            {/* Animated cursor for typing effect */}
            {/* <div className="flex items-center mt-4">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-[#209EA3] bg-clip-text text-transparent animate-gradient">
                {currentText}
              </span>
              <span className={`ml-1 w-[3px] h-8 bg-[#FCC409] ${!isDeleting ? 'animate-pulse' : ''}`}></span>
            </div> */}

            {/* Partnership with floating animation */}
            {/* Partnership with floating animation and handshake icon */}
<div className="mt-6 md:mt-8 partnership-text transition-transform duration-100">
  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold relative inline-block">
    {/* Handshake Icon - Left */}
    <span className="absolute -left-8 md:-left-10 top-1/2 transform -translate-y-1/2 text-2xl md:text-3xl">
      
    </span>
    
    {/* Main Text */}
    <span className="relative z-10 px-2">
      Indira University🤝Korea University
    </span>
    

    
    {/* Glow Effect */}
    <span className={`absolute -inset-1 blur-lg bg-gradient-to-r from-[#209EA3] to-[#FCC409] opacity-30 transition-opacity duration-1000 ${glowEffect ? 'opacity-50' : ''}`}></span>
  </h2>
</div>
          </div>

          {/* Description with staggered animation */}
          <div className="space-y-4">
            <p className="text-lg sm:text-xl md:text-xl leading-relaxed transform transition-all duration-700 delay-300 text-normal">
              Accelerate Your Career with India's Top BBA International Business Degree Featuring Korean Language Training, International Internship Experience, and Global Business Exposure at Korea University 
            </p>
          </div>

          {/* Admissions Banner with pulse animation */}
          <div className="py-4 transform transition-all duration-700 delay-500">
            <div className="relative inline-block group">
              <p className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-[#209EA3] to-[#1a7a7d] text-white font-bold py-3 px-6 rounded-xl inline-block transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl shadow-lg animate-pulse-slow">
                Admissions Open for 2026-27
              </p>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#209EA3] to-[#FCC409] rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
            </div>
          </div>

          {/* Animated scroll indicator for mobile */}
          <div className="md:hidden mt-8 animate-bounce-slow">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll for more</span>
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM with slide-in animation */}
        <div className={`w-full md:w-1/2 flex justify-center md:justify-end transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="relative w-full max-w-md group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#209EA3] to-[#FCC409] rounded-2xl blur opacity-30 group-hover:opacity-50 transition-all duration-500 animate-glow"></div>
            <div className="relative bg-black/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-700 transform transition-all duration-300 group-hover:scale-[1.02]">
              <NPFWidget />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        .animate-float {
          animation: float infinite linear;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}

export default CompHero;