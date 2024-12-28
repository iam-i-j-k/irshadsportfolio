import React from 'react';

const Warehouse = () => {
  return (
    <div className="min-h-screen bg-[#8A8CE3] flex flex-col lg:flex-row items-center justify-center gap-8 p-4 lg:p-8">
      {/* Image Container */}
      <div className="relative w-full lg:w-1/2 aspect-square max-w-xl flex items-center justify-center">
        <img
          className="absolute w-[60%] sm:w-[65%] lg:w-[100%]"
          src="/star.svg"
          alt="container"
        />
        <img
          className="absolute w-[80%] sm:w-[85%] lg:w-[90%]"
          src="/frontfacedlaptop.svg"
          alt="laptop"
        />
        <img
          className="absolute w-[40%] sm:w-[45%] lg:w-[78%] left-[13.5%] bottom-[28%] transform -translate-x-4"
          src="/warehouse.svg"
          alt="warehouse"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 ml-10 flex flex-col items-center lg:items-start space-y-8 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-poppins text-white text-center lg:text-left">
          WAREHOUSE
        </h1>
        <p className="text-white font-poppins text-center lg:text-left text-sm sm:text-base lg:text-lg max-w-prose">
        "From Chaos to Clarity: Master Your Warehouse Management with Our Intuitive Application”
        </p>
        <div className="space-y-2 w-full">
          <p className="text-white font-poppins text-sm sm:text-base">
            <strong>Project type:</strong> Desktop Application
          </p>
          <p className="text-white font-poppins text-sm sm:text-base">
            <strong>Role:</strong> UX Research Brand Designer
          </p>
          <p className="text-white font-poppins text-sm sm:text-base">
            <strong>Industry:</strong> Logistics Management
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

export default Warehouse;