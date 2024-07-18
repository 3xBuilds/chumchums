import React from 'react'
import bg from "@/assets/WebsiteLanding/fillers/socials.png"
import Image from 'next/image'

export const Socials = () => {
  return (
    <div className='bg-[#01534D] flex flex-col justify-start items-center'>
        <h2 className='text-[56px] text-[#F7DD81]' >Socials</h2>

        <Image src={bg} alt='bg' />
    </div>
  )
}
