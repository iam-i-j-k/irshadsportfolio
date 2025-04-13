import React from "react";

const Page8 = () => {
  return (
    <div className="flex flex-col items-start justify-center p-4 sm:p-6 md:p-10 pt-12 md:pt-20 gap-8 md:gap-16 max-w-full overflow-hidden">
      <div className="flex items-center gap-3">
        <h1 className="text-xl sm:text-2xl font-bold font-poppins">
          Low fidelity mockup
        </h1>
      </div>
      <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center gap-16 pl-5">
        <img src="page8(i).svg" alt="" />
        <img src="page8(ii).svg" alt="" />
        <img src="page8(iii).svg" alt="" />
      </div>
      <div className="flex items-center justify-center w-full">
        <a
          target="_blank"
          href="https://www.figma.com/design/bhN0ZMTwW2rkML009LEdU9/protect-bison?node-id=89-123&t=iDuONr7d87T9OaDX-1"
          className="mt-6 bg-[#454563] bg-opacity-90 tracking-[0.03em] font-bold font-poppins text-xs sm:text-sm text-white antialiased py-3 px-5 lg:py-4 lg:px-6 rounded-full hover:bg-opacity-100 transition-all"
        >
          View lo-fi mockup
        </a>
      </div>
    </div>
  );
};

export default Page8;
