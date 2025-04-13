import React from 'react'

const Page1 = () => {
  return (
    <div className="relative bg-[#B8A552] min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-0">
    <div className="w-full pt-10 md:w-[50vw] flex justify-center">
      <img
        className="absolute top-0 left-0 w-[10%] md:w-[25%] object-contain"
        src="/iphone1.svg"
        alt="music"
      />
      <img 
        className="absolute left-[10%] top-[13%] md:left-[16%] w-[10%] md:w-[16%] object-contain"
        src="/iphone2.svg"
        alt="music"
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
          <strong>Project type:</strong> Mobile Application
        </div>
        <div className="text-white font-poppins text-sm md:text-base">
          <strong>Role:</strong> UX Research + Brand Designer
        </div>
        <div className="text-white font-poppins text-sm md:text-base">
          <strong>Industry:</strong> Entertainment
        </div>
      </div>
      <a
        target="_blank"
        href="https://www.figma.com/design/vGqTNYS1YHXDqks8WeeT6Z/music?node-id=16-49&t=Uc79ZFp5oPWOXKrW-1"
        className="bg-[#454563] bg-opacity-90 tracking-[0.03em] font-bold font-poppins text-xs md:text-sm text-white py-3 px-5 lg:py-4 lg:px-6 rounded-full hover:bg-opacity-100 transition-all"
      >
        View hi-fi prototype
      </a>
    </div>
    </div>
  )
}

export default Page1