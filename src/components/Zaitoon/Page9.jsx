import React from 'react'

const Page9 = () => {
  return (
    <div className="flex flex-col items-start justify-center p-4 sm:p-6 md:p-10 pt-12 md:pt-20 gap-6 md:gap-16 max-w-full overflow-hidden">
        <div>
            <h1 className="text-xl sm:text-2xl font-bold font-poppins">High fidelity wireframes</h1>
        </div>
        <div className='flex flex-row justify-center items-start gap-20 w-full'>
            <div><img src="/hfw1.svg" alt="hfw1" /></div>
            <div><img src="/hfw2.svg" alt="hfw2" /></div>
            <div><img src="/hfw3.svg" alt="hfw3" /></div>
            <div><img src="/hfw4.svg" alt="hfw4" /></div>
        </div>
        <div className='w-full flex justify-center items-center'>
            <a
                target='_blank'
                href="https://www.figma.com/design/5NeKHoeq9OcfELowzksbEq/re-design-zaitoon?node-id=73-117&t=Fka1YJeAqno0dSTv-1"
                className="bg-[#454563] bg-opacity-90 tracking-[0.03em] font-bold font-poppins text-xs md:text-sm text-white py-3 px-5 lg:py-4 lg:px-6 rounded-full hover:bg-opacity-100 transition-all"
            >
                View High fidelity wireframes
            </a>        
        </div>
    </div>
  )
}

export default Page9