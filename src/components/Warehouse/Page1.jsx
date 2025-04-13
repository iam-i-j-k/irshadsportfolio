import React from 'react'

const Page1 = () => {
  return (
    <div className='flex bg-[#0075A2] w-full min-h-screen items-start justify-start gap-10 p-24'>
        <div className='flex justify-center items-center flex-col w-full'>
            <img src="/delivery.svg" alt="delivery" />
        </div>
        <div className='flex justify-start items-start flex-col w-full gap-10'>
            <p className='text-white text-2xl font-bold font-poppins text-wrap w-[80%]'>"From Chaos to Clarity: Master Your Warehouse Management with Our Intuitive Application”</p>
            <div className="space-y-2 w-full">
                <p className="text-white font-poppins font-medium text-sm sm:text-base">
                    Project type: Desktop Application
                </p>
                <p className="text-white font-poppins text-sm sm:text-base">
                    Role: UX Research Brand Designer
                </p>
                <p className="text-white font-poppins text-sm sm:text-base">
                    Industry: Logistics Management
                </p>
            </div>
            
        </div>
        <div>
                <a
                    href="https://rackup.vercel.app/dashboard"
                    target='_blank'
                    className="bg-[#454563] absolute right-[35%] bottom-[15%] bg-opacity-90 tracking-[0.03em] font-bold font-poppins text-xs md:text-sm text-white py-[10px] px-5 lg:py-4 lg:px-6 rounded-full hover:bg-opacity-100 transition-all"
                >
                    View hi-fi prototype
                </a>        
        </div>
    </div>  
)
}

export default Page1