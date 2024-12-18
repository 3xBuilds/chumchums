"use client"

import React, { useRef, useEffect } from 'react'
import { FaDice } from 'react-icons/fa'
import { IoDownload, IoShuffle } from 'react-icons/io5'
import { useState } from 'react'
import Image from 'next/image'

import bg_down from "@/assets/StickerGenerator/background/bg_down.png"
import bg_up from "@/assets/StickerGenerator/background/bg_up.png"
import body_down from "@/assets/StickerGenerator/background/body_down.png"
import body_up from "@/assets/StickerGenerator/background/body_up.png"
import chum_down from "@/assets/StickerGenerator/background/chum_down.png"
import chum_up from "@/assets/StickerGenerator/background/chum_up.png"
import download_down from "@/assets/StickerGenerator/background/download_down.png"
import download_up from "@/assets/StickerGenerator/background/download_up.png"
import face_down from "@/assets/StickerGenerator/background/face_down.png"
import face_up from "@/assets/StickerGenerator/background/face_up.png"
import heads_down from "@/assets/StickerGenerator/background/heads_down.png"
import heads_up from "@/assets/StickerGenerator/background/heads_up.png"
import outline_down from "@/assets/StickerGenerator/background/outline_down.png"
import outline_up from "@/assets/StickerGenerator/background/outline_up.png"
import random_down from "@/assets/StickerGenerator/background/random_down.png"
import random_up from "@/assets/StickerGenerator/background/random_up.png"

import phoneBg from "@/assets/StickerGenerator/background/phoneBg.png";


import bg from "@/assets/StickerGenerator/background/Untitled_Artwork_3.png"
import { IoMdDownload } from 'react-icons/io'
import { GiEmptyChessboard } from 'react-icons/gi'
import { TbPumpkinScary } from 'react-icons/tb'

export const StickerGen: React.FC = () => {

    const layeredImageRef = useRef<HTMLDivElement>(null);

    const [selectedType, setSelectedType] = useState<number>(0);
    const [selectedTrait0, setSelectedTrait0] = useState<number>(0);
    const [selectedTrait1, setSelectedTrait1] = useState<number>(0);
    const [selectedTrait2, setSelectedTrait2] = useState<number>(0);
    const [selectedTrait3, setSelectedTrait3] = useState<number>(0);
    const [selectedTrait4, setSelectedTrait4] = useState<number>(0);
    const [selectedTrait5, setSelectedTrait5] = useState<number>(0);

    const[randomDown, setRandomDown] = useState<boolean>(false);
    const[downloadDown, setDownloadDown] = useState<boolean>(false);


    const [displayArr, setDisplayArr] = useState<Array<number>>([])

    const traitArr = [
        "Outline", "Head", "Body", "Face", "Chum", "Back Ground"
    ]

    const amount = [2, 79, 73, 23, 90, 16];


    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const captureSnapshot = (captureElement: HTMLElement): Promise<string> => {
        return new Promise((resolve, reject) => {

            const width = captureElement.offsetWidth;
            const height = captureElement.offsetHeight;
    
            const canvas = document.createElement('canvas');
            canvas.width = 2160;
            canvas.height = 2160;

            const ctx = canvas.getContext('2d');
    
            if (!ctx) {
                reject(new Error("Could not get canvas context"));
                return;
            }
    
            const images = Array.from(captureElement.getElementsByTagName('img'));
            const imagePromises = images.map(img => {
                return new Promise<HTMLImageElement>((resolveImg, rejectImg) => {
                    const newImg = document.createElement("img");
                    newImg.crossOrigin = "anonymous";
                    newImg.onload = () => resolveImg(newImg);
                    newImg.onerror = () => rejectImg(new Error(`Failed to load image: ${img.src}`));
                    newImg.src = img.src;
                });
            });
    
            Promise.all(imagePromises)
                .then(loadedImages => {
                    loadedImages.forEach(img => {
                        ctx.drawImage(img, 0, 0, width, height);
                    });
                    resolve(canvas.toDataURL('image/png'));
                })
                .catch(error => {
                    console.error("Error loading images:", error);
                    reject(error);
                });
        });
    };

    const handleDownload = async () => {
        const captureElement = document.getElementById("capture");
        if (!captureElement || !(captureElement instanceof HTMLElement)) {
            console.error("Capture element not found or is not an HTMLElement");
            return;
        }

        try {
            
                // Original PNG download logic
                const pngData = await captureSnapshot(captureElement);
                const link = document.createElement('a');
                link.download = 'chum.png';
                link.href = pngData;
                link.click();

                await delay(200);
                setDownloadDown(false);
            
        } catch (error) {
            console.error("Error generating image:", error);
            await delay(200);
            setDownloadDown(false);
        }
    };

    useEffect(() => {
        setDisplayArr([])
        const arr = Array.from({ length: amount[selectedType] }, (_, index) => index).reverse();
        setDisplayArr(arr);
    }, [selectedType])

    async function randomize() {
        setSelectedTrait0(Math.floor(amount[0] * Math.random()));
        setSelectedTrait1(Math.floor(amount[1] * Math.random()));
        setSelectedTrait2(Math.floor(amount[2] * Math.random()));
        setSelectedTrait3(Math.floor(amount[3] * Math.random()));
        setSelectedTrait4(Math.floor(amount[4] * Math.random()));
        setSelectedTrait5(Math.floor(amount[5] * Math.random()));
        await delay(200)
        setRandomDown(false);
    }

    function handleNaked(){
        setSelectedTrait1(999);
        setSelectedTrait2(999);
        setSelectedTrait3(999);
        setSelectedTrait4(999);
        setSelectedTrait5(Math.floor(amount[5] * Math.random()));
    }

    function handleHalloween(){
        const head = [76, 77, 78];
        const body = [72]
        const chum = [87, 88, 89]
        const bg = [14, 15]
        const bodycal = Math.round(Math.random()) == 0 ? body[0] : 999
        setSelectedTrait0(1);
        if(bodycal == 72){
            setSelectedTrait1(999)
        }
        else{
            setSelectedTrait1(head[Math.round(Math.random()*2)]);
        }
        setSelectedTrait2(bodycal);
        setSelectedTrait4(chum[Math.round(Math.random()*2)]);
        setSelectedTrait5(bg[Math.round(Math.random()*1)]);

    }

    return (
        <div className='w-screen h-screen overflow-hidden object-cover items-center justify-center'>
            <h3 className='relative w-full backdrop-blur-2xl z-[1000000000] top-4 text-center text-4xl bg-black/50 border-2 border-black rounded-xl px-4 py-2'>CHUM GENERATOR <span className='text-[#e7b34e]' >3000</span>!</h3>
            <div className=' absolute top-0 w-screen h-screen left-0 overflow-hidden flex items-center justify-center'>
            
            {/* <div className='absolute z-50 top-0 w-full h-full pointer-events-none'> */}
                {/* <Image alt='bg' unoptimized width={1920} height={1080} src={bg} className="max-2xl:w-[40rem] 2xl:w-[45rem] pointer-events-none z-[50]"/> */}
                <div className='absolute max-md:hidden'>
                    <Image src={bg} alt='bg' className='fixed top-0 h-screen w-full left-0 object-cover z-50 pointer-events-none ' />

                    <div className=' max-2xl:top-5 max-2xl:left-5 2xl:top-[6vw] 2xl:left-2 fixed h-screen flex items-center justify-center w-full pointer-events-none z-[1000000] '>
                        <button className={`absolute ${selectedType != 5 && "hidden"} w-[12rem] translate-x-[-18rem] translate-y-[8rem] z-[100] pointer-events-auto object-contain`} ><Image src={bg_down} alt="bg_down" className='w-[30rem] scale-[1.1]'/></button>
                        <button onClick={()=>{setSelectedType(5);}} className={`absolute ${selectedType == 5 && "hidden"} w-[12rem] translate-x-[-18rem] translate-y-[8rem] overflow-hidden z-[100] pointer-events-auto`} ><Image src={bg_up} alt="bg_down" className='scale-[1.1]'/></button>

                        <button className={`absolute ${selectedType != 1 && "hidden"} h-[4.5rem] w-[10rem] translate-x-[-21rem] translate-y-[13rem] object-contain overflow-hidden z-[100] pointer-events-auto`} ><Image className='scale-[1.15]' src={heads_down} alt="heads_down"/></button>
                        <button onClick={()=>{setSelectedType(1);}} className={`absolute ${selectedType == 1 && "hidden"} w-[10rem] translate-x-[-21rem] translate-y-[13rem] h-[4.5rem]  object-contain overflow-hidden z-[100] pointer-events-auto`} ><Image className='scale-[1.15]' src={heads_up} alt="heads_down"/></button>

                        <button className={`absolute ${selectedType != 2 && "hidden"} h-[4.5rem] w-[10rem] translate-x-[-12rem] translate-y-[13rem] object-contain overflow-hidden z-[100] pointer-events-auto`} ><Image className='scale-[1.15]' src={body_down} alt="body_down"/></button>
                        <button onClick={()=>{setSelectedType(2);}} className={`absolute ${selectedType == 2 && "hidden"} w-[10rem] h-[4.5rem] translate-x-[-12rem] translate-y-[13rem] object-contain overflow-hidden z-[100] pointer-events-auto`} ><Image className='scale-[1.15]' src={body_up} alt="body_down"/></button>

                        <button className={`absolute ${selectedType != 3 && "hidden"} w-[10rem] translate-x-[-7.5rem] translate-y-[8.2rem] overflow-hidden object-contain z-[100] pointer-events-auto`} ><Image src={face_down} alt="heads_down" className='scale-[1.15]'/></button>
                        <button onClick={()=>{setSelectedType(3);}} className={`absolute ${selectedType == 3 && "hidden"} w-[10rem] translate-x-[-7.5rem] translate-y-[8.2rem] overflow-hidden object-contain z-[100] pointer-events-auto`} ><Image className='scale-[1.15]' src={face_up} alt="heads_down"/></button>

                        <button className={`absolute ${selectedType != 4 && "hidden"} w-[10rem] translate-x-[2rem] translate-y-[8.2rem] overflow-hidden object-contain z-[100] pointer-events-auto`} ><Image src={chum_down} alt="chum_down" className='scale-[1.15]'/></button>
                        <button onClick={()=>{setSelectedType(4);}} className={`absolute ${selectedType == 4 && "hidden"} w-[10rem] translate-x-[1.8rem] translate-y-[8.2rem] overflow-hidden object-contain z-[100] pointer-events-auto`} ><Image className='scale-[1.15]' src={chum_up} alt="chum_up"/></button>

                        <button onClick={()=>{setRandomDown(true); randomize()}} className={`absolute ${randomDown && "hidden"} w-[10rem] translate-x-[12rem] translate-y-[8.2rem] overflow-hidden object-contain z-[100] pointer-events-auto`} ><Image className='' src={random_up} alt="chum_up"/></button>
                        <button className={`absolute   ${!randomDown && "hidden"} w-[10rem] translate-x-[12rem] translate-y-[8.2rem] overflow-hidden object-contain z-[100] pointer-events-auto`} ><Image className='' src={random_down} alt="chum_up"/></button>


                        <button className={`absolute ${selectedType != 0 && "hidden"} h-20 w-[14rem] translate-x-[1rem] translate-y-[12.5rem] object-contain overflow-hidden z-[100] pointer-events-auto`} ><Image className='' src={outline_down} alt="body_down"/></button>
                        <button onClick={()=>{setSelectedType(0);}} className={`absolute ${selectedType == 0 && "hidden"} w-[14rem] translate-x-[1rem] translate-y-[12.5rem] h-20 object-contain overflow-hidden z-[100] pointer-events-auto`} ><Image className='' src={outline_up} alt="body_down"/></button>
                    
                        <button onClick={()=>{setDownloadDown(true);handleDownload()}} className={`absolute ${downloadDown && "hidden"} w-[14rem] translate-x-[15rem] translate-y-[12.5rem] h-[5.4rem] object-contain overflow-hidden z-[100] pointer-events-auto`} ><Image className='' src={download_up} alt="download_up"/></button>
                        <button className={`absolute   ${!downloadDown && "hidden"} w-[14rem] translate-x-[15rem] translate-y-[12.5rem] h-[5.4rem] object-contain overflow-hidden z-[100] pointer-events-auto`} ><Image className='' src={download_down} alt="download_up"/></button>


                    </div>
                </div>

                <div className='absolute w-screen h-full md:hidden top-0 left-0 bottom-0 right-0 z-50 pointer-events-none'>
                    <Image src={phoneBg} alt='bg' className=' md:hidden h-full w-full object-cover  pointer-events-none ' />
                </div>

            {/* </div> */}
                
            <div className='flex max-md:translate-y-10 md:flex-row 2xl:-translate-y-36 max-md:flex-col h-screen items-center gap-2 md:justify-between max-md:justify-center max-md:gap-12 overflow-x-hidden md:w-[38rem] 2xl:w-[45rem] max-md:translate-x-0 max-2xl:translate-x-[-3rem] 2xl:translate-x-[-6rem] pointer-events-auto md:translate-y-[-7rem] translate-y-[3rem]'>
                
                <div className='flex gap-2 overflow-x-scroll max-sm:translate-y-10 overflow-y-hidden translate-y-4 relative max-sm:w-[20rem] max-md:w-[30rem] bg-white/20 pb-2 pt-6 md:hidden order-first px-10 pointer-events-none z-[1000000] '>
                    <div className='grid grid-rows-1 grid-flow-col gap-2 -translate-y-3'>
                    <button onClick={()=>{setSelectedType(0)}} className={`${selectedType == 0 ? "bg-white scale-110 border-2 border-black shadow-xl shadow-white/20":"bg-white border-2 border-black"} px-3 rounded-xl text-lg text-black hover:scale-105 h-10 duration-200 pointer-events-auto`}>Outline</button>
                        <button onClick={()=>{setSelectedType(5)}} className={`${selectedType == 5 ? "bg-yellow-400 scale-110 border-2 border-white shadow-xl shadow-yellow-400/20":"bg-yellow-500 border-2 border-black"} px-3 rounded-xl text-lg text-black hover:scale-105 h-10 duration-200 pointer-events-auto`}>Background</button>
                        <button onClick={()=>{setSelectedType(1)}} className={`${selectedType == 1 ? "bg-orange-400 scale-110 border-2 border-white shadow-xl shadow-orange-400/20":"bg-orange-500 border-2 border-black"} px-3 rounded-xl text-lg text-black hover:scale-105 h-10 duration-200 pointer-events-auto`}>Head</button>
                        <button onClick={()=>{setSelectedType(2)}} className={`${selectedType == 2 ? "bg-blue-400 scale-110 border-2 border-white shadow-xl shadow-blue-400/20":"bg-blue-500 border-2 border-black"} px-3 rounded-xl text-lg text-black hover:scale-105 h-10 duration-200 pointer-events-auto`}>Body</button>
                        <button onClick={()=>{setSelectedType(3)}} className={`${selectedType == 3 ? "bg-green-300 scale-110 border-2 border-white shadow-xl shadow-green-400/20":"bg-green-400 border-2 border-black"} px-3 rounded-xl text-lg text-black hover:scale-105 h-10 duration-200 pointer-events-auto`}>Face</button>
                        <button onClick={()=>{setSelectedType(4)}} className={`${selectedType == 4 ? "bg-green-600 scale-110 border-2 border-white shadow-xl shadow-green-600/20":"bg-green-700 border-2 border-black"} px-3 rounded-xl text-lg text-black hover:scale-105 h-10 duration-200 pointer-events-auto`}>Chum</button>
                    </div>


                </div>
                
                <div className='md:h-[55vh] 2xl:h-[60vh] max-sm:-translate-y-10 h-[7rem] md:w-[18vw] md:py-12 max-md:-translate-y-5 max-sm:w-[25rem] max-md:w-[30rem] flex flex-col justify-center gap-2 bg-white/10 col-span-2  overflow-hidden'>
                    
                    <div className='overflow-x-scroll  md:overflow-x-hidden max-md:overflow-y-hidden w-full max-md:h-48 h-full'>
                        <div className=' h-full gap-4 max-md:px-20 p-4 items-start max-md:justify-start md:justify-center md:flex md:flex-wrap max-md:w-fit max-md:grid max-md:grid-flow-col max-md:grid-rows-1 mx-auto' >
                            {displayArr?.length != 0 && displayArr.map((item: number) => (
                                <button onClick={() => { if(selectedType == 0) setSelectedTrait0(item); if (selectedType == 1) setSelectedTrait1(item); if (selectedType == 2) setSelectedTrait2(item); if (selectedType == 3) setSelectedTrait3(item); if (selectedType == 4) setSelectedTrait4(item); if (selectedType == 5) setSelectedTrait5(item); }} className='flex cursor-pointer items-center justify-center hover:scale-105 duration-200 w-20 h-20 bg-white/10 rounded-xl gap-5' >
                                    <img className='rounded-xl' src={`https://dn57xylxk90g5.cloudfront.net/trait_layers/${selectedType}/${item + 1}.png`} alt={String(item)} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='md:h-full mt-5 md:w-[67%] items-center flex flex-col overflow-y-hidden max-md:order-first gap-5 justify-center'>
                    {/* <h2 className='text-3xl'>Chum Generator <span className='text-[#e7b34e]' >3000</span></h2> */}
                    <div id='capture' ref={layeredImageRef} className='w-[2160px] h-[2160px] absolute -left-[300rem] overflow-hidden border-[5px] rounded-xl border-dashed border-white/15'>

                        <img
                            src={`https://dn57xylxk90g5.cloudfront.net/trait_layers/5/${selectedTrait5 + 1}.png`}
                            alt="Background"
                            className='w-full absolute z-0'
                            style={{ width: "512px", height: "512px" }}
                        />
                        <img
                            src={`https://dn57xylxk90g5.cloudfront.net/trait_layers/0/${selectedTrait0 + 1}.png`}
                            alt="Outline"
                            className='w-screen absolute z-1'
                            style={{ width: "512px", height: "512px" }}
                        />
                        <img
                            src={`https://dn57xylxk90g5.cloudfront.net/trait_layers/1/${selectedTrait1 + 1}.png`}
                            alt="Head"
                            className='w-full absolute z-2'
                            style={{ width: "512px", height: "512px" }}
                        />
                        <img
                            src={`https://dn57xylxk90g5.cloudfront.net/trait_layers/2/${selectedTrait2 + 1}.png`}
                            alt="Body"
                            className='w-full absolute z-3'
                            style={{ width: "512px", height: "512px" }}
                        />
                        <img
                            src={`https://dn57xylxk90g5.cloudfront.net/trait_layers/3/${selectedTrait3 + 1}.png`}
                            alt="Face"
                            className='w-full absolute z-4'
                            style={{ width: "512px", height: "512px" }}
                        />
                        <img
                            src={`https://dn57xylxk90g5.cloudfront.net/trait_layers/4/${selectedTrait4 + 1}.png`}
                            alt="Chum"
                            className='w-full absolute z-5'
                            style={{ width: "512px", height: "512px" }}
                        />

                    </div>
                    <div className='md:w-[16rem] md:h-[16rem] max-md:w-[13rem] max-md:h-[13rem] max-sm:w-[10rem] max-sm:h-[10rem] relative overflow-hidden border-[5px] rounded-xl border-dashed border-white/15'>
                    <img
                            src={`https://dn57xylxk90g5.cloudfront.net/trait_layers/5/${selectedTrait5 + 1}.png`}
                            alt="Background"
                            className='w-full absolute z-0'
                            style={{ width: "100%", height: "100%" }}
                        />
                        <img
                            src={`https://dn57xylxk90g5.cloudfront.net/trait_layers/0/${selectedTrait0 + 1}.png`}
                            alt="Outline"
                            className='w-screen absolute z-1'
                            style={{ width: "100%", height: "100%" }}
                        />
                        <img
                            src={`https://dn57xylxk90g5.cloudfront.net/trait_layers/1/${selectedTrait1 + 1}.png`}
                            alt="Head"
                            className='w-full absolute z-2'
                            style={{ width: "100%", height: "100%" }}
                        />
                        <img
                            src={`https://dn57xylxk90g5.cloudfront.net/trait_layers/2/${selectedTrait2 + 1}.png`}
                            alt="Body"
                            className='w-full absolute z-3'
                            style={{ width: "100%", height: "100%" }}
                        />
                        <img
                            src={`https://dn57xylxk90g5.cloudfront.net/trait_layers/3/${selectedTrait3 + 1}.png`}
                            alt="Face"
                            className='w-full absolute z-4'
                            style={{ width: "100%", height: "100%" }}
                        />
                        <img
                            src={`https://dn57xylxk90g5.cloudfront.net/trait_layers/4/${selectedTrait4 + 1}.png`}
                            alt="Chum"
                            className='w-full absolute z-5'
                            style={{ width: "100%", height: "100%" }}
                        />

                    </div>
                    
                    <div className='flex gap-2'>
                        <button onClick={handleNaked} className='flex bg-yellow-400 hover:bg-yellow-500 rounded-xl duration-200 p-2 border-2 border-yellow-600 items-center justify-center gap-2 text-black'><GiEmptyChessboard className='text-xl' />Naked Chum</button>
                        <button onClick={handleHalloween} className='flex bg-orange-400 hover:bg-orange-500 rounded-xl duration-200 p-2 border-2 border-orange-600 items-center justify-center gap-2 text-black'><TbPumpkinScary className='text-xl' /></button>
                    </div>


                    <div className='flex gap-5 items-center max-md:mb-4 md:hidden justify-center'>
                        <button onClick={randomize} className='flex bg-purple-400 hover:bg-purple-500 rounded-xl duration-200 p-2 border-2 border-purple-600 items-center justify-center'><IoShuffle className='text-xl'/></button>
                        <button onClick={handleDownload} className='flex bg-teal-400 hover:bg-teal-500 rounded-xl duration-200 p-2 border-2 border-teal-600 items-center justify-center'><IoMdDownload className='text-xl' /></button>
                    </div>
                    
                </div>
            </div>
            
            </div>
        </div>
    )
}
