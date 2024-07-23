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

export const Navbar = () => {

  const router = useRouter();

  return (
    <div className='fixed top-5 z-[100] flex items-center justify-center h-20 w-full '>
        <div className='flex items-center md:gap-8 max-md:gap-4'>
            <a target='_blank' href="https://opensea.io/collection/chumchumsnft" className='flex flex-col items-center justify-center gap-2 md:text-md text-sm hover:-translate-y-1 duration-200'>
                <Image src={opensea} alt="stickerGen" className='w-10'/>
                Opensea
            </a>

            <button onClick={()=>{router.push("/sticker")}} className='flex flex-col items-center justify-center gap-2 md:text-md text-sm hover:-translate-y-1 duration-200'>
                <Image src={stickerGen} alt="stickerGen" className='w-10'/>
                Sticker Gen
            </button>

            <Link href="#socials" className='flex flex-col items-center justify-center gap-2 md:text-md text-sm hover:-translate-y-1 duration-200'>
                <Image src={social} alt="stickerGen" className='w-10'/>
                Socials
            </Link>

            <Link href="#team" className='flex flex-col items-center justify-center gap-2 md:text-md text-sm hover:-translate-y-1 duration-200'>
                <Image src={team} alt="stickerGen" className='w-10'/>
                Team
            </Link>

            <WalletConnectButton/>
        </div>
        
    </div>
  )
}
