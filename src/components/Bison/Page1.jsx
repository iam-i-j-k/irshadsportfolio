import React from 'react'

const Page1 = () => {
  return (
    <div className="bg-[#97927C] min-h-screen flex flex-col md:flex-row items-center md:items-start justify-center p-6 md:p-0">
    <div className="w-full pt-10 md:w-[50vw] flex justify-center md:justify-start relative">
      <img
        className="absolute left-[5%] md:left-[20%] w-[40%] md:w-[50%] object-contain"
        src="/bisonphone.svg"
        alt="bison"
      />
    </div>
    <div className="w-full md:w-[50vw] flex flex-col items-center md:items-start justify-center p-6 space-y-6">
      <div className="w-full max-w-md text-center md:text-left">
        <h1 className="font-poppins font-bold text-2xl md:text-3xl text-white leading-[1.5]">
          To make people more aware of how important a bison is in history
          of American culture
        </h1>
      </div>
      <div className="grid grid-cols-1 w-full max-w-md gap-4">
        <div className="text-white font-poppins text-sm md:text-base">
          <strong>Project type:</strong> Website + Mobile
        </div>
        <div className="text-white font-poppins text-sm md:text-base">
          <strong>Role:</strong> UX Research Brand Designer
        </div>
        <div className="text-white font-poppins text-sm md:text-base">
          <strong>Industry:</strong> Animal Protection
        </div>
      </div>
      <a
        href="/bisoncasestudy"
        className="bg-[#454563] bg-opacity-90 tracking-[0.03em] font-bold font-poppins text-xs md:text-sm text-white py-3 px-5 lg:py-4 lg:px-6 rounded-full hover:bg-opacity-100 transition-all"
      >
        View hi-fi prototype
      </a>
    </div>
    </div>
  )
}

export default Page1