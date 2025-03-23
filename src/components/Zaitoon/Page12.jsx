import React from 'react'

const Page12 = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 pt-12 md:pt-20 gap-6 md:gap-12 max-w-full overflow-hidden'>
        <div className='relative'>
            <img className='' src="/findus.png" alt="FindUs" />
            <img className='absolute bottom-6 right-10' src="/direction.svg" alt="" />
        </div>
        <div>
        <p className="font-poppins">
         The “Find Us” feature prominently displays the name of the restaurant along with a button or link that redirects users to Google Maps for easy navigation.        </p>
      </div>
    </div>
  )
}

export default Page12