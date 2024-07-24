import React from 'react'
import bg from "@/assets/WebsiteLanding/fillers/socials.png"
import Image from 'next/image'
import { SiOpensea } from "react-icons/si";
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoMedium, IoLogoTiktok } from 'react-icons/io5';
import ufo from "@/assets/WebsiteLanding/logos/socialsufo.png"

export const Socials = () => {
  return (
    <div id="socials" className='bg-[#01534D] flex flex-col justify-start items-center'>
        <h2 className='text-[56px] text-[#e7b34e] relative' >
          <Image className='absolute left-[40%] bottom-16 w-10 z-50' alt='ufo' src={ufo} /> Socials
        </h2>
        <div className='max-md:object-cover max-md:overflow-hidden max-[640px]:w-[30rem] relative max-md:w-[50rem] max-lg:w-[65rem] max-xl:w-[80rem]  max-2xl:w-[100rem] 2xl:w-[120rem]'>
          <Image src={bg} alt='bg' className='max-[640px]:w-[30rem] max-md:w-[50rem] max-lg:w-[65rem] max-xl:w-[80rem] max-2xl:w-[100rem] 2xl:w-[120rem]'/>
            <a target='_blank' href="https://opensea.io/collection/chumchumsnft" className='hover:-translate-y-1 translate-y-0 w-fit h-fit duration-200 brightness-110 absolute max-sm:top-[10.4rem] max-sm:left-[5.7rem] max-md:top-[17.6rem] max-md:left-[9.6rem] max-lg:top-[22.8rem] max-lg:left-[12.5rem] max-xl:top-[28.7rem] max-xl:left-[16rem] max-2xl:top-[36.6rem] max-2xl:left-[20.7rem] 2xl:top-[44.5rem] 2xl:left-[25.5rem] z-[50] '><SiOpensea className='max-sm:text-[3rem] max-md:text-[4.5rem] md:text-[6rem] text-blue-500 hover:brightness-110 duration-200'/></a>
            <a target='_blank' href="https://x.com/chumchumsnft" className='hover:-translate-y-1 translate-y-0 w-fit h-fit duration-200 brightness-110 absolute max-sm:top-[10.6rem] max-sm:left-[14.5rem] max-md:top-[17.8rem] max-md:left-[24.1rem] max-lg:top-[23rem] max-lg:left-[31.3rem] max-xl:top-[28.7rem] max-xl:left-[39rem] max-2xl:top-[36.6rem] max-2xl:left-[49.5rem] 2xl:top-[44.5rem] 2xl:left-[60rem] z-[50] '><FaXTwitter className='max-sm:text-[2.5rem] max-md:text-[4rem] md:text-[5.5rem] text-black hover:brightness-110 duration-200'/></a>
            <a target='_blank' href='https://www.tiktok.com/@chumchumsofficial' className='hover:-translate-y-1 translate-y-0 w-fit h-fit duration-200 brightness-110 absolute max-sm:top-[16.3rem] max-sm:left-[10.7rem] max-md:top-[27.3rem] max-md:left-[17.6rem] max-lg:top-[35rem] max-lg:left-[23rem] max-xl:top-[44rem] max-xl:left-[29rem] max-2xl:top-[55.5rem] max-2xl:left-[36.5rem] 2xl:top-[67.5rem] 2xl:left-[44.5rem] z-[50] '><IoLogoTiktok className='max-sm:text-[2.5rem] max-md:text-[4rem] md:text-[5.5rem] text-rose-600 hover:brightness-110 duration-200' /></a>
            <a target='_blank' href='https://chumchums.medium.com/' className='hover:-translate-y-1 translate-y-0 w-fit h-fit duration-200 brightness-110 absolute -rotate-[30deg] max-sm:top-[16.5rem] max-sm:left-[23rem] max-md:top-[27.7rem] max-md:left-[38.7rem] max-lg:top-[36rem] max-lg:left-[50.4rem] max-xl:top-[44.5rem] max-xl:left-[62rem] max-2xl:top-[56.5rem] max-2xl:left-[78.5rem] 2xl:top-[68rem] 2xl:left-[95rem] z-[50] '><IoLogoMedium className='max-sm:text-[2.2rem] max-md:text-[3.6rem] md:text-[4.5rem] text-amber-800/80 hover:brightness-110 duration-200' /></a>
        </div>
    </div>
  )
}
