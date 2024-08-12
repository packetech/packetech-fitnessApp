import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
      <p>...BECOME</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Hulk<span className='text-yellow-100'>normous</span>
      </h1>
      <div>
      
        <img className='mx-auto rounded-full border border-blue-950' src='/hulkpics1.jpeg'/>
        
      </div>
    </div>

      <p className='text-sm md:text-base font-light'>I do acknowledgement that I may become <span className='text-yellow-100 font-medium'>unbelievably hulknormous</span> and accept all risks of becoming a <span className='text-yellow-100 font-medium'>hulk-like figure</span>, and as such possess a scary looking physique
      </p>
      <Button func={() => {
        window.location.href = '#generate'
      }} text={"Accept & Begin"}></Button>
    </div>
  )
}
