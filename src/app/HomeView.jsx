import React from 'react'
import { FaPlus } from 'react-icons/fa'
import Stats from './Stats'

export default function Homepage() {
  return (
    <div className=' bg-[#F8FAFC]'>
      <div className='mt-20 max-w-7xl mx-auto text-center place-items-center'>
        <h3 className='text-[#1F2937] font-bold text-[48px]'>
          Friends to keep close in your life
        </h3>
        <p className='text-[#64748B] mt-4 mb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture <br /> the
          relationships that matter most.</p>
        <button className='bg-[#244D3F] px-4 py-3 flex gap-1 text-white items-center rounded-sm'>
          <FaPlus className=''/>
          Add a Friend</button>
          <Stats/>
          <hr className='border-t mb-10 border-[#E9E9E9] w-full'/>
      </div>
    </div>
  )
}
