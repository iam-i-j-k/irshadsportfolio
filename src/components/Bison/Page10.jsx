import React from 'react'

const Page10 = () => {
  return (
    <div className="flex flex-col items-start justify-center p-4 sm:p-6 md:p-10 pt-12 md:pt-20 gap-8 md:gap-32 max-w-full overflow-hidden">
        <div className="flex items-center gap-3">
            <h1 className="text-xl sm:text-2xl font-bold font-poppins">
                High Fidelity Mockup
            </h1>
        </div>
        <div className='flex w-full items-center justify-center gap-16 pl-5'>
            <img src="page10.png" alt="" />
        </div>
        <div className='flex w-full items-center justify-center gap-16 pl-5'>
            <img src="page10-2.png" alt="" />
        </div>
        <div className='flex w-full items-center justify-center gap-16 pl-5'>
            <img src="page10-3.png" alt="" />
        </div>
        <div className="flex items-center justify-center w-full">
            <a
            href="/bisoncasestudy"
            className="mt-6 bg-[#454563] bg-opacity-90 tracking-[0.03em] font-bold font-poppins text-xs sm:text-sm text-white antialiased py-3 px-5 lg:py-4 lg:px-6 rounded-full hover:bg-opacity-100 transition-all"
            >
            View hi-fi prototype
            </a>
        </div>
    </div>
  )
}

export default Page10