import { useEffect, useState, useRef } from "react";
import img1 from "../../assets/club.jpg";
import img2 from "../../assets/Event.jpg";
import img3 from "../../assets/Facilities.jpg";

const data = [
  {
    id: 1,
    title: "Campus Facilities and Infrastructure",
    description:
      "Indira University's modern campus features technology-enabled smart classrooms, comprehensive library and digital resources, conference halls hosting guest lectures and industry seminars, career development and placement cell, sports facilities supporting excellence in BBA International Business education with global immersion programme facilities. ",
    image: img2,
  },
  {
    id: 2,
    title: "Student Activities and Clubs",
    description:
      "Experience dynamic campus life through our Entrepreneurship and Innovation Cell connecting aspiring entrepreneurs with mentors, Marketing Club, Finance Club, Cultural Committee hosting annual festivals and talent shows, Technical and IT Club offering coding workshops; providing comprehensive co-curricular development alongside BBA International Business education with global immersion focus. ",
    image: img3,
  },
  {
    id: 3,
    title: "Events and Annual Celebrations",
    description:
      "Indira University hosts vibrant annual events featuring industry leaders and corporate networking; multi-day cultural festival with celebrity appearances and inter-college participation; sports week promoting fitness and team spirit; fresher's induction farewell ceremony for graduating batches; regular industry interaction through guest lectures from MNCs; and formal convocation ceremony for degree conferment, creating memorable experiences supporting holistic development in business administration education with international exposure. ",
    image: img1,
  },
];

export default function CampusFacilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isScrollingRef = useRef(false);
  const touchStartYRef = useRef(0);
  const lastScrollTimeRef = useRef(0);

  // Function for dot click navigation
  const handleDotClick = (index) => {
    if (isScrollingRef.current) return;

    isScrollingRef.current = true;
    setActiveIndex(index);

    // Smooth scroll to section
    if (sectionRef.current) {
      const section = sectionRef.current;
      const sectionHeight = section.clientHeight;
      const targetScroll =
        section.offsetTop + (index * sectionHeight) / data.length;

      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || isScrollingRef.current) return;

      const now = Date.now();
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      // Only update if section is in view and enough time has passed
      if (now - lastScrollTimeRef.current < 800) return;

      if (rect.top <= 0 && rect.bottom >= 0) {
        const scrollProgress = -rect.top / rect.height;
        const newIndex = Math.min(
          data.length - 1,
          Math.max(0, Math.floor(scrollProgress * data.length)),
        );

        if (newIndex !== activeIndex) {
          lastScrollTimeRef.current = now;
          setActiveIndex(newIndex);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  // Handle wheel scroll
  useEffect(() => {
    const handleWheel = (e) => {
      if (!sectionRef.current || isScrollingRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      // Check if we're inside the section
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const delta = Math.sign(e.deltaY);
        const direction = delta > 0 ? "down" : "up";

        // Prevent default only when at boundaries to avoid locking
        if (
          (direction === "down" && activeIndex === data.length - 1) ||
          (direction === "up" && activeIndex === 0)
        ) {
          return; // Allow normal scroll at boundaries
        }

        e.preventDefault();

        // Calculate next index
        let newIndex = activeIndex;
        if (delta > 0) {
          newIndex = Math.min(data.length - 1, activeIndex + 1);
        } else if (delta < 0) {
          newIndex = Math.max(0, activeIndex - 1);
        }

        if (newIndex !== activeIndex) {
          handleDotClick(newIndex);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeIndex]);

  // Handle touch events for mobile
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        touchStartYRef.current = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = (e) => {
      if (!sectionRef.current || isScrollingRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const touchEndY = e.changedTouches[0].clientY;
        const deltaY = touchStartYRef.current - touchEndY;

        // Minimum swipe distance
        if (Math.abs(deltaY) < 50) return;

        const direction = deltaY > 0 ? "down" : "up";

        // Calculate next index
        let newIndex = activeIndex;
        if (direction === "down") {
          newIndex = Math.min(data.length - 1, activeIndex + 1);
        } else {
          newIndex = Math.max(0, activeIndex - 1);
        }

        if (newIndex !== activeIndex) {
          handleDotClick(newIndex);
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!sectionRef.current || isScrollingRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        let newIndex = activeIndex;

        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault();
          newIndex = Math.min(data.length - 1, activeIndex + 1);
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault();
          newIndex = Math.max(0, activeIndex - 1);
        } else {
          return;
        }

        if (newIndex !== activeIndex) {
          handleDotClick(newIndex);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  // Reset scrolling flag on mount
  useEffect(() => {
    isScrollingRef.current = false;
  }, []);

  return (
    <>
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] bg-gradient-to-r from-[#990000] via-[#011E5A] to-[#051D58]"
      style={{ height: `${data.length * 100}vh` }}
    >
      {/* Sticky container that stays in view */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background images inside sticky container */}
        <div className="absolute inset-0">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                activeIndex === index
                  ? "opacity-80 z-10"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#990000]/40 via-[#011E5A]/70 to-[#051D58]/40" />
            </div>
          ))}
        </div>

        {/* Content Container - Inside sticky div */}
        <div className="relative container mx-auto px-4 lg:px-8 z-20">
          <div className="max-w-6xl mx-auto">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`transition-all duration-700 ease-out text-center ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 absolute inset-x-0 pointer-events-none"
                }`}
              >
                <div className="mb-8">
                

                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                    {item.title}
                  </h2>

                  <div className="w-24 h-1 bg-gradient-to-r from-[#FCC409] to-[#FFD700] mx-auto mb-8"></div>

                  <div className="max-w-3xl mx-auto">
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 hidden md:flex flex-col gap-4">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-gradient-to-r from-[#FCC409] to-[#FFD700] scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Navigation Dots */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3 md:hidden">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-gradient-to-r from-[#FCC409] to-[#FFD700] scale-125"
                  : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>


    </section>
    </>
  );
}
