import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'



function App() {

  return (
    <main className='min-h-screen flex-col bg-gradient-to-r from-slate-600 to-slate-700 text-white text-sm sm:text-base'>
      <Hero/>
      <Generator/>
      <Workout/>
    </main>
  )
}

export default App
