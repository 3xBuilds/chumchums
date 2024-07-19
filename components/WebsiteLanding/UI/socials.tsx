import React from 'react'
import bg from "@/assets/WebsiteLanding/fillers/socials.png"
import Image from 'next/image'
import { SiOpensea } from "react-icons/si";
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoMedium, IoLogoTiktok } from 'react-icons/io5';


export const Socials = () => {
  return (
    <div id="socials" className='bg-[#01534D] flex flex-col justify-start items-center'>
        <h2 className='text-[56px] text-[#F7DD81]' >Socials</h2>

        <div className='max-md:object-cover max-md:overflow-hidden max-sm:w-[30rem] max-[640px]:w-[40rem] relative max-md:w-[50rem] max-lg:w-[65rem] max-xl:w-[120rem] max-2xl:w-[150rem]'>
          <Image src={bg} alt='bg' className='max-sm:w-[30rem] max-[640px]:w-[45rem] max-md:w-[50rem] max-lg:w-[65rem] lg:w-[100rem]'/>
            <a target='_blank' href="https://opensea.io/collection/chumchumsnft" className='hover:-translate-y-1 translate-y-0 w-fit h-fit duration-200 brightness-110 absolute max-sm:top-[10.4rem] max-sm:left-[5.65rem] max-md:top-[17.6rem] max-md:left-[9.6rem] max-lg:top-[22.8rem] max-lg:left-[12.5rem] lg:top-[36.8rem] lg:left-[20.7rem] z-[50] '><SiOpensea className='max-sm:text-[3rem] max-md:text-[4.5rem] md:text-[6rem] text-blue-500 hover:brightness-110 duration-200'/></a>
            <a target='_blank' href="https://x.com/chumchumsnft" className='hover:-translate-y-1 translate-y-0 w-fit h-fit duration-200 brightness-110 absolute max-sm:top-[10.7rem] max-sm:left-[14.5rem] max-md:top-[17.8rem] max-md:left-[24.1rem] max-lg:top-[23rem] max-lg:left-[31.3rem] lg:top-[36.8rem] lg:left-[49.5rem] z-[50] '><FaXTwitter className='max-sm:text-[2.5rem] max-md:text-[4rem] md:text-[5.5rem] text-black hover:brightness-110 duration-200'/></a>
            <a target='_blank' href='https://www.tiktok.com/@chumchumsofficial' className='hover:-translate-y-1 translate-y-0 w-fit h-fit duration-200 brightness-110 absolute max-sm:top-[16.4rem] max-sm:left-[10.5rem] max-md:top-[27.3rem] max-md:left-[17.6rem] max-lg:top-[35rem] max-lg:left-[23rem] lg:top-[55rem] lg:left-[36.5rem] z-[50] '><IoLogoTiktok className='max-sm:text-[2.5rem] max-md:text-[4rem] md:text-[5.5rem] text-rose-600 hover:brightness-110 duration-200' /></a>
            <a target='_blank' href='https://chumchums.medium.com/' className='hover:-translate-y-1 translate-y-0 w-fit h-fit duration-200 brightness-110 absolute -rotate-[30deg] max-sm:top-[16.5rem] max-sm:left-[23.2rem] max-md:top-[27.7rem] max-md:left-[38.7rem] max-lg:top-[36rem] max-lg:left-[50.4rem] lg:top-[56.7rem] lg:left-[78.6rem] z-[50] '><IoLogoMedium className='max-sm:text-[2.2rem] max-md:text-[3.6rem] md:text-[4.5rem] text-amber-800/80 hover:brightness-110 duration-200' /></a>
        </div>
    </div>
  )
}
