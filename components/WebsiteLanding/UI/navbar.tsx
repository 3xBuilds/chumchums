"use client"

import React from 'react'
import { WalletConnectButton } from "@/components/WebsiteLanding/buttons/WalletConnectButton";
import { SiOpensea } from "react-icons/si";

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import team from "@/assets/WebsiteLanding/logos/team.png"
import stickerGen from "@/assets/WebsiteLanding/logos/stickergen.png"
import social from "@/assets/WebsiteLanding/logos/socials.png"
import opensea from "@/assets/WebsiteLanding/logos/opensea.png"
import Image from 'next/image';
import magicEdenLogo from "@/assets/WebsiteLanding/logos/magicEdenLogo.png"
import openseapro from "@/assets/WebsiteLanding/logos/openseapro.png"

import blur from "@/assets/WebsiteLanding/logos/blur.png"
import { ImCross } from 'react-icons/im';

export const Navbar = () => {

  const router = useRouter();

  function bringDiv(){
    document.getElementById("movingDiv")?.classList.remove("-translate-y-[20rem]")
    document.getElementById("movingDiv")?.classList.remove("max-md:-translate-y-[20rem]")
    document.getElementById("movingDiv")?.classList.add("translate-y-[6rem]")
    document.getElementById("movingDiv")?.classList.add("max-md:translate-y-[15rem]")

  }

  function removeDiv(){
      document.getElementById("movingDiv")?.classList.remove("translate-y-[6rem]")
      document.getElementById("movingDiv")?.classList.remove("max-md:translate-y-[15rem]")
      document.getElementById("movingDiv")?.classList.add("-translate-y-[20rem]")
      document.getElementById("movingDiv")?.classList.add("max-md:-translate-y-[20rem]")
  }

  return (
    <div className='fixed top-5 z-[100] flex items-center justify-center h-20 w-full '>
        <div id="movingDiv" className='-translate-y-[20rem] max-md:-translate-y-[20rem] max-md:w-[90%] z-[1000000] duration-300 absolute flex items-center justify-center max-md:flex-col gap-8 bg-black/50 border-2 border-black max-md:rounded-xl md:rounded-full px-8 py-2'>
            <div className='w-full flex items-end justify-end'>
                <button onClick={removeDiv} className='hover:text-red-500 text-white duration-300'><ImCross/>
                    </button>
            </div>
            <a className='cursor-pointer w-full ' href='https://blur.io/eth/collection/chumchumsnft' target="_blank">
                <div className='flex flex-col items-center w-28 justify-center mx-auto hover:-translate-y-[1px] duration-200'>
                    <Image src={blur} alt='blur' className='w-[3rem]' />
                    <h3 className='text-xl'>Blur</h3>
                </div>
                </a>
            <a className='cursor-pointer w-full' href="https://magiceden.io/collections/ethereum/0xe987e9b07ca431fe0c7e8f431fa4f94ab9ca2423" target='_blank'>
            <div className='flex flex-col items-center w-28 justify-center mx-auto hover:-translate-y-[1px] duration-200'>
                    <Image src={magicEdenLogo} alt='blur' className='w-[3rem]' />
                    <h3 className='text-xl'>Magic Eden</h3>
                </div>
            </a>
            <a className='cursor-pointer w-full' href='https://opensea.io/collection/chumchumsnft' target="_blank">
                <div className='flex flex-col items-center w-28 justify-center mx-auto hover:-translate-y-[1px] duration-200'>
                    <Image src={openseapro} alt='blur' className='w-[3rem] ' />
                    <h3 className='text-xl'>Opensea Pro</h3>
                </div>
            </a>
        </div>
        <div className='flex items-center md:gap-10 max-md:gap-4 bg-black/50 rounded-full px-8 py-1 border-[2px] border-black/70'>
            {/* <a target='_blank' href="https://opensea.io/collection/chumchumsnft" className='flex flex-col items-center justify-center gap-0 md:text-md text-sm hover:-translate-y-1 duration-200'>
                <Image src={opensea} alt="stickerGen" className='w-10'/>
                Opensea
            </a> */}

            <button onClick={()=>{bringDiv()}} className='flex flex-col items-center w-20 justify-center gap-0 md:text-md text-sm hover:-translate-y-1 duration-200'>
                <Image src={stickerGen} alt="stickerGen" className='w-10'/>
                Marketplaces
            </button>

            <Link href="#socials" className='flex flex-col items-center justify-center w-20 gap-0 md:text-md text-sm hover:-translate-y-1 duration-200'>
                <Image src={social} alt="stickerGen" className='w-10'/>
                Socials
            </Link>

            <Link href="#team" className='flex flex-col items-center justify-center w-20 gap-0 md:text-md text-sm hover:-translate-y-1 duration-200'>
                <Image src={team} alt="stickerGen" className='w-10'/>
                Team
            </Link>

            {/* <WalletConnectButton/> */}
        </div>
        
    </div>
  )
}
