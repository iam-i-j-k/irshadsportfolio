import React from 'react'

const Page4 = () => {
  return (
    <div className="flex flex-col items-start justify-center p-4 sm:p-6 md:p-10 pt-12 md:pt-20 gap-8 md:gap-16 max-w-full overflow-hidden">
        <div className="flex items-center gap-3">
            <h1 className="text-xl sm:text-2xl font-bold font-poppins">
                Next Project
            </h1>
        </div>
        <div className='flex relative bg-[#0075A2] w-full h-[100vh] items-center justify-center gap-16 p-24'>
            <div className='flex justify-center items-center flex-col w-full'>
                <img src="/delivery.svg" alt="iphone1" />
            </div>
            <div className='flex justify-center items-start flex-col w-[%50]'>
                <p className='text-white w-[70%] font-poppins text-3xl font-semibold leading-[50px] text-wrap'>"From Chaos to Clarity: Master Your Warehouse Management with Our Intuitive Application”</p>
            </div>
        </div>  
        <div className="flex items-center justify-center w-full">
            <a
            href="/warehousecasestudy"
            className="mt-6 bg-[#454563] bg-opacity-90 tracking-[0.03em] font-bold font-poppins text-xs sm:text-sm text-white antialiased py-3 px-5 lg:py-4 lg:px-6 rounded-full hover:bg-opacity-100 transition-all"
            >
            Next project -&gt;
            </a>
        </div>
    </div>
  )
}

export default Page4