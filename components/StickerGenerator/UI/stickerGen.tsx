"use client"

import React, {useRef, useEffect } from 'react'
import { FaDice } from 'react-icons/fa'
import { IoDownload } from 'react-icons/io5'
import { useState } from 'react'
import Image from 'next/image'
import html2canvas from 'html2canvas';


export const StickerGen:React.FC = () => {

    const layeredImageRef = useRef<HTMLDivElement>(null);

    const [selectedType, setSelectedType] = useState<number>(0);
    const [selectedTrait0, setSelectedTrait0] = useState<number>(0);
    const [selectedTrait1, setSelectedTrait1] = useState<number>(0);
    const [selectedTrait2, setSelectedTrait2] = useState<number>(0);
    const [selectedTrait3, setSelectedTrait3] = useState<number>(0);
    const [selectedTrait4, setSelectedTrait4] = useState<number>(0);
    const [selectedTrait5, setSelectedTrait5] = useState<number>(0);


    const [displayArr, setDisplayArr] = useState<Array<number>>([])

    const traitArr = [
        "Outline", "Head", "Body", "Face", "Chum", "Back Ground"
    ]

    const amount = [1, 76, 71, 23, 87, 14];

    const handleDownload = async () => {

        //@ts-ignore
        html2canvas(document.getElementById("capture")).then(canvas => {
            console.log(canvas.width, canvas)
            // document.body.appendChild(canvas)
        });


        if (!layeredImageRef.current) return;
      
        const parentDiv = layeredImageRef.current.parentElement;
      
        if (!parentDiv) return;
      
        const parentWidth = parentDiv.offsetWidth;
      
        // Calculate the height to maintain aspect ratio
        const aspectRatio = layeredImageRef.current.offsetWidth / layeredImageRef.current.offsetHeight;
        const height = Math.round(parentWidth / aspectRatio);
        
        console.log(parentWidth, aspectRatio, height)

        // @ts-ignore
        const canvas = await html2canvas(document.getElementById("capture"));
      
        const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        
        const link = document.createElement('a');
        link.download = 'layered_image.png';
        link.href = image;
        link.click();
      };

    useEffect(()=>{
        setDisplayArr([])
        const arr = Array.from({ length: amount[selectedType] }, (_, index) => index);
        // console.log(arr);
        setDisplayArr(arr);
    },[selectedType])
      

  return (
    <div className='flex md:flex-row max-md:flex-col h-[95vh] w-screen max-md:overflow-x-hidden md:overflow-y-hidden'>
        <div className='md:h-full md:w-[33%] h-[33%] w-full flex flex-col justify-center gap-4 bg-white/10 col-span-2'>
            <div id="traits" className='flex gap-2 w-full py-2 overflow-x-auto overflow-y-hidden items-center justify-start p-2 whitespace-nowrap'>
                {traitArr.map((item:string, index) => (
                    <button 
                        onClick={()=>{ setDisplayArr([]); setSelectedType(index)}}
                        key={index}
                        className={`${selectedType==index ? "bg-white/40" : "bg-white/5"} py-1 px-2 hover:bg-white/30 duration-200 flex-shrink-0 w-[10rem] rounded-xl text-white border-[1px] border-white`}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className='overflow-x-scroll w-full max-md:h-40 h-full'>
                <div className=' h-full gap-4 p-4 items-start max-md:justify-start md:justify-center md:flex md:flex-wrap max-md:w-fit max-md:grid max-md:grid-flow-col max-md:grid-rows-1 mx-auto' >
                    {displayArr?.length != 0 && displayArr.map((item:number)=>(
                        <button onClick={()=>{if(selectedType==0)setSelectedTrait0(item); if(selectedType==1)setSelectedTrait1(item);if(selectedType==2)setSelectedTrait2(item);if(selectedType==3)setSelectedTrait3(item);if(selectedType==4)setSelectedTrait4(item);if(selectedType==5)setSelectedTrait5(item);}} className='flex cursor-pointer items-center justify-center w-40 h-40 bg-white/10 rounded-xl gap-5' >
                            <Image className='rounded-xl' src={ selectedType==5 && (item==12 || item == 13) ? require(`../../../assets/StickerGenerator/trait_layers/${selectedType}/${item+1}.gif`): require(`../../../assets/StickerGenerator/trait_layers/${selectedType}/${item+1}.png`)} alt={String(item)} />
                        </button>
                    ))}
                </div>
            </div>
        </div>
        <div className='md:h-full md:w-[67%] h-[67%] w-full items-center flex flex-col mt-5 gap-5 justify-start'>
            <h2 className='text-3xl'>Sticker Generator</h2>
            <div id='capture' ref={layeredImageRef} className='max-md:w-[19rem] relative max-md:h-[19rem] overflow-hidden md:w-[32rem] md:h-[32rem] border-[5px] rounded-xl border-dashed border-white/15'>
                
                    <Image 
                    src={(selectedTrait5==12 || selectedTrait5 == 13) ? require(`../../../assets/StickerGenerator/trait_layers/5/${selectedTrait5+1}.gif`): require(`../../../assets/StickerGenerator/trait_layers/5/${selectedTrait5+1}.png`)}
                    alt="Background" 
                    className='w-full absolute z-0'
                    style={{width:"100%", height:"100%"}}
                    />
                    <Image 
                    src={require(`../../../assets/StickerGenerator/trait_layers/0/1.png`)}
                    alt="Outline" 
                    className='w-screen absolute z-1'
                    style={{width:"100%", height:"100%"}}
                    />
                    <Image 
                    src={require(`../../../assets/StickerGenerator/trait_layers/1/${selectedTrait1+1}.png`)} 
                    alt="Head" 
                    className='w-full absolute z-2' 
                    style={{width:"100%", height:"100%"}}
                    />
                    <Image 
                    src={require(`../../../assets/StickerGenerator/trait_layers/2/${selectedTrait2+1}.png`)} 
                    alt="Body" 
                    className='w-full absolute z-3' 
                    style={{width:"100%", height:"100%"}}
                    />
                    <Image 
                    src={require(`../../../assets/StickerGenerator/trait_layers/3/${selectedTrait3+1}.png`)} 
                    alt="Face" 
                    className='w-full absolute z-4'
                    style={{width:"100%", height:"100%"}} 
                    />
                    <Image 
                    src={require(`../../../assets/StickerGenerator/trait_layers/4/${selectedTrait4+1}.png`)} 
                    alt="Chum" 
                    className='w-full absolute z-5' 
                    style={{width:"100%", height:"100%"}}
                    />

            </div>
            <div className='flex gap-4 md:w-[55%] items-end justify-end'>
                <button className='bg-[#B7C660] flex gap-2 text-xl items-center hover:brightness-110 duration-200 hover:-translate-y-1 text-black rounded-full py-2 px-4'>
                    <FaDice className='text-2xl'/>
                    Randomize
                </button>
                <button onClick={handleDownload} className='bg-[#F7DD81] flex gap-2 text-xl items-center hover:brightness-110 duration-200 hover:-translate-y-1 text-black rounded-full py-2 px-4'>
                    <IoDownload className='text-2xl'/>
                    Download
                </button>
            </div>
        </div>
    </div>
  )
}
