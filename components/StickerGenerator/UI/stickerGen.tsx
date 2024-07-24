"use client"

import React, { useRef, useEffect } from 'react'
import { FaDice } from 'react-icons/fa'
import { IoDownload } from 'react-icons/io5'
import { useState } from 'react'
import Image from 'next/image'

export const StickerGen: React.FC = () => {

    const layeredImageRef = useRef<HTMLDivElement>(null);

    const [selectedType, setSelectedType] = useState<number>(0);
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

    const waitForImagesLoaded = async (element: HTMLElement) => {
        const images = element.getElementsByTagName('img');
        const promises = Array.from(images).map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = reject;
            });
        });
        await Promise.all(promises);
    };

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


    const captureSnapshot = (captureElement: HTMLElement): Promise<string> => {
        return new Promise((resolve, reject) => {
            const width = captureElement.offsetWidth;
            const height = captureElement.offsetHeight;
    
            const canvas = document.createElement('canvas');
            canvas.width = 512;
            canvas.height = 512;
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
            if (selectedTrait5 === 12 || selectedTrait5 === 13) {
                // Create GIF
                const base64Frames: string[] = [];
                for (let i = 0; i < 5; i++) {
                    const frame = await captureSnapshot(captureElement);
                    base64Frames.push(frame);
                    await delay(300);
                }

                console.log(base64Frames);

            } else {
                // Original PNG download logic
                const pngData = await captureSnapshot(captureElement);
                const link = document.createElement('a');
                link.download = 'chum.png';
                link.href = pngData;
                link.click();
            }
        } catch (error) {
            console.error("Error generating image:", error);
        }
    };

    useEffect(() => {
        setDisplayArr([])
        const arr = Array.from({ length: amount[selectedType] }, (_, index) => index);
        setDisplayArr(arr);
    }, [selectedType])

    function randomize() {
        setSelectedTrait1(Math.floor(amount[1] * Math.random()));
        setSelectedTrait2(Math.floor(amount[2] * Math.random()));
        setSelectedTrait3(Math.floor(amount[3] * Math.random()));
        setSelectedTrait4(Math.floor(amount[4] * Math.random()));
        setSelectedTrait5(Math.floor(amount[5] * Math.random()));
    }

    return (
        <div className='flex md:flex-row max-md:flex-col h-[95vh] w-screen max-md:overflow-x-hidden md:overflow-y-hidden'>
            <div className='md:h-full md:w-[33%] h-[33%] w-full flex flex-col justify-center gap-2 bg-white/10 col-span-2'>
                <div id="traits" className='flex gap-2 w-full py-2 overflow-x-auto overflow-y-hidden items-center justify-start p-2 whitespace-nowrap'>
                    {traitArr.map((item: string, index) => (
                        <button
                            onClick={() => { if (index != selectedType) setDisplayArr([]); setSelectedType(index) }}
                            key={index}
                            className={`${selectedType == index ? "bg-white/40" : "bg-white/5"} py-1 px-2 hover:bg-white/30 duration-200 flex-shrink-0 w-[10rem] rounded-xl text-white border-[1px] border-white`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <div className='overflow-x-scroll max-md:overflow-y-hidden w-full max-md:h-48 h-full'>
                    <div className=' h-full gap-4 p-4 items-start max-md:justify-start md:justify-center md:flex md:flex-wrap max-md:w-fit max-md:grid max-md:grid-flow-col max-md:grid-rows-1 mx-auto' >
                        {displayArr?.length != 0 && displayArr.map((item: number) => (
                            <button onClick={() => { if (selectedType == 1) setSelectedTrait1(item); if (selectedType == 2) setSelectedTrait2(item); if (selectedType == 3) setSelectedTrait3(item); if (selectedType == 4) setSelectedTrait4(item); if (selectedType == 5) setSelectedTrait5(item); }} className='flex cursor-pointer items-center justify-center w-40 h-40 bg-white/10 rounded-xl gap-5' >
                                <img className='rounded-xl' src={selectedType == 5 && (item == 12 || item == 13) ? `https://dulk39g224roa.cloudfront.net/trait_layers/${selectedType}/${item + 1}.gif` : `https://dulk39g224roa.cloudfront.net/trait_layers/${selectedType}/${item + 1}.png`} alt={String(item)} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className='md:h-full md:w-[67%] h-[67%] w-full items-center flex flex-col mt-5 gap-5 justify-start'>
                <h2 className='text-3xl'>Chum Generator <span className='text-[#e7b34e]' >3000</span></h2>
                <div id='capture' ref={layeredImageRef} className='max-md:w-[19rem] relative max-md:h-[19rem] overflow-hidden md:w-[32rem] md:h-[32rem] border-[5px] rounded-xl border-dashed border-white/15'>

                    <img
                        src={(selectedTrait5 == 12 || selectedTrait5 == 13) ? `https://dulk39g224roa.cloudfront.net/trait_layers/5/${selectedTrait5 + 1}.gif` : `https://dulk39g224roa.cloudfront.net/trait_layers/5/${selectedTrait5 + 1}.png`}
                        alt="Background"
                        className='w-full absolute z-0'
                        style={{ width: "100%", height: "100%" }}
                    />
                    <img
                        src={`https://dulk39g224roa.cloudfront.net/trait_layers/0/1.png`}
                        alt="Outline"
                        className='w-screen absolute z-1'
                        style={{ width: "100%", height: "100%" }}
                    />
                    <img
                        src={`https://dulk39g224roa.cloudfront.net/trait_layers/1/${selectedTrait1 + 1}.png`}
                        alt="Head"
                        className='w-full absolute z-2'
                        style={{ width: "100%", height: "100%" }}
                    />
                    <img
                        src={`https://dulk39g224roa.cloudfront.net/trait_layers/2/${selectedTrait2 + 1}.png`}
                        alt="Body"
                        className='w-full absolute z-3'
                        style={{ width: "100%", height: "100%" }}
                    />
                    <img
                        src={`https://dulk39g224roa.cloudfront.net/trait_layers/3/${selectedTrait3 + 1}.png`}
                        alt="Face"
                        className='w-full absolute z-4'
                        style={{ width: "100%", height: "100%" }}
                    />
                    <img
                        src={`https://dulk39g224roa.cloudfront.net/trait_layers/4/${selectedTrait4 + 1}.png`}
                        alt="Chum"
                        className='w-full absolute z-5'
                        style={{ width: "100%", height: "100%" }}
                    />

                </div>
                <div className='flex gap-4 md:w-[55%] items-end justify-end'>
                    <button onClick={randomize} className='bg-[#B7C660] flex gap-2 text-xl items-center hover:brightness-110 duration-200 hover:-translate-y-1 text-black rounded-full py-2 px-4'>
                        <FaDice className='text-2xl' />
                        Randomize
                    </button>
                    <button onClick={handleDownload} className='bg-[#e7b34e] flex gap-2 text-xl items-center hover:brightness-110 duration-200 hover:-translate-y-1 text-black rounded-full py-2 px-4'>
                        <IoDownload className='text-2xl' />
                        Download
                    </button>
                </div>
            </div>
        </div>
    )
}
