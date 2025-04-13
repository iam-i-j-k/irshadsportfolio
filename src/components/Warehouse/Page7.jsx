import React from 'react'



const Page7 = () => {
  return (
    <div className="flex flex-col items-start justify-center p-4 sm:p-6 md:p-10 pt-12 md:pt-20 gap-8 md:gap-16 max-w-full overflow-hidden">
      <div className="flex items-center gap-3">
        <h1 className="text-xl sm:text-2xl font-bold font-poppins">
        Competitive analysis
        </h1>
      </div>
      <div className="relative w-full">
        <p className='font-poppins'>Lets compare with our direct competitors who provide service to same or different kind of users and what are the pros and cons in their service to cover the gap in the market so that we can capture the market</p>
      </div>
      <div className='flex justify-center items-center w-full'>
        <img src="/compare.png" alt="compare" />
      </div>
      

    </div>
  )
}

export default Page7