import Image from 'next/image'
import React from 'react'
import logo from '../app/assets/images/logo-xl.png'
import ig from '../app/assets/images/instagram.png'
import fb from '../app/assets/images/facebook.png'
import twitter from '../app/assets/images/twitter.png'


export default function Footer() {
    return (
        <div className='bg-[#244D3F] py-10 px-20 md:py-20 md:px-[245] max-w-400'>
            <div className='flex flex-col gap-4 justify-center items-center text-white'>
                <Image src={logo} alt='logo' ></Image>
                <p className='md:text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='text-xl font-semibold mt-6'>Social Links</p>
                <div className='flex gap-3 cursor-pointer'>
                    <Image src={ig} alt='insta logo' ></Image>
                    <Image src={fb} alt='fb logo' ></Image>
                    <Image src={twitter} alt='twitter logo' ></Image>

                </div>
                <hr className='mx-auto max-w-7xl container mt-10 opacity-[0.2]' />
               

            </div>
             <div className='opacity-[0.2] flex justify-between mt-[30] cursor-pointer text-white'>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex gap-4 '>
                        <p >Privacy Policy                    </p>
                        <p>Terms of Service</p>
                        <p>  Cookies</p>
                    </div>
                </div>
        </div>
    )
}
