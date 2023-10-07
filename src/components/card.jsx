import React from 'react'

const Card = ({title_new,today,title_total,total,bg}) => {

  const covert = (data) => {
    if (data !== undefined && data !== null) {
      return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return "";
  }
  return (
    <div className={`${bg} rounded-md shadow w-full lg:w-[450px] p-6 mt-5  space-y-5 text-white drop-shadow`}>
      <div className='flex justify-between items-center'>
        <p className=' text-sm lg:text-xl'>{title_new}</p>
        <p className='text-2xl lg:text-4xl font-bold'> {covert(today)} <span className='font-normal text-base'>คน</span> </p>
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-sm lg:text-xl'>{title_total}</p>
        <p className='text-2xl lg:text-2xl font-bold'> {covert(total)} <span className='font-normal text-base'>คน</span> </p>
      </div>

    </div>
  )
}

export default Card