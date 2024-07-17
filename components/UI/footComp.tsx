import React from 'react'
import footerbg from "@/assets/footer/footerbg.jpg"
import Image from 'next/image'

export const FootComp = () => {
  return (
    <div className='w-full h-[10rem] brightness-90 overflow-hidden' >
        <Image src={footerbg} alt='footerbg' />
    </div>
  )
}
