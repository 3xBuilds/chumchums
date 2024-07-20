"use client"

import React, { useEffect } from 'react'
import { FaDice } from 'react-icons/fa'
import { IoDownload } from 'react-icons/io5'
import { useState } from 'react'
import Image from 'next/image'

// interface ImageProps {
//     src: string;
//     alt: string;
//   }
  
//   const Image: React.FC<ImageProps> = ({ src, alt }) => (
//     <img src={src} alt={alt} />
//   );

export const StickerGen = () => {

    const [selectedType, setSelectedType] = useState<number>(0);
    const [selectedTrait, setSelectedTrait] = useState<number | null>(null);

    const [displayArr, setDisplayArr] = useState<Array<number>>([])

    const traitArr = [
        "Outline", "Head", "Body", "Face", "Chum", "Back Ground"
    ]

    const amount = [1, 76, 71, 23, 87, 14];

    useEffect(()=>{
        setDisplayArr([])
        const arr = Array.from({ length: amount[selectedType] }, (_, index) => index);
        console.log(arr);
        setDisplayArr(arr);
    },[selectedType])
      

  return (
    <div className='flex md:flex-row max-md:flex-col h-[95vh] w-screen max-md:overflow-x-hidden md:overflow-hidden'>
        <div className='md:h-full md:w-[33%] h-[33%] w-full flex flex-col justify-center gap-4 bg-white/10 col-span-2'>
            <div id="traits" className='flex gap-2 w-full py-2 overflow-x-auto items-center justify-start p-2 whitespace-nowrap'>
                {traitArr.map((item:string, index) => (
                    <button 
                        onClick={()=>{ setDisplayArr([]); setSelectedType(index)}}
                        key={index}
                        className='bg-white/5 py-1 px-2 hover:bg-white/30 duration-200 flex-shrink-0 w-[10rem] rounded-xl focus:bg-white/40 text-white border-[1px] border-white'
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className=' h-full gap-4 p-4 items-start max-md:justify-start md:justify-center flex md:flex-wrap max-md:w-fit overflow-x-scroll mx-auto' >
                {displayArr?.length != 0 && displayArr.map((item:number)=>(
                    <div className='flex cursor-pointer items-center justify-center w-40 h-40 bg-white/10 rounded-xl gap-5' >
                        <Image className='rounded-xl' src={ selectedType==5 && (item==12 || item == 13) ? require(`../../../assets/StickerGenerator/trait_layers/${selectedType}/${item+1}.gif`): require(`../../../assets/StickerGenerator/trait_layers/${selectedType}/${item+1}.png`)} alt={String(item)} />
                    </div>
                ))}
            </div>
        </div>
        <div className='md:h-full md:w-[67%] h-[67%] w-full items-center flex flex-col mt-5 gap-5 justify-start'>
            <h2 className='text-3xl'>Sticker Generator</h2>
            <div className='max-md:w-[19rem] max-md:h-[19rem] md:w-[32rem] md:h-[32rem] border-[5px] rounded-xl border-dashed border-white/15'>
                
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
