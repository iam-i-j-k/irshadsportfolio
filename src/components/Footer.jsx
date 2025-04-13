import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-white border-[#000000] border-t-[0.1px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className='py-6 sm:py-8 lg:py-10 space-y-6 sm:space-y-10'>
          <p className='text-[#0B0D63] font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold'>
            Irshad Khan
          </p>
          <div className='space-y-10'>
            <p className='text-[#0B0D63] font-poppins text-base sm:text-lg hover:text-blue-700 transition-colors'>
              <a href="tel:+918919720530" className="underline">
                +91 89197 20530
              </a>
            </p>
            <p className='text-[#0B0D63] font-poppins text-base sm:text-lg hover:text-blue-700 transition-colors'>
              <a href="mailto:irshadk0051@gmail.com">
                irshadk0051@gmail.com
              </a>
            </p>
          </div>
          <div className='flex space-x-4 sm:space-x-8 lg:space-x-10'>
            <div className='className="inline-flex items-center gap-2 p-2 rounded-lg transition-all duration-300 
                    transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 
                    focus:ring-offset-2 focus:ring-opacity-50"'>
              <a 
                href="https://www.linkedin.com/in/irshad-khan-75a89a231"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img 
                  src="/LinkedIn.jpg" 
                  alt="LinkedIn" 
                  className="w-8 sm:w-16 h-auto"
                  />
              </a>
            </div>
            <div className='className="inline-flex items-center gap-2 p-2 rounded-lg transition-all duration-300 
                    transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 
                    focus:ring-offset-2 focus:ring-opacity-50'>
              <a 
                href="https://irshadkhan.notion.site/Hi-I-am-irshad-khan-1c6233bd453d438ea2137e7c7c8ff125"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img 
                  src="/notion.svg" 
                  alt="notion" 
                  className="w-8 sm:w-16 h-auto"
                  />
              </a>
            </div>
            <div className='className="inline-flex items-center gap-2 p-2 rounded-lg transition-all duration-300 
                    transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 
                    focus:ring-offset-2 focus:ring-opacity-50'>
              <a 
                href="https://medium.com/@irshadk0051"
                target="_blank"
                rel="noopener noreferrer"
                aria-label='Medium'
                >
                <img 
                  src="/medium.svg" 
                  alt="medium" 
                  className="w-8 sm:w-14 h-auto"
                  />
              </a>
            </div>
            <div className='className="inline-flex items-center gap-2 p-2 rounded-lg transition-all duration-300 
                    transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 
                    focus:ring-offset-2 focus:ring-opacity-50'>
              <a 
                href="https://www.youtube.com/@Irshadkhan-lv6xu"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img 
                  src="/youtube.svg" 
                  alt="youtube" 
                  className="w-8 sm:w-16 h-auto"
                  />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer