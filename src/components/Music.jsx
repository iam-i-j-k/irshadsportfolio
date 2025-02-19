import React from 'react'

const Music = () => {
  return (
    <div className="min-h-screen bg-[#B8A552] p-4 flex flex-col lg:flex-row items-center justify-center gap-8">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-4 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white text-center lg:text-left">
          MUSIC
        </h1>
        <p className="text-white font-poppins text-center lg:text-left text-sm sm:text-base lg:text-lg max-w-prose">
            The true premier music app designed for true audiophiles.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 w-full max-w-xl">
          <div className="text-white font-poppins text-sm sm:text-base">
            <strong>Project type:</strong> Mobile Application
           </div>
          <div className="text-white font-poppins text-sm sm:text-base">
            <strong>Role:</strong> UX Research Brand Designer
          </div>
          <div className="text-white font-poppins text-sm sm:text-base">
            <strong>Industry:</strong> Logistics Management
          </div>
        </div>
        <a
          href="/musiccasestudy"
          className="mt-6 bg-[#454563] bg-opacity-90 tracking-[0.03em] font-bold font-poppins text-xs sm:text-sm text-white antialiased py-3 px-5 lg:py-4 lg:px-6 rounded-full hover:bg-opacity-100 transition-all"
        >
          View case study
        </a>
      </div>
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 aspect-square max-w-lg flex items-center justify-center">
        {/* Blade SVG */}
        <img
          className="absolute w-[80%] sm:w-[75%] lg:w-[85%] transform scale-125"
          src="/blade.svg"
          alt="blade"
        />
        <img
          className="absolute left-[0%] w-[40%] sm:w-[45%] lg:w-[50%] object-contain"
          src="/iphone1.svg"
          alt="iphone1"
        />
        <img
          className="absolute bottom-[18%] left-[35%] w-[40%] sm:w-[45%] lg:w-[31%] object-contain"
          src="/iphone2.svg"
          alt="iphone2"
        />
      </div>
    </div>
  )
}

export default Music