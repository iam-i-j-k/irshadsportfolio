import React from 'react'

const Page11 = () => {
  return (
    <div className="flex flex-col items-start justify-center p-4 sm:p-6 md:p-10 pt-12 md:pt-20 gap-8 md:gap-32 max-w-full overflow-hidden">
        <div className="flex items-center gap-3">
            <h1 className="text-xl sm:text-2xl font-bold font-poppins">
                High Fidelity Mockup
            </h1>
        </div>
        <div className='flex w-full items-center justify-center gap-16 pl-5'>
            <img src="page11.png" alt="" />
        </div>
        <div className="flex items-center justify-center w-full">
            <a
            target="_blank"
            href="https://www.figma.com/proto/bhN0ZMTwW2rkML009LEdU9/protect-bison?page-id=363%3A127&node-id=363-128&viewport=879%2C472%2C0.1&t=bUqCMUg1XT9cm2t8-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=363%3A128&show-proto-sidebar=1"
            className="mt-6 bg-[#454563] bg-opacity-90 tracking-[0.03em] font-bold font-poppins text-xs sm:text-sm text-white antialiased py-3 px-5 lg:py-4 lg:px-6 rounded-full hover:bg-opacity-100 transition-all"
            >
            View hi-fi prototype
            </a>
        </div>
        <div className='text-3xl md:text-5xl w-full flex items-center justify-center font-bold font-inter'>
            Thankyou for scrolling through protect bison project 
        </div>
    </div>
  )
}

export default Page11