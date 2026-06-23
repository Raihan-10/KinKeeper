import React from 'react'
import { FaPlus } from 'react-icons/fa'
import Stats from './Stats'
import Image from 'next/image';
const friends = [
  {
    id: 1,
    name: "John Doe",
    picture: "/1.png",
    email: "john@example.com",
    days_since_contact: 12,
    status: "overdue",
    tags: ["college", "close friend"],
    bio: "Met in university. Love hiking together.",
    goal: 14,
    next_due_date: "2026-07-20"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    picture: "/2.png",
    email: "sarah@example.com",
    days_since_contact: 3,
    status: "on-track",
    tags: ["work", "mentor"],
    bio: "Former team lead who gives valuable career advice.",
    goal: 7,
    next_due_date: "2026-06-27"
  },
  {
    id: 3,
    name: "Michael Brown",
    picture: "/3.png",
    email: "michael@example.com",
    days_since_contact: 25,
    status: "overdue",
    tags: ["gym", "friend"],
    bio: "Workout partner and fitness enthusiast.",
    goal: 14,
    next_due_date: "2026-06-15"
  },
  {
    id: 4,
    name: "Emily Davis",
    picture: "/4.png",
    email: "emily@example.com",
    days_since_contact: 5,
    status: "on-track",
    tags: ["family", "cousin"],
    bio: "Lives abroad and loves sharing travel stories.",
    goal: 10,
    next_due_date: "2026-06-28"
  },
  {
    id: 5,
    name: "David Wilson",
    picture: "/5.png",
    email: "david@example.com",
    days_since_contact: 18,
    status: "overdue",
    tags: ["networking", "tech"],
    bio: "Met at a developer conference last year.",
    goal: 14,
    next_due_date: "2026-06-20"
  },
  {
    id: 6,
    name: "Olivia Martinez",
    picture: "/6.png",
    email: "olivia@example.com",
    days_since_contact: 1,
    status: "on-track",
    tags: ["book club", "friend"],
    bio: "Enjoy discussing books and personal growth.",
    goal: 14,
    next_due_date: "2026-07-06"
  },
  {
    id: 7,
    name: "James Anderson",
    picture: "/7.png",
    email: "james@example.com",
    days_since_contact: 40,
    status: "overdue",
    tags: ["school", "best friend"],
    bio: "Childhood friend who moved to another city.",
    goal: 30,
    next_due_date: "2026-06-10"
  },
  {
    id: 8,
    name: "Sophia Taylor",
    picture: "/8.png",
    email: "sophia@example.com",
    days_since_contact: 6,
    status: "almost due",
    tags: ["design", "freelancer"],
    bio: "Collaborated on several creative projects.",
    goal: 10,
    next_due_date: "2026-06-29"
  }
  // {
  //   id: 9,
  //   name: "Daniel Thomas",
  //   picture: "/9.png",
  //   email: "daniel@example.com",
  //   days_since_contact: 15,
  //   status: "overdue",
  //   tags: ["startup", "founder"],
  //   bio: "Entrepreneur working on an AI startup.",
  //   goal: 14,
  //   next_due_date: "2026-06-22"
  // },
  // {
  //   id: 10,
  //   name: "Emma White",
  //   picture: "/10.png",
  //   email: "emma@example.com",
  //   days_since_contact: 2,
  //   status: "on-track",
  //   tags: ["volunteer", "community"],
  //   bio: "Organizes local community events and workshops.",
  //   goal: 7,
  //   next_due_date: "2026-06-30"
  // }
];
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
        <h3 className='text-[#1F2937] font-bold text-[48px]'>
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

        <h3 className='text-2xl font-semibold mb-4'>Your Friends</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 '>

          {
            friends.map((f, i) => {
              const currentStatus = status[f.status]
              return (
                <div key={i} className='p-4 rounded-lg flex flex-col items-center justify-center gap-3 bg-white'>
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
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
