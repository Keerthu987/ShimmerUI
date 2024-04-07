import React from 'react'

const Shimmer = () => {
  return Array(10).fill(0).map((n,i)=> (
    <div key={i} className=' p-2 m-5 bg-gray-50 shadow-xl w-52'  >
        <div className=' w-48 h-52 pb-5  bg-gray-100' />
        <div className=' w-48 h-2 p-3  bg-gray-100 my-3'  >{}</div>
        <div className='w-48 h-1 p-3  bg-gray-100 my-3'>{}</div>
    </div>
  )
  )
}

export default Shimmer