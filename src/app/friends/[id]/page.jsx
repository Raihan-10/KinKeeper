import React from 'react'
import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { IoArchiveOutline } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Image from 'next/image';
import callImage from '../../assets/images/call.png'
import textImage from '../../assets/images/text.png'
import videoImage from '../../assets/images/video.png'
import { friends } from '../../data.json';
import QuickCheck from '@/components/QuickCheck';



    export default async function FriendDetailspage({ params }) {
    const { id } = await params;
    const friend = friends.find((f) => f.id === parseInt(id));
    const { name, picture, days_since_contact, email, bio, status, tags, goal, next_due_date } = friend

    return (
        <div className='bg-[#F8FAFC] overflow-x-hidden'>
            <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[350px_1fr] px-4 md:px-12 lg:px-20 py-10 max-w-7xl mx-auto gap-8 w-full'>                {/* left */}
            <div className=' flex flex-col'>

                <div className='shadow bg-white p-6 place-items-center space-y-2 rounded-lg'>
                    <Image src={picture} alt='profile-pic' height={80} width={80} />
                    <p className='font-semibold text-xl'>{name}</p>
                    <p>{status}</p>
                    <p>{tags}</p>
                    <p className='text-[#64748B]'>{`"${bio}"`}</p>
                    <p>Email: {email}</p>
                </div>
                <div className='space-y-2 mt-4 '>
                    <p className='btn p-4 shadow bg-white flex items-center gap-2 rounded-lg justify-center'><HiOutlineBellSnooze />
                        Snooze 2 weeks</p>
                    <p className='btn p-4 shadow bg-white flex items-center gap-2 rounded-lg justify-center'><IoArchiveOutline />
                        Archive</p>
                    <p className='btn p-4 shadow bg-white flex items-center gap-2 rounded-lg justify-center'><span className='text-red-400 hover:text-red-500'><RiDeleteBin6Line /></span>
                        Delete</p>
                </div>
                <div>
                </div>

            </div>
            {/* right */}
            <div className='flex flex-col gap-6'>
                {/* upper */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div className='py-8 px-4 bg-white text-center shadow w-full'>
                        <h3 className='text-3xl font-semibold'>{days_since_contact}</h3>
                        <p>Days Since Contact</p>
                    </div>
                    <div className='py-8 px-4 bg-white text-center shadow'>
                        <h3 className='text-3xl font-semibold'>{goal}</h3>
                        <p>Goal (Days)</p>
                    </div>
                    <div className='py-8 px-4 bg-white text-center shadow w-full'>
                        <h3 className='text-3xl font-semibold'>{next_due_date}</h3>
                        <p>Next Due</p>
                    </div>
                </div>
                {/* middle */}
                <div className='bg-white p-6 shadow'>
                    <div className='flex justify-between items-center'>
                        <p className='text-xl font-medium text-[#244D3F]'>Relationship Goal</p>
                        <button className='btn bg-[#F8FAFC] text-[14px] font-medium'><span className='text-[#1F2937]'>Edit</span> </button>
                    </div>
                    <p className='text-[#64748B] text-lg'>Connect every
                        <span className='text-[#1F2937] font-bold'> 30 days</span></p>
                </div>
                {/* lower */}
               <QuickCheck
               name={name} 
               callImage={callImage}
               textImage={textImage}
               videoImage={videoImage}
               />
            </div>


        </div>

        </div>
    )
}
