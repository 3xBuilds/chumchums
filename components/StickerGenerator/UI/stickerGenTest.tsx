"use client"
import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import Image, { StaticImageData } from 'next/image';
import { outlines,  heads, bodies, faces, chums, backgrounds } from '@/assets/StickerGenerator/trait_layers/traitLayers';

const StickerGenTest: React.FC = () => {
    const [selectedOutline, setSelectedOutline] = useState<StaticImageData>(outlines[0]);
    const [selectedHead, setSelectedHead] = useState<StaticImageData>(heads[0]);
    const [selectedBody, setSelectedBody] = useState<StaticImageData>(bodies[0]);
    const [selectedFace, setSelectedFace] = useState<StaticImageData>(faces[0]);
    const [selectedChum, setSelectedChum] = useState<StaticImageData>(chums[0]);
    const [selectedBackground, setSelectedBackground] = useState<StaticImageData>(backgrounds[0]);

    const traits = ['Outline', 'Head', 'Body', 'Face', 'Chum', 'Background'];

    const [selectedTrait, setSelectedTrait] = useState<string>('Outline');
  
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
    const handleDownload = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const link = document.createElement('a');
        link.download = 'sticker.png';
        link.href = canvas.toDataURL();
        link.click();
      }
    };
  
    const drawCanvas = () => {
        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
      
            const images: StaticImageData[] = [
              selectedBackground,
              selectedOutline,
              selectedHead,
              selectedBody,
              selectedFace,
              selectedChum,
            ];
       
            const loadImage = (src: string): Promise<HTMLImageElement> => {
              return new Promise((resolve) => {
                const img = new window.Image();
                img.src = src;
                img.onload = () => resolve(img);
              });
            };
      
            const drawImagesSequentially = async () => {
              for (const imgData of images) {
                const img = await loadImage(imgData.src);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
              }
            };
            drawImagesSequentially();
          }
        }
    };
  
    useEffect(() => {
      drawCanvas();
    }, [selectedOutline, selectedHead, selectedBody, selectedFace, selectedChum, selectedBackground]);
  
    const handleSelectChange = (setter: React.Dispatch<React.SetStateAction<StaticImageData>>, options: StaticImageData[]) => (e: ChangeEvent<HTMLSelectElement>) => {
      const index = Number(e.target.value);
      setter(options[index]);
    };
   
    return (
      <div className=' grid grid-cols-12 w-screen h-screen'>
        {/* <div>
          <label>Outline:</label>
          <select onChange={handleSelectChange(setSelectedOutline, outlines)}>
            {outlines.map((outline, index) => (
              <option value={index} key={index}>Outline {index + 1}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Head:</label>
          <select onChange={handleSelectChange(setSelectedHead, heads)}>
            {heads.map((head, index) => (
              <option value={index} key={index}>Head {index + 1}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Body:</label>
          <select onChange={handleSelectChange(setSelectedBody, bodies)}>
            {bodies.map((body, index) => (
              <option value={index} key={index}>Body {index + 1}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Face:</label>
          <select onChange={handleSelectChange(setSelectedFace, faces)}>
            {faces.map((face, index) => (
              <option value={index} key={index}>Face {index + 1}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Chum:</label>
          <select onChange={handleSelectChange(setSelectedChum, chums)}>
            {chums.map((chum, index) => (
              <option value={index} key={index}>Chum {index + 1}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Background:</label>
          <select onChange={handleSelectChange(setSelectedBackground, backgrounds)}>
            {backgrounds.map((background, index) => (
              <option value={index} key={index}>Background {index + 1}</option>
            ))}
          </select>
        </div> */}

        <div className=' col-span-4 bg-white/5 w-full h-full shadow-2xl p-2 shadow-black/50'>
          <div className='w-full noscr h-12 '>
            <div className=' w-full flex flex-row gap-2'>
              {traits.map((trait, index) => (
                <button onClick={()=>{setSelectedTrait(trait)}} className={` ${trait==selectedTrait? "bg-white/20" : "bg-white/5"} rounded-lg border-white/40 px-3 py-1 w-fit border-[1px] text-white`}> {trait} </button>
              ))}
            </div>
          </div>
        </div>

        <div className=' w-full flex flex-col items-center justify-center col-span-8'>
          <div className='rounded-xl border-4 border-white/20 border-dashed p-2'><canvas ref={canvasRef} width={500} height={500} className='rounded-lg'/></div>
          <button onClick={handleDownload}>Download Sticker</button>
        </div>
  
        
      </div>
    );
  };
  
  export default StickerGenTest;