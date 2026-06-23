import React from 'react'

export default function Stats() {
  return (
    <div className='mt-10 mb-10 grid grid-cols-1 md:grid-cols-4 gap-6'>
          <div className='p-8 border-white shadow bg-white text-center rounded-lg'>
              <p className='text-[#244D3F] font-semibold text-[32px]'>10</p>
              <p className='text-lg mt-2 text-[#64748B]'>Total Friends</p>
            </div>
          <div className='p-8 border-white shadow bg-white text-center rounded-lg'>
              <p className='text-[#244D3F] font-semibold text-[32px]'>3</p>
              <p className='text-lg mt-2 text-[#64748B]'>On Track</p>
            </div>
          <div className='p-8 border-white shadow bg-white text-center rounded-lg'>
              <p className='text-[#244D3F] font-semibold text-[32px]'>6</p>
              <p className='text-lg mt-2 text-[#64748B]'>Need Attention</p>
            </div>
          <div className='p-8 border-white shadow bg-white text-center rounded-lg'>
              <p className='text-[#244D3F] font-semibold text-[32px]'>12</p>
              <p className='text-lg mt-2 text-[#64748B]'>Interactions This Month</p>
            </div>
    </div>
  )
}
