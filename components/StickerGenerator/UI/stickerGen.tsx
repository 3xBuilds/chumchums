"use client"

import React from 'react'
import { FaDice } from 'react-icons/fa'
import { IoDownload } from 'react-icons/io5'

export const StickerGen = () => {

    const traitArr = [
        "Outline", "Head", "Body", "Face", "Chum", "Back"
    ]

  return (
    <div className='flex md:flex-row max-md:flex-col h-[95vh] w-screen '>
        <div className='md:h-full md:w-[33%] h-[33%] w-full bg-white/10 col-span-2'>
            <div id="traits" className='flex gap-2 w-full overflow-x-auto p-2 whitespace-nowrap'>
                {traitArr.map((item, index) => (
                    <button 
                        key={index}
                        className='bg-white/5 py-1 px-2 flex-shrink-0 w-[5rem] rounded-xl focus:bg-white/40 text-white border-[1px] border-white'
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
        <div className='md:h-full md:w-[67%] h-[67%] w-full items-center flex flex-col mt-5 gap-5 justify-start'>
            <h2 className='text-3xl'>Sticker Generator</h2>
            <div className='w-[19rem] h-[19rem] border-[5px] rounded-xl border-dashed border-white/15'>
                
            </div>
            <div className='flex gap-4 md:w-[55%] items-end justify-end'>
                <button className='bg-[#B7C660] flex gap-2 text-xl items-center hover:brightness-110 duration-200 hover:-translate-y-1 text-black rounded-full py-2 px-4'>
                    <FaDice className='text-2xl'/>
                    Randomize
                </button>
                <button className='bg-[#F7DD81] flex gap-2 text-xl items-center hover:brightness-110 duration-200 hover:-translate-y-1 text-black rounded-full py-2 px-4'>
                    <IoDownload className='text-2xl'/>
                    Download
                </button>
            </div>
        </div>
    </div>
  )
}
