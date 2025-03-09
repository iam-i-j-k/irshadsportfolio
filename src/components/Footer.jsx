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
          <div className='w-fit hover:opacity-90 transition-opacity'>
            <a 
              href="https://www.linkedin.com/in/irshad-khan-75a89a231"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="/LinkedIn.jpg" 
                alt="LinkedIn" 
                className="w-8 sm:w-20 h-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer