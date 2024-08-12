import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'



export default function Workout(props) {
  const { workout } = props
  return (
    <SectionWrapper id={'ndifrekeBuiltWorkout'} header={"welcome to"} title={['The', 'TOUGH', 'Arena !']}>
      <div className='flex flex-col gap-4'>
        {workout.map((exercise, i) => {
          return (
            <ExerciseCard i={i} exercise={exercise} key={i} />
          )
        })}
      </div>
      <div className='flex flex-col mx-auto'>
        <p>Copyright © 2024 Hulknormous</p>
      </div>
    </SectionWrapper>
  )
}
//  <p>Copyright © 2024 Hulknormous</p>
//<Button func={() => {window.location.href = '#generate'}} text={"StartOver"}></Button>
// ndifrekeBuiltWorkout