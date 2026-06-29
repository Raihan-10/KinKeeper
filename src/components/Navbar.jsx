'use client'
import React, { useState } from 'react'
import logo from '../app/assets/images/logo.png'
import Image from 'next/image'
import { MdOutlineHome } from 'react-icons/md'
import { RiTimeLine } from 'react-icons/ri'
import { IoIosStats } from 'react-icons/io'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {

    const pathName = usePathname();

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open)
    }
    return (

        <div className=" bg-white">
            <div className='md:flex navbar  md:justify-between max-w-7xl mx-auto'>

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                            <li> <Link href={`/`} className={`btn shadow border-none flex items-center  gap-1  rounded-lg  ${pathName === '/' ? 'bg-[#244D3F] text-white' : 'bg-white text-[#747577]'} }`}>
                                <MdOutlineHome />Home</Link></li>
                            <li>  <Link href={`/timeline`} className={`btn shadow border-none flex items-center gap-1 rounded-lg  ${pathName === '/timeline' ? 'bg-[#244D3F] text-white' : 'bg-white text-[#747577]'}`}> <RiTimeLine />
                                Timeline</Link></li>
                            <li> <Link href={`/stats`} className={`btn shadow  border-none flex items-center gap-1 rounded-lg  ${pathName === '/stats' ? 'bg-[#244D3F] text-white' : 'bg-white text-[#747577]'}`}>
                                <IoIosStats />
                                Stats</Link></li>

                        </ul>
                    </div>
                    <Link href={'/'}>
                        <Image href={'/'} src={logo} width={141} height={31} alt='logo'></Image>
                    </Link>
                </div>

                <div className="md:flex hidden">
                    <Link href={`/`} className={`btn shadow border-none flex items-center  gap-1   rounded-lg  ${pathName === '/' ? 'bg-[#244D3F] text-white' : 'bg-white text-[#747577]'}`}>
                        <MdOutlineHome />Home</Link>
                    <Link href={`/timeline`} className={`btn shadow border-none  flex items-center gap-1 rounded-lg  ${pathName === '/timeline' ? 'bg-[#244D3F] text-white' : 'bg-white text-[#747577]'}`}> <RiTimeLine />
                        Timeline</Link>
                    <Link href={`/stats`} className={`btn shadow  border-none flex items-center gap-1 rounded-lg  ${pathName === '/stats' ? 'bg-[#244D3F] text-white' : 'bg-white text-[#747577]'}`}>
                        <IoIosStats />
                        Stats</Link>
                </div>
            </div>
        </div>


    )
}
