import React from 'react'

const Page3 = () => {
  return (
    <div className="flex flex-col items-start justify-center px-10 pb-10 min-h-screen">
        <div className="text-2xl font-poppins pb-32">
            <strong>Project Timeline</strong>
        </div>
        <div className="flex flex-col w-full place-items-center relative">
        <div>
            <img 
            src="timeline.svg" alt="timeline" />
        </div>
        </div>
        <div className='relative min-w-full flex items-center justify-center '>
            <strong className='absolute top-[10%] left-0 text-2xl font-poppins'>Design Process</strong>
            <img src="/designprocess.svg" alt="Design Process" />
            <div className='absolute flex gap-20'>
                <div className='flex flex-col items-center justify-start gap-5'>
                    <strong className='absolute left-[-105%] top-4 text-2xl -rotate-[10deg] tracking-tight'>Empathize</strong>
                </div>
                <div className='flex flex-col items-center justify-start gap-5'>
                    <strong className='absolute left-[-38%] top-3 text-2xl tracking-tight'>Define</strong>
                </div>
                <div className='flex flex-col items-center justify-start gap-5'>
                    <strong className='absolute left-[39%] top-8 text-2xl -rotate-[10deg] tracking-tight'>Ideate</strong>
                </div>
                <div className='flex flex-col items-center justify-start gap-5'>
                    <strong className='absolute right-[-30%] top-7 text-2xl rotate-[7deg] tracking-tight'>Prototype</strong>
                </div>
                <div className='flex flex-col items-center justify-start gap-5'>
                    <strong className='absolute right-[-104%] top-8 text-2xl tracking-tight'>Test</strong>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Page3