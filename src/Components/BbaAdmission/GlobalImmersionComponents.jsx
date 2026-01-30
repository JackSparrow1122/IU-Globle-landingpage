import React, { useEffect, useState } from "react";

const CompRecruiter = () => {
  const [isVisible, setIsVisible] = useState(true);

  const cards = [
    {
      title: "Exclusive Global Immersion Programme Components",
      points: [
        "Korean Language Training",
        "International Internship at Korea University",
      ],
    },
    {
      title: "What's Included in Your Global Immersion Fee",
      points: [
        "Return airfare to South Korea",
        "Complete visa documentation and charges",
        "Two weeks accommodation near Korea University",
        "Programme documentation and academic resources",
        "Official Korea University internship certificate",
        "Access to Korea University alumni network",
      ],
    },
    {
      title: "Important Note",
      points: [
        "Food expenses during the South Korea internship are to be borne by the student",
        "Flexibility in dining choices and personal budget management",
      ],
    },
    {
      title: "Fee Structure",
      points: [
        "Year 1: ₹3,50,000 (₹1,75,000 BBA + ₹1,75,000 Global Immersion)",
        "Year 2 & 3: ₹1,75,000 per year",
      ],
    },
    {
      title: "International Business Career Roles",
      points: [
        "International Business Development Manager",
        "Export–Import Manager / Executive",
        "Global Marketing Manager",
        "International Trade Compliance Officer",
      ],
    },
    {
      title: "Korean MNC Opportunities",
      points: [
        "Management Trainee – Samsung, LG, Hyundai, Kia",
        "Global Account Manager",
        "International Operations Coordinator",
        "Regional Business Development Executive",
      ],
    },
    {
      title: "Trading & Logistics Careers",
      points: [
        "Freight Forwarding Executive",
        "International Logistics Coordinator",
        "Customs Clearance Specialist",
        "Global Supply Chain Planner",
      ],
    },
    {
      title: "Further Education Pathways",
      points: [
        "MBA / PGDM in International Business",
        "Master’s in International Trade",
        "Master’s programmes at Korean Universities",
        "Export Management certifications",
      ],
    },
  ];

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
  }, []);

  return (
    <div className="py-10 lg:py-14 bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#011E5A]">
          Global Immersion Programme
        </h2>
        <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
          International exposure, global careers, and world-class learning
          experience
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <div className="slider-row">
          <div
            className={`slider-track flex ${
              isVisible ? "animate" : ""
            }`}
          >
            {/* Original Cards */}
            {cards.map((card, index) => (
              <Card key={`card-${index}`} data={card} />
            ))}

            {/* Duplicate Cards for seamless loop */}
            {cards.map((card, index) => (
              <Card key={`card-dup-${index}`} data={card} />
            ))}
          </div>
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>

      {/* Styles */}
      <style>{`
        .slider-track {
          width: fit-content;
          will-change: transform;
        }

        .slider-track.animate {
          animation: slideLeft linear infinite;
        }

        .slider-row:hover .slider-track {
          animation-play-state: paused;
        }

        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Speed control */
        @media (max-width: 768px) {
          .slider-track.animate {
            animation-duration: 45s;
          }
        }

        @media (min-width: 769px) {
          .slider-track.animate {
            animation-duration: 70s;
          }
        }
      `}</style>
    </div>
  );
};

/* Card Component */
const Card = ({ data }) => {
  return (
    <div className="flex-none w-[260px] sm:w-[300px] md:w-[340px]
                    mx-3 bg-white rounded-2xl border border-[#2899A4]/40
                    shadow-[0_6px_20px_rgba(40,153,164,0.25)]
                    p-5 transition-all duration-300
                    hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(40,153,164,0.4)]">
      <h3 className="text-[#011E5A] font-bold text-base sm:text-lg mb-3">
        {data.title}
      </h3>

      <ul className="text-gray-600 text-sm sm:text-[15px] space-y-1.5 list-disc pl-4">
        {data.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompRecruiter;
