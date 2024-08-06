import React from 'react'
import frame from "@/assets/WebsiteLanding/fillers/teamFrame.png"
import Image, { StaticImageData } from 'next/image';

import muchacho from "@/assets/WebsiteLanding/team/Muchacho_Major.png";
import melissa from "@/assets/WebsiteLanding/team/Melissa_Mimosa.jpg";
import cleofis from "@/assets/WebsiteLanding/team/Cleofis.jpg";
import johnD from "@/assets/WebsiteLanding/team/JohnD.jpg";
import simplecat from "@/assets/WebsiteLanding/team/Simple_Cat.jpg";
import teambot from "@/assets/WebsiteLanding/logos/teambot.png"
import { FaXTwitter } from 'react-icons/fa6';

export const Team = () => {

  const teamArr = [
    {
      name: "Simple Cat",
      post: "Artist",
      pic: simplecat,
      twitter: "https://x.com/simplecatnft?s=21&t=0Mnt-VaZLRXy59s-7KkMmA"
    },
    {
      name: "Muchacho Major",
      post: "CEO",
      pic: muchacho,
      twitter: "https://x.com/muchachomajor?s=21&t=0Mnt-VaZLRXy59s-7KkMmA"
    },
    {
      name: "Melissa Mimosa",
      post: "Mother of Chums",
      pic: melissa,
      twitter: "https://x.com/melisamimosa420?s=21&t=0Mnt-VaZLRXy59s-7KkMmA"
    },
    {
      name: "JohnD",
      post: "Treasurer/Inspector",
      pic: johnD,
      twitter: "https://x.com/jdooplantman?s=21&t=0Mnt-VaZLRXy59s-7KkMmA"
    },
    {
      name: "Cleofis",
      post: "c l e o",
      pic: cleofis,
      twitter: "https://x.com/thiscleofis?s=21&t=0Mnt-VaZLRXy59s-7KkMmA"
    }
    
  ]

  type Proptypes = {
    name: string,
    post: string,
    pic: StaticImageData,
    twitter: string
  }

  return (
    <div id='team' className='min-h-screen flex flex-col items-center justify-center bg-[#01534D] w-screen py-20 '>
      <h2 className='text-[56px] text-[#e7b34e] relative'>
        <Image className='absolute -top-[0.9rem] -left-[0.6rem] w-12' alt='bot' src={teambot} /> Team
      </h2>
        <div className='flex flex-wrap gap-5 items-center justify-center w-[80%]' >
          {teamArr.map((item:Proptypes)=>(
            <>
            <div className='flex flex-col gap-3 items-center justify-center'>
              <div className='relative h-[17rem] w-[17rem] '>
              <a href={item.twitter} target='_blank' className='group z-5 absolute' >
                <Image src={frame} alt="frame" className='absolute z-10 w-full'/>
                <div className='absolute top-[47%] left-[44%] z-50'>
                  <FaXTwitter className='text-3xl group-hover:flex hidden' />
                </div>
                <Image src={item.pic} alt={item.name} className='w-full group-hover:brightness-50 duration-200 relative z-5 p-6'/>
              </a>
              </div>
              <h3 className='text-2xl text-white' >{item.name}</h3>
              <h3 className='text-lg text-[#d0d570]' >{item.post}</h3>
            </div>
            </>
          ))}
        </div>
    </div>
  )
}
