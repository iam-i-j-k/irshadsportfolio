import React from 'react'

const buttons = [
    {
        title: 'visit the park'
    },
    {
        title: 'continue'
    },
    {
        title: 'Adopt'
    },
    {
        title: 'Donate'
    },
    {
        title: 'Buy'
    },
    {
        title: 'Home'
    },
    {
        title: 'About'
    }
]

const Page9 = () => {
  return (
    <div className="flex flex-col items-start justify-center p-4 sm:p-6 md:p-10 pt-12 md:pt-20 gap-8 md:gap-16 max-w-full overflow-hidden bg-[#FFF0F0] relative">
        <div className="flex items-center gap-3">
            <h1 className="text-xl sm:text-2xl font-bold font-poppins">
                Design System
            </h1>
        </div>
        <div className='flex flex-col items-start justify-center gap-8 p-5'>
            <div className='text-xl font-poppins'>
                Buttons
            </div>
            <div className='grid grid-cols-3 gap-20'>
                {buttons.map((button, index) => (
                    <button key={index} className='bg-[#FF8181] tracking-[0.03em] font-poppins text-xs sm:text-xl text-white antialiased py-3 px-5 lg:py-5 lg:px-20 rounded-full hover:bg-opacity-100 transition-all'>
                        {button.title}
                    </button>
                ))}
            </div>
        </div>
        <div className='text-xl font-poppins'>
            Color Pallette
        </div>
        <div className='relative flex items-center justify-center gap-20'>
            <div className='flex flex-col items-center justify-center gap-8'>
                <div className='rounded-full bg-[#F0F9F9] border-[0.6px] border-[#000000] w-20 h-20'></div>
                <span>#F0F9F9</span>
            </div>
            <div className='flex flex-col items-center justify-center gap-8'>
                <div className='rounded-full bg-[#FF8181] border-[0.6px] border-[#000000] w-20 h-20'></div>
                <span>#FF8181</span>
            </div>
            <div className='flex flex-col items-center justify-center gap-8'>
                <div className='rounded-full bg-[#FFFFFF] border-[0.6px] border-[#000000] w-20 h-20'></div>
                <span>#FFFFFF</span>
            </div>
        </div>
        <div className='text-xl font-bold font-poppins'>
            Typography
        </div>
        <div className='flex items-start justify-center gap-20 p-5'>
            <div className='flex flex-col items-start justify-center gap-20 font-inter'>
                <div className='text-5xl'>
                    Heading 1
                </div>
                <div className='text-2xl'>
                    Button
                </div>
                <div className='text-lg'>
                    Heading 2
                </div>
                <div className='text-sm'>
                    paragraph
                </div>
                <div className='text-xs'>
                    Heading 3
                </div>
            </div>
            <div className='flex flex-col items-start justify-center gap-20 font-inter'>
                <div className='text-5xl'>
                    48px
                </div>
                <div className='text-2xl'>
                    24px
                </div>
                <div className='text-lg'>
                    18px
                </div>
                <div className='text-sm'>
                    16px
                </div>
                <div className='text-xs'>
                    12px
                </div>
            </div>
            <div className='flex flex-col items-start justify-center gap-20 font-inter'>
                <div className='text-5xl'>
                    Inter
                </div>
                <div className='text-2xl'>
                    Inter
                </div>
                <div className='text-lg'>
                    Inter
                </div>
                <div className='text-sm'>
                    Inter
                </div>
                <div className='text-xs'>
                    Inter
                </div>
            </div>
        </div>
        <div className="absolute bottom-0 -right-32">
            <div className='w-10 h-10 absolute -top-16 right-64 bg-[#FFC7C766] rounded-full'></div>
            <div className='w-64 h-64 bg-[#FFC7C766] rounded-full'></div>
        </div>
    </div>
  )
}

export default Page9