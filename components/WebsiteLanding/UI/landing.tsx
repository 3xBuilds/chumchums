import React from 'react'
import Image from 'next/image'
import landingBg from "@/assets/WebsiteLanding/fillers/bgLanding.png"

export const Landing = () => {
  return (
    <div className='flex items-end min-h-screen max-md:object-cover max-md:overflow-hidden max-sm:w-[32rem] max-md:w-[50rem] md:mt-40' >
        <Image src={landingBg} alt='bg1' className='max-sm:w-[32rem] max-md:w-[50rem]'/>
    </div>
  )
}
