import React from 'react'
import { WalletConnectButton } from "@/components/buttons/WalletConnectButton";


export const Navbar = () => {
  return (
    <div className='absolute bottom-5 flex items-center justify-center bg-[#ffe682] h-20 w-[30rem] border-4 border-black rounded-full'>
        <WalletConnectButton/>
    </div>
  )
}
