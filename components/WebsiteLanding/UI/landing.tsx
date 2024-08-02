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
import { useRouter } from 'next/navigation'

import buttonbg from "@/assets/WebsiteLanding/buttonbg/button.png"
import collectibles from "@/assets/WebsiteLanding/buttonbg/collectibles.png"


export const Landing = () => {

  const arr:Array<StaticImageData> = [art1, art3];

  const[bg, setBg] = useState(0);

  const router = useRouter()

  return (
    <div className='flex items-end justify-center bg-[#242326] overflow-hidden object-contain min-h-screen max-md:object-cover max-md:overflow-hidden max-sm:w-[38rem] max-[640px]:w-[45rem] max-md:w-[50rem] max-lg:w-[70rem] max-xl:w-[90rem] max-2xl:w-[110rem] 2xl:w-[145rem]' >
        <div>
          <button onClick={()=>{if(bg == arr.length - 1)setBg(0); else{setBg(prev => prev+1)}}} className='text-white absolute z-[100] right-0 top-[45%]'><IoIosArrowForward className='text-[4rem]'/></button>
          <button onClick={()=>{if(bg == 0)setBg(arr.length-1); else{setBg(prev => prev-1)}}} className='text-white absolute z-[100] left-0 rotate-180 top-[45%]'><IoIosArrowForward className='text-[4rem]'/></button>
        </div>


        <div className="overflow-hidden absolute inset-0">
        <div className='absolute max-md:bottom-0 max-md:w-[80rem] max-lg:w-[100rem] max-xl:w-[110rem] max-2xl:w-[130rem] 2xl:w-[170rem] md:min-h-screen overflow-hidden'>
          <Image src={arr[bg]} alt='hi' className='w-full h-full' />
        </div>
          <div id="shade" className='bg-[#000000]/70 absolute max-md:h-[150vh] max-md:top-52 md:top-64 blur-[100px] md:w-[140vw] max-md:w-[120rem] md:-left-[20%] max-md:-left-[90%] h-full rounded-full'>
          </div>
        </div>

        <div className='absolute md:top-[30%] max-lg:top-[30%] lg:top-[25%] z-50 w-full text-center flex items-center flex-col justify-center gap-2'>
          <Image src={chumlogo} alt='logo' className=' max-md:w-[95%] md:w-[60%] mb-5' />
          {/* <div className='bg-[#e9b54d] w-[95%] h-52 rounded-xl border-8 border-black shadow-inner shadow-black/50'>

          </div> */}
          <button onClick={()=>{router.push("/sticker")}} className='flex gap-2 relative hover:brightness-150 brightness-125 z-[3] items-center hue-rotate-[75deg] text-[#d4d87f] justify-center md:text-[1.5rem] px-4 py-2 rounded-full duration-200 w-[20rem] md:w-[25rem] hover:-translate-y-1 mt-12' >
            <Image src={buttonbg} alt="button" className='absolute z-[-1] ' />
            <Image src={magiceden} alt='magic' className='w-10 absolute -top-2 right-2 rotate-[-5deg] brightness-90 hue-rotate-[280deg]' /><div className='flex flex-col'>
              <span className='text-white text-3xl max-md:text-2xl'>Chum Generator</span>
              <span className='text-3xl text-white max-md:text-2xl'>3000!!!</span>
              </div>
          </button>

          {/* <a className='relative md:w-[20rem] max-md:mt-10 w-[15rem]'>
            <Image src={collectibles} alt='hello' className='absolute'/>
          </a> */}

        </div>
        <div className='relative z-[5] '>
          <Image src={landingBg} alt='bg1' className='max-sm:w-[38rem] max-[640px]:w-[45rem] max-md:w-[50rem] max-lg:w-[70rem] max-xl:w-[90rem] max-2xl:w-[110rem] 2xl:w-[160rem]'/>
        </div>
    </div>
  )
}
