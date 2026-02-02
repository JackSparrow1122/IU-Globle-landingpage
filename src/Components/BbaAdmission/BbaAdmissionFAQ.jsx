import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import faqImage from "../../assets/faq.png";

/* ---------------- FAQ DATA ---------------- */
const FAQ_DATA = [
  {
    question: "Q1. What is the eligibility for BBA admission at Indira University?",
    answer:
      "You need to have passed 10+2 from any recognized board with minimum 45% aggregate. All streams (Commerce, Science, Arts) are eligible.",
  },
  {
    question: "Q2. Which entrance exams are accepted for BBA admission?",
    answer:
      "We accept CUET and conduct our own Indira University Common Entrance Test (IU-CET).",
  },
  {
    question: "Q3. What is the BBA course fee at Indira University Pune?",
    answer:
      "The fee ranges from ₹1.5–3.5 Lakh depending on the programme (General BBA or Honours). Scholarships are also available.",
  },
  {
    question: "Q4. What is the average placement package for BBA graduates?",
    answer:
      "The average package is ₹6 LPA, with the highest packages going up to ₹9 LPA.",
  },
  {
    question: "Q5. Can I pursue MBA after BBA from Indira University?",
    answer:
      "Yes, our BBA graduates have been placed in top Indian and international B-schools.",
  },
  {
    question: "Q6. Are hostel facilities available?",
    answer:
      "Yes, we provide separate AC hostels for boys and girls with WiFi, mess, gym, and 24/7 security.",
  },
  {
    question: "Q7. What specializations are offered in BBA?",
    answer:
      "Marketing, Finance, HR, Digital Marketing, Banking & Finance, International Business, Logistics, Entrepreneurship, and more.",
  },
  {
    question: "Q8. Is work experience required for BBA admission?",
    answer:
      "No, BBA is an undergraduate program. No work experience is required.",
  },
];

/* ---------------- ACCORDION ITEM ---------------- */
const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div
      className={`border border-gray-100 rounded-2xl bg-white transition-all duration-300 ${
        isOpen ? "shadow-md ring-1 ring-blue-100" : "hover:shadow-lg"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-5 py-4 text-left"
      >
        <span
          className={`font-semibold text-sm md:text-base ${
            isOpen ? "text-[#990000]" : "text-gray-800"
          }`}
        >
          {item.question}
        </span>

        <span
          className={`w-8 h-8 flex items-center justify-center rounded-full transition-all ${
            isOpen
              ? "bg-[#990000] text-white rotate-180"
              : "bg-gray-100 text-[#990000]"
          }`}
        >
          <FaArrowDown size={12} />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-dashed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */
function BbaAdmissionFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="px-4 md:px-12 py-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT IMAGE */}
        <div className="sticky top-24">
          <img
            src={faqImage}
            alt="Explore Experience Excel"
            className="rounded-3xl w-full max-h-[520px] object-contain "
          />
        </div>

        {/* RIGHT FAQ */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#011E5A]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {FAQ_DATA.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={activeIndex === index}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default BbaAdmissionFAQ;
