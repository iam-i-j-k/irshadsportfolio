import React from 'react';

const Bison = () => {
  return (
    <div className="min-h-screen bg-[#97927C] p-4 flex flex-col lg:flex-row items-center justify-center gap-8">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-4 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white text-center lg:text-left">
          PROTECT BISON
        </h1>
        <p className="text-white font-poppins text-center lg:text-left text-sm sm:text-base lg:text-lg max-w-prose">
            To make people more aware of how important a bison is in history of American culture, 
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 w-full max-w-xl">
          <div className="text-white font-poppins text-sm sm:text-base">
            <strong>Project type:</strong> Website + Mobile
          </div>
          <div className="text-white font-poppins text-sm sm:text-base">
            <strong>Role:</strong> UX Research Brand Designer
          </div>
          <div className="text-white font-poppins text-sm sm:text-base">
            <strong>Industry:</strong> Animal Protection
          </div>
        </div>
        <a
          href="/"
          className="mt-6 bg-[#454563] bg-opacity-90 tracking-[0.03em] font-bold font-poppins text-xs sm:text-sm text-white antialiased py-3 px-5 lg:py-4 lg:px-6 rounded-full hover:bg-opacity-100 transition-all"
        >
          View case study
        </a>
      </div>

      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 aspect-square max-w-lg flex items-center justify-center">
        {/* Triangle SVG */}
        <img
          className="absolute w-[80%] sm:w-[75%] lg:w-[85%] transform scale-125"
          src="/Triangle.svg"
          alt="triangle"
        />
        {/* Overlay Text */}
        <span className="absolute z-10 bottom-[55%] left-[5%] text-xl sm:text-2xl lg:text-3xl font-bold font-poppins text-white">
          Protect Bison
        </span>
        {/* Bison Image */}
        <img
          className="absolute left-[0%] w-[80%] sm:w-[85%] lg:w-[90%] object-contain"
          src="/bison.jpg"
          alt="bison"
        />
        {/* Phone SVG */}
        <img
          className="absolute w-[25%] sm:w-[30%] lg:w-[40%] right-[5%] bottom-[10%] lg:bottom-[-8%]"
          src="/phone.svg"
          alt="phone"
        />
        {/* Bison SVG */}
        <img
          className="absolute w-[25%] sm:w-[30%] lg:w-[37%] right-[5.8%] bottom-[8%] lg:bottom-[-5.5%]"
          src="/bison.svg"
          alt="bison logo"
        />
      </div>
    </div>
  );
};

export default Bison;