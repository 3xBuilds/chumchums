import React from 'react'
import Image from 'next/image'
import landingBg from "@/assets/WebsiteLanding/fillers/bgLanding.png"

export const Landing = () => {
  return (
    <div className='flex items-end min-h-screen max-md:object-cover max-md:overflow-hidden md:mt-40' >
        <Image src={landingBg} alt='bg1' className='w-screen'/>
    </div>
  )
}
