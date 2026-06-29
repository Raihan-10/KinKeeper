import React from 'react'
import { FaPlus } from 'react-icons/fa'
import Stats from './StatsCard'
import Image from 'next/image';
import friends from './data.json'
import Link from 'next/link';

export default function Homepage() {
  const status = {
    'on-track': {
      bg: 'bg-[#244D3F]', text:'On-track'
    },
    'overdue':{
      bg: 'bg-[#EF4444]', text:'Overdue'
    },
    'almost due':{
      bg: 'bg-[#EFAD44]', text:'Almost Due'
    }
  }

  return (
    <div className=' bg-[#F8FAFC]'>
      <div className='mt-20 max-w-7xl mx-auto text-center place-items-center'>
        <h3 className='text-[#1F2937] font-bold text-[30px] md:text-[48px]'>
          Friends to keep close in your life
        </h3>
        <p className='text-[#64748B] mt-4 mb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture <br /> the
          relationships that matter most.</p>
        <button className='btn bg-[#244D3F] px-4 py-3 flex gap-1 text-white items-center rounded-sm'>
          <FaPlus className='' />
          Add a Friend</button>
        <Stats />
      
        <hr className='border-t mb-10 border-[#E9E9E9] w-full' />


      </div>
      {/* friends */}
      <div className='mt-10 max-w-7xl mx-auto mb-20'>

        <h3 className='text-2xl font-semibold mb-4 text-center md:text-left'>Your Friends</h3>
        <div className='grid grid-cols-1 gap-5  md:grid-cols-3 lg:grid-cols-4 md:gap-5 md:px-5'>

          {
            friends.map((f, i) => {
              const currentStatus = status[f.status]
              return (
                <Link href={`/friends/${f.id}`} key={i} className='p-4 shadow-lg rounded-lg flex flex-col items-center justify-center gap-3 bg-white'>
                  
                  <Image src={f.picture} alt="friends pic" height={80} width={80}></Image>
                  <p className='text-[20px] font-semibold'>{f.name}</p>
                  <p className='text-[12px] text-[#64748B]'>{f.days_since_contact}d ago</p>


                  <div className='flex gap-2'>
                    {
                      f.tags.map((t, i) => {
                        return (
                          <div key={i}>
                            <p className='bg-[#CBFADB] px-3 py-1 rounded-2xl'>{t}</p>
                          </div>
                        )
                      })
                    }

                  </div>
                  <span className={`text-white py-1 px-3 rounded-2xl ${currentStatus.bg}`}>{currentStatus.text}</span>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
