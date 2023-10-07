import React from 'react'

const Card = ({title_new,today,title_total,total,bg}) => {
  return (
    <div className={`${bg} rounded-md shadow w-[450px] p-10 mt-10  space-y-5 text-white drop-shadow`}>
      <div className='flex justify-between items-center'>
        <p className='text-xl'>{title_new}</p>
        <p className='text-4xl font-bold'> {today} <span className='font-normal text-base'>คน</span> </p>
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-xl'>{title_total}</p>
        <p className='text-2xl font-bold'> {total} <span className='font-normal text-base'>คน</span> </p>
      </div>

    </div>
  )
}

export default Card