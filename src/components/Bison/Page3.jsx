import React from 'react'

const Page3 = () => {
  return (
    <div className="flex flex-col items-start bg-[#FFF0F0] justify-center p-10 pt-20 gap-20">
    <div className="text-2xl font-poppins">
      <strong>Design Process</strong>
    </div>
    <div className="grid grid-cols-5 grid-rows-2 w-full gap-10 place-items-center relative">
      <div className="col-start-1 row-start-1 flex justify-center items-center text-xl font-poppins w-40 h-40 rounded-full bg-[#FF8888] text-white">
        Empathize
      </div>
      <img
        src="arrow1.svg"
        alt="Arrow from Empathize to Define"
        className="absolute left-[16%] top-[46%] w-16 h-16 "
      />
      <div className="col-start-3 row-start-1 flex justify-center items-center text-xl font-poppins w-40 h-40 rounded-full bg-[#FF8888] text-white">
        Ideate
      </div>
      <img
        src="arrow2.svg"
        alt="Arrow from Empathize to Define"
        className="absolute left-[38%] top-[46%] w-16 h-16"
      />

      <div className="col-start-5 row-start-1 flex justify-center items-center text-xl font-poppins w-40 h-40 rounded-full bg-[#FF8888] text-white">
        Test
      </div>

      <img
        src="arrow1.svg"
        alt="Arrow from Empathize to Define"
        className="absolute left-[58%] top-[46%] w-16 h-16"
      />

      <div className="col-start-2 row-start-2 flex justify-center items-center text-xl font-poppins w-40 h-40 rounded-full bg-[#FF8888] text-white">
        Define
      </div>

      <img
        src="arrow2.svg"
        alt="Arrow from Empathize to Define"
        className="absolute left-[79%] top-[46%] w-16 h-16"
      />

      <div className="col-start-4 row-start-2 flex justify-center items-center text-xl font-poppins w-40 h-40 rounded-full bg-[#FF8888] text-white">
        Prototype
      </div>
    </div>
  </div>
  )
}

export default Page3