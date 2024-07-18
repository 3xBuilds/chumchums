import React from 'react'
import { WalletConnectButton } from "@/components/WebsiteLanding/buttons/WalletConnectButton";
import { SiOpensea } from "react-icons/si";
import { RiEmojiStickerFill } from "react-icons/ri";
import { IoShareSocialSharp } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";

export const Navbar = () => {
  return (
    <div className='fixed top-5 flex items-center gap-8 z-[100] justify-center h-20 w-full'>
        <button className='flex items-center justify-center gap-2 text-lg hover:-translate-y-1 duration-200'>
            <SiOpensea className='text-3xl'/>
            Opensea
        </button>

        <button className='flex items-center justify-center gap-2 text-lg hover:-translate-y-1 duration-200'>
            <RiEmojiStickerFill className='text-3xl'/>
            Sticker Gen
        </button>

        <button className='flex items-center justify-center gap-2 text-lg hover:-translate-y-1 duration-200'>
            <IoShareSocialSharp className='text-3xl'/>
            Socials
        </button>

        <button className='flex items-center justify-center gap-2 text-lg hover:-translate-y-1 duration-200'>
            <RiTeamFill className='text-3xl'/>
            Team
        </button>

        <WalletConnectButton/>
    </div>
  )
}
