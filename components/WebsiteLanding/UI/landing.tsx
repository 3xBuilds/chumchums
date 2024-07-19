import React from 'react'
import Image from 'next/image'
import landingBg from "@/assets/WebsiteLanding/fillers/bgLanding.gif"
import { SiOpensea } from 'react-icons/si'

export const Landing = () => {
  return (
    <div className='flex items-end justify-center bg-[#242326] min-h-screen max-md:object-cover max-md:overflow-hidden max-sm:w-[38rem] max-[640px]:w-[45rem] max-md:w-[50rem] max-lg:w-[70rem] max-xl:w-[90rem] max-2xl:w-[110rem] 2xl:w-[145rem]' >
        <div className='absolute top-[32%] w-full text-center flex items-center flex-col justify-center gap-2'>
          <h1 className='md:text-[8rem] max-md:text-7xl max-sm:text-5xl mx-auto w-full'>CHUM CHUMS</h1>
          <a target='_blank' href='https://opensea.io/collection/chumchumsnft' className='flex gap-2 items-center justify-center md:text-[1.5rem] bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-400 duration-200 hover:-translate-y-1' ><SiOpensea/>OpenSea</a>
        </div>
        <div className=''>
          <Image src={landingBg} alt='bg1' className='max-sm:w-[38rem] max-[640px]:w-[45rem] max-md:w-[50rem] max-lg:w-[70rem] max-xl:w-[90rem] max-2xl:w-[110rem] 2xl:w-[145rem]'/>
        </div>
    </div>
  )
}
