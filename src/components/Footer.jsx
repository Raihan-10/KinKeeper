import Image from 'next/image'
import React from 'react'
import logo from '../app/assets/images/logo-xl.png'
import ig from '../app/assets/images/instagram.png'
import fb from '../app/assets/images/facebook.png'
import twitter from '../app/assets/images/twitter.png'


export default function Footer() {
    return (
        <div className='bg-[#244D3F] py-5 px-5 lg:py-10 lg:px-20 md:py-20 md:px-[245]'>
            <div className='flex flex-col gap-4 justify-center items-center text-white max-w-7xl mx-auto'>
                <Image src={logo} alt='logo' ></Image>
                <p className='md:text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='text-xl font-semibold mt-6'>Social Links</p>
                <div className='flex gap-3 cursor-pointer'>
                    <Image src={ig} alt='insta logo' ></Image>
                    <Image src={fb} alt='fb logo' ></Image>
                    <Image src={twitter} alt='twitter logo' ></Image>

                </div>
                <hr className='w-full mt-10 border-white/20' />
               

            </div>
             <div className='opacity-[0.2] max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between lg:items-center gap-6 text-white text-sm'>
                    <p className='text-center md:text-left w-full lg:w-auto'>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex flex-col items-center gap-4 text-center lg:flex-row lg:justify-end lg:gap-6 w-full lg:w-auto cursor-pointer '>
                        <p >Privacy Policy                    </p>
                        <p>Terms of Service</p>
                        <p>  Cookies</p>
                    </div>
                </div>
        </div>
    )
}
