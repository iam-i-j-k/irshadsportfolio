import React from 'react'

const Page3 = () => {
  return (
    <div className="flex flex-col items-start justify-center p-10 gap-20 min-h-screen">
    <div className="text-2xl font-poppins pb-32">
      <strong>Design Process</strong>
    </div>
    <div className="flex flex-col w-full gap-10 place-items-center relative">
        <span className='absolute -top-[40%] left-[40%]'>Iteration</span>
      <div>
        <img 
        className=' w-[57vw] absolute bottom-[86%] left-[10%] h-auto'
        src="iteration1.jpg" alt="iteration" />
      </div>
      <div className='min-w-full flex items-center justify-center gap-32'>
        <img className='absolute left-[18%] top-[35%] w-[65%]' src="/arrows.png" alt="" />
        <div className='flex flex-col items-center justify-start gap-5'>
            <img src="/empathy.jpg" alt="" />
            <div>empathy</div>
        </div>
        <div className='flex flex-col items-center justify-start gap-5'>
            <img src="/define.jpg" alt="" />
            <div>define</div>
        </div>
        <div className='flex flex-col items-center justify-start gap-5'>
            <img src="/ideate.jpg" alt="" />
            <div>ideate</div>
        </div>
        <div className='flex flex-col items-center justify-start gap-5'>
            <img src="/prototype.jpg" alt="" />
            <div>prototype</div>
        </div>
        <div className='flex flex-col items-center justify-start gap-5'>
            <img src="/test.jpg" alt="" />
            <div>test</div>
        </div>
      </div>
      <span className='absolute -bottom-[30%] left-[40%]'>Iteration</span>
      <div>
        <img 
        className=' w-[75vw] absolute -bottom-[13%] left-[10%] h-auto'
        src="iteration2.jpg" alt="iteration" />
      </div>
    </div>
  </div>
  )
}

export default Page3