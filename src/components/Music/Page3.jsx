import React from 'react'

const Page3 = () => {
  return (
    <div className="flex flex-col items-start justify-center px-10 pb-10 min-h-screen gap-10"> 
         <div className="text-2xl font-poppins pb-32">
            <strong>High fidelity mockups</strong>
        </div>
        <div className="flex flex-row flex-wrap w-full justify-center items-center relative gap-44">
            <img src="music1.svg" alt="music" />
            <img src="music2.svg" alt="music" />
            <img src="music3.svg" alt="music" />
            <img src="music4.svg" alt="music" />
        </div>
        <div className="flex items-center justify-center w-full">
            <a
            target="_blank"
            href="https://www.figma.com/design/vGqTNYS1YHXDqks8WeeT6Z/music?node-id=16-49&t=Uc79ZFp5oPWOXKrW-1"
            className="mt-6 bg-[#454563] bg-opacity-90 tracking-[0.03em] font-bold font-poppins text-xs sm:text-sm text-white antialiased py-3 px-5 lg:py-4 lg:px-6 rounded-full hover:bg-opacity-100 transition-all"
            >
            View hi-fi prototype
            </a>
        </div>
        <div className='text-3xl md:text-5xl w-full flex items-center justify-center font-bold font-inter'>
            Thankyou for scrolling through  project 
        </div>
    </div>
  )
}

export default Page3