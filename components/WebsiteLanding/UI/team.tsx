import React from 'react'
import frame from "@/assets/WebsiteLanding/fillers/teamFrame.png"
import Image, { StaticImageData } from 'next/image';

import muchacho from "@/assets/WebsiteLanding/team/Muchacho_Major.png";
import melissa from "@/assets/WebsiteLanding/team/Melissa_Mimosa.jpg";
import cleofis from "@/assets/WebsiteLanding/team/Cleofis.jpg";
import johnD from "@/assets/WebsiteLanding/team/JohnD.jpg";
import simplecat from "@/assets/WebsiteLanding/team/Simple_Cat.jpg";

export const Team = () => {

  const teamArr = [
    {
      name: "Muchacho Major",
      post: "CEO",
      pic: muchacho,
      twitter: "https://x.com/Muchachomajor"
    },
    {
      name: "Melissa Mimosa",
      post: "Mother of Chums/The Don",
      pic: melissa,
      twitter: "https://x.com/MelisaMimosa420"
    },
    {
      name: "JohnD",
      post: "Treasurer/Inspector",
      pic: johnD,
      twitter: "https://x.com/Jdooplantman"
    },
    {
      name: "Cleofis",
      post: "CLEO",
      pic: cleofis,
      twitter: "https://x.com/thiscleofis"
    },
    {
      name: "Simple Cat",
      post: "Artist",
      pic: simplecat,
      twitter: "https://x.com/simplecatnft"
    }
    
  ]

  type Proptypes = {
    name: string,
    post: string,
    pic: StaticImageData,
    twitter: string
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-[#01534D] w-screen py-20'>
      <h2 className='text-[56px] text-[#F7DD81]' >Team</h2>
        <div className='flex flex-wrap gap-5 items-center justify-center w-[80%]' >
          {teamArr.map((item:Proptypes)=>(
            <>
            <div className='flex flex-col gap-3 items-center justify-center'>
              <div className='relative h-[17rem] w-[17rem]'>
                <Image src={frame} alt="frame" className='absolute w-full'/>
                <Image src={item.pic} alt={item.name} className='w-full p-6'/>
              </div>
              <h3 className='text-2xl text-white' >{item.name}</h3>
              <h3 className='text-lg text-[#B7C660]' >{item.post}</h3>
            </div>
            </>
          ))}
        </div>
    </div>
  )
}
