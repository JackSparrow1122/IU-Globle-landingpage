import React, { useEffect } from "react";
import Image1 from "../../assets/Building.jpg";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaBullhorn,
  FaHandshake,
  FaChartLine,
  FaRegCalendarAlt,
  FaUsers,
  FaRegClipboard,
  FaUserTie,
  FaGraduationCap,
} from "react-icons/fa";

import { gsap } from "gsap";

function BbaAdmissionOverview() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const circles = document.querySelectorAll(".circle");
    const icons = document.querySelectorAll(".icon");

    circles.forEach((circle, index) => {
      const icon = icons[index];

      gsap.set(circle, { opacity: 0, x: -40 });

      circle.parentElement.addEventListener("mouseenter", () => {
        gsap.to(circle, { opacity: 1, x: 0, duration: 0.3 });
        gsap.to(icon, { rotationY: 360, duration: 0.5 });
      });

      circle.parentElement.addEventListener("mouseleave", () => {
        gsap.to(circle, { opacity: 0, x: -40, duration: 0.3 });
        gsap.to(icon, { rotationY: 0, duration: 0.5 });
      });
    });
  }, []);

  const cardData = [
    { icon: FaBullhorn, title: "Industry-Ready Curriculum" },
    { icon: FaHandshake, title: "Consistent Placement Record" },
    { icon: FaRegCalendarAlt, title: "Expert Faculty & Mentorship" },
    { icon: FaChartLine, title: "Guest Lectures & Industry Sessions" },
    { icon: FaUsers, title: "Advanced Infrastructure" },
    { icon: FaRegClipboard, title: "Industry Readiness Programme" },
    { icon: FaUserTie, title: "Widespread Alumni Network" },
    { icon: FaGraduationCap, title: "Experiential Learning Methodology" },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full px-6 md:px-16 py-10 poppins-regular">
        {/* Background Image (Desktop & Tablet only) */}
        <div
          className="hidden md:block absolute inset-0 bg-right bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${Image1})` }}
        />

        {/* Overlay */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#7A0C1E] via-[#5C1233] to-[#2A0F3F] to-transparent" />

        {/* Content */}
        <div
          className="relative z-10 md:w-2/3 text-[#011E5A] md:text-white"
          data-aos="fade-right"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            Your Global Immersion Experience at  {" "}
            <span className="text-[#FECD46] md:text-[#FECD46]">
              Korea University
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-700 md:text-gray-200 mb-4 leading-relaxed">
           During your two-week international internship programme at Korea University in Semester 3, you will participate in intensive business workshops, corporate site visits, cross-cultural management seminars, and practical project work. This immersive experience provides invaluable insights into international business operations, Asian market dynamics, and global trade practices whilst building your professional network across borders. 
          </p>


        </div>

        {/* Mobile Image */}
        <div className="block md:hidden mt-6">
          <img
            src={Image1}
            alt="BBA Programme"
            className="w-full h-[240px] object-container  shadow-md"
          />
        </div>
      </div>

    
    </div>
  );
}

export default BbaAdmissionOverview;
