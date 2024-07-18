import React from 'react'
import { WalletConnectButton } from "@/components/WebsiteLanding/buttons/WalletConnectButton";


export const Navbar = () => {
  return (
    <div className='fixed top-5 flex items-center z-[100] justify-center h-20 w-[30rem]'>
        
        <WalletConnectButton/>
    </div>
  )
}
