import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'



function App() {
  const [workout, setWorkout] = useState(null)

  return (
    <main className='min-h-screen flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero/>
      <Generator/>
      {workout && (<Workout/>)}
    </main>
  )
}

export default App
