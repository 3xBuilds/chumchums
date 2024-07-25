"use client"

import React, {useState} from 'react'
import Image, { StaticImageData } from 'next/image'
import landingBg from "@/assets/WebsiteLanding/fillers/bgLanding.gif"
import { SiOpensea } from 'react-icons/si'
import chumlogo from "@/assets/WebsiteLanding/logos/chumlogo.png"
import { IoIosArrowForward } from "react-icons/io";

import magiceden from "@/assets/WebsiteLanding/logos/magiceden.png"

import art1 from "@/assets/WebsiteLanding/fillers/art1.jpeg"
import art2 from "@/assets/WebsiteLanding/fillers/art2.jpeg"
import art3 from "@/assets/WebsiteLanding/fillers/art3.jpeg"


export const Landing = () => {

  const arr:Array<StaticImageData> = [art1, art2, art3];

  const[bg, setBg] = useState(0);

  return (
    <div className='flex items-end justify-center bg-[#242326] overflow-hidden object-contain min-h-screen max-md:object-cover max-md:overflow-hidden max-sm:w-[38rem] max-[640px]:w-[45rem] max-md:w-[50rem] max-lg:w-[70rem] max-xl:w-[90rem] max-2xl:w-[110rem] 2xl:w-[145rem]' >
        <div>
          <button onClick={()=>{if(bg == arr.length - 1)setBg(0); else{setBg(prev => prev+1)}}} className='text-white absolute z-[100] right-0 top-[45%]'><IoIosArrowForward className='text-[4rem]'/></button>
          <button onClick={()=>{if(bg == 0)setBg(arr.length-1); else{setBg(prev => prev-1)}}} className='text-white absolute z-[100] left-0 rotate-180 top-[45%]'><IoIosArrowForward className='text-[4rem]'/></button>
        </div>

        <div className='absolute max-md:bottom-0 h-full max-md:w-[50rem] overflow-hidden'>
          <Image src={arr[bg]} alt='hi' />
        </div>
        <div className="overflow-hidden absolute inset-0">
          <div id="shade" className='bg-[#000000]/70 absolute top-64 blur-[100px] w-[120rem] md:-left-[20%] h-full rounded-full'>
          </div>
        </div>

        <div className='absolute top-[35%] z-50 w-full text-center flex items-center flex-col justify-center gap-2'>
          <Image src={chumlogo} alt='logo' className=' max-md:w-[95%] md:w-[60%] mb-5' />
          {/* <div className='bg-[#e9b54d] w-[95%] h-52 rounded-xl border-8 border-black shadow-inner shadow-black/50'>

          </div> */}
          <a target='_blank' href='https://magiceden.io/collections/ethereum/0xe987e9b07ca431fe0c7e8f431fa4f94ab9ca2423' className='flex gap-2 relative items-center justify-center md:text-[1.5rem] bg-[#e52476] px-4 py-2 rounded-full hover:bg-[#ff4f98] duration-200 hover:-translate-y-1 mt-5' >
            <Image src={magiceden} alt='magic' className='w-10 absolute -top-6 -right-0' /> Magic Eden
          </a>
        </div>
        <div className='absolute md:-bottom-72'>
          <Image src={landingBg} alt='bg1' className='max-sm:w-[38rem] max-[640px]:w-[45rem] max-md:w-[50rem] max-lg:w-[70rem] max-xl:w-[90rem] max-2xl:w-[110rem] 2xl:w-[145rem]'/>
        </div>
    </div>
  )
}
