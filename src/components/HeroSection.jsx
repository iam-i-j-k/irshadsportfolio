import React from 'react';

const HeroSection = () => {
  return (
    <div className="sm:h-[80vh] h-[50vh] mx-auto mt-48 sm:mt-24 lg:mt-60 w-[90vw] sm:w-[85vw] lg:w-[70vw] bg-[#FFE606] rounded-t-full relative px-4">
      {/* Container for all content with adjusted vertical centering */}
      <div className="absolute inset-0 flex flex-col items-center justify-center -translate-y-24 sm:-translate-y-16 lg:-translate-y-48">
        {/* Top text */}
        <p className="text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6 lg:mb-8 font-poppins text-center">
          Hi, I am
        </p>

        {/* Centered name with decorative elements */}
        <div className="relative">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-poppins text-center">
            Irshad Khan
          </h1>
          <span className="hidden sm:block absolute top-[2rem] -left-16 lg:-left-40 w-12 lg:w-auto">
            <img src="/celeb.svg" alt="Decorative Icon" className="w-full" />
          </span>
          <span className="hidden sm:block absolute top-[2rem] -right-16 lg:-right-40 w-12 lg:w-auto">
            <img src="/celeb2.svg" alt="Decorative Icon" className="w-full" />
          </span>
        </div>

        {/* Bottom text */}
        <p className="text-base sm:text-xl lg:text-2xl mt-8 sm:mt-12 lg:mt-16 font-[400] antialiased font-poppins text-center max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]">
          Product designer with an education background. I'm an empathetic designer, 
          a data-driven decision-maker, and a collaborative communicator.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;