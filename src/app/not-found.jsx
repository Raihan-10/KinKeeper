import Link from 'next/link'
import React from 'react'

export default function NotFoundPage() {
  return (
    <div className='text-center py-3 md:py-30 bg-gray-100 '>
        <h2 className='p-2 font-bold text-green-400 md:text-7xl text-xl'>404 Not Found</h2>
        <p className='md:text-4xl font-semibold text-lg md:mt-10 md:mb-10'>Have a cup of coffee and go back to home</p>
       <span className='md:text-4xl text-lg font-semibold'>Click here:  <Link href={'/'} className=' text-blue-900   md:rounded-xl md:p-3'>Home</Link></span>
    </div>
  )
}
