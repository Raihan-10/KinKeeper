import React from 'react'
import logo from '../app/assets/images/logo.png'
import Image from 'next/image'
import { MdOutlineHome } from 'react-icons/md'
import { RiTimeLine } from 'react-icons/ri'
import { IoIosStats } from 'react-icons/io'

export default function Navbar() {
    return (
        <div className=' bg-white py-4 shadow-2xl '>
            <div className='flex  max-w-7xl mx-auto justify-between md:mx-20'>


                <Image src={logo} alt="logo" width={141} ></Image>
                <div className='flex items-center gap-1'>
                    <button className='btn border-none flex items-center  gap-1  bg-[#244D3F] rounded-lg text-white'>
                        <MdOutlineHome/>Home</button>
                    <button className='btn bg-white border-none text-[#64748B] flex items-center gap-1 rounded-lg'><RiTimeLine />
                        Timeline</button>
                    <button className='btn bg-white text-[#747577] border-none flex items-center gap-1 rounded-lg'><IoIosStats />
                        Stats</button>
                </div>

            </div>
        </div>

    )
}
