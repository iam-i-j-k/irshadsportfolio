import React from 'react'


const Page2 = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 gap-5">
    <div className="grid grid-cols-1 font-poppins sm:grid-cols-1 gap-10 w-full">
      <div className="text-sm sm:text-lg pb-20">
      As a part of a 24 hr design competition I decided to create an Music applicaton for true audiophiles where it’s unique proposition will be to provide all their favourite artists and favuorite songs in the same place         
      </div>
    </div>
    <div className="text-2xl flex w-full items-start justify-start font-poppins">
    <strong>Wireframes</strong>
    </div>
    <div className="flex flex-col w-full place-items-center relative">
        <div>
            <img 
            src="wireframes.svg" alt="timeline" />
        </div>
    </div>
    <div className="flex items-center justify-center w-full">
            <a
            target="_blank"
            href="https://www.figma.com/design/vGqTNYS1YHXDqks8WeeT6Z/music?node-id=0-1&t=5gwjFqv3MGOm3B4x-1"
            className="bg-[#454563] bg-opacity-90 tracking-[0.03em] font-bold font-poppins text-xs sm:text-sm text-white antialiased py-3 px-5 lg:py-4 lg:px-6 rounded-full hover:bg-opacity-100 transition-all"
            >
            View low-fi mockup
            </a>
    </div>
  </div>
  )
}

export default Page2