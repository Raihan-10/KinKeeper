'use client'
import { useTimeline } from '@/context/TimelineContext'
import React, { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

export default function Timeline() {
  const [filter, setFilter] = useState('all')
const {data} = useTimeline();

// filtering
const filteringTimeline = data.filter(item =>{
  if(filter==='all'){
    return true;
  }
  else{
    return item.type ===filter;
  }
})

  return (

    <div className='bg-[#F8FAFC] min-h-screen py-10'>
      <div className='max-w-4xl mx-auto px-4 space-y-6'>
        <h3 className='text-[48px] font-bold text-[#1F2937]'>Timeline</h3>
        
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className='p-3 bg-white border border-gray-200 rounded-xl
           text-[#64748B] text-[18px] outline-none cursor-pointer shadow-sm'
        >
          <option value="all">Filter timeline (All)</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>

        <div className='flex flex-col gap-4 mt-6'>
          {filteringTimeline.length === 0 ? (
            <p className='text-gray-400 text-center py-10'>No connections with your friends yet</p>
          ) : (
            filteringTimeline.map((item) => (
              <div key={item.id} className='bg-white p-5 rounded-xl  shadow-sm flex items-center gap-4'>
                <span className='text-2xl p-2 bg-gray-50 rounded-xl'>
                  {item.type === 'Call' ? '📞' : item.type === 'Text' ? '💬' : '🎥'}
                </span>
                <div>
                  <p className='text-gray-800 font-semibold text-lg'>
                    {item.type} <span className='text-gray-400 font-normal'>with</span> {item.name}
                  </p>
                  <p className='text-xs text-gray-400 mt-1'>{item.date}</p>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  )
}
