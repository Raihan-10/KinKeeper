'use client'
import { useTimeline } from '@/context/TimelineContext'
// import { friends } from '@/app/data'
import Image from 'next/image'
import React from 'react'
import toast from 'react-hot-toast'


export default function QuickCheck({ name, callImage, textImage, videoImage }) {
   const {addTimeline} =useTimeline();
   
    const toastButton=(type)=>{
        toast.success(`${type} with ${name}`)

        addTimeline({
            id:Date.now(), 
            type:type, name:name,
            date:new Date().toLocaleDateString('en-US', {month:'long', day:'numeric', year:'numeric'})
        });
    }

   
    return (
        <div className='bg-white p-6  shadow rounded-xl'>
            <p className='text-[#244D3F] text-xl font-medium mb-4'>Quick Check-In</p>
            <div className='grid md:grid-cols-3 gap-4 '>

                <button onClick={()=>toastButton('Call')} className='cursor-pointer shadow p-4 flex flex-col rounded-lg justify-center items-center gap-2 bg-[#F8FAFC]'>
                    <Image src={callImage} alt='call-image' width={32} height={32}></Image> Call</button>

                <button onClick={()=>toastButton('Text')} className='cursor-pointer shadow p-4 rounded-lg flex flex-col justify-center items-center gap-2 bg-[#F8FAFC]'>
                    <Image src={textImage} alt='call-image' width={32} height={32}></Image> Text</button>

                <button onClick={()=>toastButton('Video')} className='cursor-pointer shadow p-4 rounded-lg flex flex-col justify-center items-center gap-2 bg-[#F8FAFC]'>
                    <Image src={videoImage} alt='call-image' width={32} height={32}></Image> Video</button>

            </div>
        </div>
    )
}
