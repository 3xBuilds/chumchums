import React from 'react'
import Image from 'next/image'
import landingBg from "@/assets/WebsiteLanding/fillers/bgLanding.gif"
import { SiOpensea } from 'react-icons/si'
import chumlogo from "@/assets/WebsiteLanding/logos/chumlogo.png"
import magiceden from "@/assets/WebsiteLanding/logos/magiceden.png"

export const Landing = () => {
  return (
    <div className='flex items-end justify-center bg-[#242326] min-h-screen max-md:object-cover max-md:overflow-hidden max-sm:w-[38rem] max-[640px]:w-[45rem] max-md:w-[50rem] max-lg:w-[70rem] max-xl:w-[90rem] max-2xl:w-[110rem] 2xl:w-[145rem]' >
        <div className='absolute top-[32%] w-full text-center flex items-center flex-col justify-center gap-2'>
          <Image src={chumlogo} alt='logo' className=' max-md:w-[95%] md:w-[60%] mb-5' />
          <a target='_blank' href='https://magiceden.io/collections/ethereum/0xe987e9b07ca431fe0c7e8f431fa4f94ab9ca2423' className='flex gap-2 relative items-center justify-center md:text-[1.5rem] bg-[#e52476] px-4 py-2 rounded-full hover:bg-[#ff4f98] duration-200 hover:-translate-y-1' >
            <Image src={magiceden} alt='magic' className='w-10 absolute -top-6 -right-0' /> Magic Eden
          </a>
        </div>
        <div className=''>
          <Image src={landingBg} alt='bg1' className='max-sm:w-[38rem] max-[640px]:w-[45rem] max-md:w-[50rem] max-lg:w-[70rem] max-xl:w-[90rem] max-2xl:w-[110rem] 2xl:w-[145rem]'/>
        </div>
    </div>
  )
}
