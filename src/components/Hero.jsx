import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
      <p>LET'S GET</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Pack<span className='text-yellow-200'>normous</span>
      </h1>
      </div>

      <p className='text-sm md:text-base font-light'>I do acknowledgement that I may become <span className='text-yellow-200 font-medium'>unbelievably packnormous</span> and accept all risks of becoming a <span className='text-yellow-200 font-medium'>hulk-like figure</span>, and as such possess a scary looking physique
      </p>
      <button className='px-4 py-2 rounded-md border-[2px] bg-slate-700 border-yellow-200 border-solid yellowShadow duration-200'>
        <p>Accept & Begin</p>
      </button>
    </div>
  )
}
