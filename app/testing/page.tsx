"use client"

import React, {useRef, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import html2canvas from 'html2canvas';
const img = require('../../assets/StickerGenerator/trait_layers/5/2.png');

export default function Page(){
    const layeredImageRef = useRef<HTMLDivElement>(null);

    const handleDownload = async () => {

        html2canvas(document.body).then(function(canvas) {
            document.body.appendChild(canvas);
        });

        // //@ts-ignore
        // html2canvas(document.getElementById("capture")).then(canvas => {
        //     console.log(canvas.width, canvas)
        //     // document.body.appendChild(canvas)
        // });


        // if (!layeredImageRef.current) return;
      
        // const parentDiv = layeredImageRef.current.parentElement;
      
        // if (!parentDiv) return;
      
        // const parentWidth = parentDiv.offsetWidth;
      
        // // Calculate the height to maintain aspect ratio
        // const aspectRatio = layeredImageRef.current.offsetWidth / layeredImageRef.current.offsetHeight;
        // const height = Math.round(parentWidth / aspectRatio);
        
        // console.log(parentWidth, aspectRatio, height)

        // // @ts-ignore
        // const canvas = await html2canvas(document.getElementById("capture"));
      
        // const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        
        // const link = document.createElement('a');
        // link.download = 'layered_image.png';
        // link.href = image;
        // link.click();
      };


  return (
    <div id='capture' className='w-screen h-screen'>
        <h1 className='bg-black'>HEHEHEHEH</h1>
        <div className='w-96 h-96 relative'>
            <img 
            src={img.default.src}
            alt="Background"
            className='absolute z-0 w-48 h-48'
            />
        </div>

        <button onClick={handleDownload} className='bg-blue-500 p-4 rounded-full'>Download</button>
    </div>
  )
}
