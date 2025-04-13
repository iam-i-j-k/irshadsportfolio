import React from "react";

const Page10 = () => {
  return (
    <div className="flex flex-col items-start justify-center p-4 sm:p-6 md:p-10 pt-12 md:pt-20 gap-8 md:gap-16 max-w-full overflow-hidden">
      <div className="flex items-center gap-3">
        <h1 className="text-xl sm:text-2xl font-bold font-poppins">
          Prototype
        </h1>
      </div>
      <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center gap-16 pl-5">
        <h2 className="text-lg sm:text-xl font-bold font-poppins">Draft 1</h2>
      </div>
      <div className="relative p-10">
        <img className="absolute left-[6%] top-[3%] w-[7vw]" src="/leftarrow.png" alt="leftarrow" />
        <img src="/proto1.png" alt="prototype" />
      </div>
      <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center gap-16 pl-5">
        <h2 className="text-lg sm:text-xl font-bold font-poppins">Draft 2</h2>
      </div>
      <div className="relative">
        <img className="p-10" src="/returnorder.png" alt="returnorder" />
      </div>
      <div className="flex items-center justify-center w-full">
        <a
          target="_blank"
          href="https://www.figma.com/design/urDjh3CiMjYfwtx4Vakpg6/WMS?node-id=680-404&t=B7x7T7g33RUrE65C-1"
          className="mt-6 bg-[#454563] bg-opacity-90 tracking-[0.03em] font-bold font-poppins text-xs sm:text-sm text-white antialiased py-3 px-5 lg:py-4 lg:px-6 rounded-full hover:bg-opacity-100 transition-all"
        >
          View lo-fi mockup
        </a>
      </div>
    </div>
  );
};

export default Page10