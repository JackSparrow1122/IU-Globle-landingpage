import React from "react";

const CompRecruiter = () => {
  const specialCard = {
    title: "What's Included in Global Immersion Fee?",
    points: [
      "International Travel: Airfare to and from South Korea",
      "Visa Processing: Complete visa documentation and charges",
      "Accommodation: Two weeks' comfortable lodging near Korea University",
      "Academic Materials: Programme documentation and resources",
      "Certification: Official Korea University internship completion certificate",
      "Professional Networking: Access to Korea University alumni networks",
    ],
  };

  const feeCard = {
    title: "Fee Structure",
    points: [
      "Year 1: ₹3,50,000 (Includes ₹1,75,000 regular BBA International Business fees + ₹1,75,000 Global Immersion component)",
      "Year 2 & 3 : ₹1,75,000",
    ],
  };

  const topCards = [
    {
      title: "Korean Language Training",
    },
    {
      title: "International Internship at Korea University",
    },
  ];

  return (
    <div className="py-12 bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#011E5A]">
          Exclusive Global Immersion Programme Components
        </h2>
      </div>

      {/* Top Cards */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="grid md:grid-cols-2 gap-6">
          {topCards.map((card, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#011E5A]/5 to-[#2899A4]/5 rounded-2xl border border-[#2899A4]/30 p-4 shadow"
            >
              <h3 className="text-[#011E5A] font-bold text-xl text-center">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* What's Included (BIG) + Fee Structure (SMALL) */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* BIG CARD */}
          <div className="lg:col-span-2 bg-gradient-to-r from-[#011E5A]/5 to-[#2899A4]/5 rounded-2xl border-2 border-[#2899A4]/30 p-8 shadow-lg">
            <h3 className="text-[#011E5A] font-bold text-2xl mb-6">
              {specialCard.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {specialCard.points.map((point, i) => (
                <div key={i} className="flex items-start">
                  <span className="text-[#2899A4] mr-3">✔</span>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SMALL CARD */}
          <div className="bg-gradient-to-r from-[#011E5A]/5 to-[#2899A4]/5 rounded-2xl border-2 border-[#2899A4]/30 p-6 shadow-lg">
            <h3 className="text-[#011E5A] font-bold text-xl mb-4">
              {feeCard.title}
            </h3>
            <div className="space-y-3 text-gray-700 text-sm">
              {feeCard.points.map((point, i) => (
                <div key={i} className="flex items-start">
                  <span className="text-[#2899A4] mr-2">✔</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Important Note */}
        <div className="mt-8 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl border border-amber-300 p-6">
          <h3 className="text-amber-800 font-bold text-xl mb-2">
            Important Note
          </h3>
          <p className="text-amber-700">
            Food expenses during the South Korea internship remain the student's
            responsibility, providing flexibility in dining choices and budget
            management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompRecruiter;
