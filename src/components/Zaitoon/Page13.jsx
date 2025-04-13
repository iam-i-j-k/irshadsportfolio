import React from 'react'

const Page13 = () => {
  return (
    <div className="flex flex-col items-start justify-center space-y-20 p-4 sm:p-6 md:p-10 pt-12 md:pt-20 gap-16 md:gap-32 max-w-full overflow-hidden">
        <div>
            <h1 className="text-xl sm:text-2xl font-bold font-poppins">High fidelity</h1>
        </div>
        <div className='flex flex-row justify-center items-start gap-20 w-full'>
            <div><img src="/hf1.svg" alt="hf1" /></div>
            <div><img src="/hf2.svg" alt="hf2" /></div>
        </div>
        <div className='flex flex-row justify-center items-start gap-20 w-full'>
            <div><img src="/hf3.svg" alt="hf3" /></div>
            <div><img src="/hf4.svg" alt="hf4" /></div>
        </div>
        <div className='w-full flex justify-center items-center'>
            <a
                target="_blank"
                href="https://www.figma.com/proto/5NeKHoeq9OcfELowzksbEq/re-design-zaitoon?page-id=185%3A573&node-id=185-574&viewport=490%2C421%2C0.07&t=RHhTBVVLqAHcKiti-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=185%3A574"
                className="bg-[#454563] bg-opacity-90 tracking-[0.03em] font-bold font-poppins text-xs md:text-sm text-white py-3 px-5 lg:py-4 lg:px-6 rounded-full hover:bg-opacity-100 transition-all"
            >
                View hi-fi prototype
            </a>        
        </div>
    </div>
  )
}

export default Page13