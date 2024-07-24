import React from 'react'
// import footerbg from "@/assets/WebsiteLanding/footer/footerbg.jpg"
import Image from 'next/image'
import meow from "@/assets/WebsiteLanding/footer/meow.png"
import logoC from "@/assets/WebsiteLanding/logos/chumlogoC.png"
import logo from "@/assets/WebsiteLanding/logos/chumlogo.png"

export const FootComp = () => {
  return (
    <div className='w-full md:h-[20rem] bg-[#1E1E1E] p-10 brightness-90 overflow-hidden items-center justify-center flex md:flex-row flex-col' >
      <div className='md:w-[35%]' >
        <Image src={logo} alt='logo' className='w-96'/>
        <div className='md:grid md:grid-flow-col md:grid-cols-2 gap-10 mt-3'>
            <div className='flex flex-col gap-2'>
                <h3 className='text-[#d0d570] text-[1.6rem]' >Contact Us</h3>
                <a className='text-[1.1rem] text-white/90 hover:text-white duration-200 hover:brightness-125' target='_blank' href='mailto:chumchums@gmail.com' >chumchums@gmail.com</a>
                <a href='https://www.tiktok.com/@chumchumsofficial' target='_blank' className='text-[1.1rem] text-white/90 hover:text-white duration-200 hover:brightness-125' >Instagram</a>
                <a href='https://x.com/chumchumsnft' target='_blank' className='text-[1.1rem] text-white/90 hover:text-white duration-200 hover:brightness-125' >Twitter</a>
                <a href='https://discord.gg/vVSkDyvCRC' target='_blank' className='text-[1.1rem] text-white/90 hover:text-white duration-200 hover:brightness-125' >Discord</a>


            </div>
            <div className='flex flex-col items-start gap-2 max-md:mt-5'>
                <h3 className='text-[#d0d570] text-[1.6rem]'>Links</h3>
                <button className='text-[1.1rem] text-white/90 hover:text-white duration-200 hover:brightness-125'>Sticker Generator</button>
                <a target='_blank' href='https://opensea.io/collection/chumchumsnft' className='text-[1.1rem] text-white/90 hover:text-white duration-200 hover:brightness-125' >OpenSea</a>
            </div>
        </div>
      </div>

      <div className='h-full flex items-end md:w-[36%] justify-center my-10'>
        <h6 className='flex flex-col items-center justify-center gap-2'>All Rights Reserved by <span><Image className='w-60' src={logoC} alt="alt"/></span></h6>
      </div>

      <div className='flex items-center justify-end md:w-[30%]' >
          <Image src={meow} alt='meow' />
      </div>
    </div>
  )
}
