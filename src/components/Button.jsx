import React from 'react'

export default function Button(props) {
    const {text, func} = props
  return (
    <button onClick={func} className='px-8 mx-auto py-4 rounded-md border-[1px] bg-slate-950 text-yellow-100 border-blue-950 border-solid yellowShadow duration-200 hover:border-yellow-200'>
        <p>{text}</p>
      </button>
  )
}
