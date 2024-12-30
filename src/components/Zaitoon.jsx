import React from 'react';

const Zaitoon = () => {
  return (
    <div className="min-h-screen bg-[#8A8CE3] flex flex-col lg:flex-row items-center justify-center gap-8 p-4 lg:p-8">
      {/* Image Container */}
      <div className="relative w-full lg:w-1/2 aspect-square max-w-xl flex items-center justify-center">
        <img
          className="absolute w-[60%] sm:w-[65%] lg:w-[80%]"
          src="/Rectangle.svg"
          alt="container"
        />
        <img
          className="absolute w-[40%] sm:w-[45%] lg:w-[80%] left-[17%] bottom-[27%] transform -translate-x-4"
          src="/zaitoon.svg"
          alt="zaitoon"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 ml-10 flex flex-col items-center lg:items-start space-y-8 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-poppins text-white text-center lg:text-left">
          ZAITOON
        </h1>
        <p className="text-white font-poppins text-center lg:text-left text-sm sm:text-base lg:text-lg max-w-prose">
          Improved layout for better navigation through menus, locations, and
          special card designs.
        </p>
        <div className="space-y-2 w-full">
          <p className="text-white font-poppins text-sm sm:text-base">
            <strong>Project type:</strong> Website
          </p>
          <p className="text-white font-poppins text-sm sm:text-base">
            <strong>Role:</strong> UX Research Brand Designer
          </p>
          <p className="text-white font-poppins text-sm sm:text-base">
            <strong>Industry:</strong> Food
          </p>
        </div>
        <a
          href="/"
          className="mt-6 bg-[#454563] bg-opacity-90 tracking-[0.03em] font-bold font-poppins text-xs sm:text-sm text-white antialiased py-3 px-5 lg:py-4 lg:px-6 rounded-full hover:bg-opacity-100 transition-all"
        >
          View case study
        </a>
      </div>
    </div>
  );
};

export default Zaitoon;