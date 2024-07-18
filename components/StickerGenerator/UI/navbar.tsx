"use client"

import React from 'react'
import { IoMdHome } from "react-icons/io";
import { WalletConnectButton } from '../buttons/WalletConnectButton';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className='flex relative top-0 py-4 px-8 w-screen border-[2px] border-[#242326]'>
      <div className='w-1/2'>
        <button onClick={()=>{router.push("/")}} className='flex gap-2 items-center cursor-pointer hover:-translate-y-1 duration-200 justify-center'>
            <IoMdHome className='text-2xl'/>
            <h3 className='text-xl'>HOME</h3>
        </button>
      </div>

      <div className='w-1/2 flex justify-end'>
        <WalletConnectButton/>
      </div>

    </div>
  )
}
