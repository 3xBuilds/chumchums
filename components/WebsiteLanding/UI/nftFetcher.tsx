"use client"

import React, { useEffect } from 'react'
import { ethers } from 'ethers'
import abi from "@/utils/abis/chumabi"
import { ContractAdd } from '@/utils/contractAds'

export const NftFetcher = () => {

    async function contractSetup(){
        const provider = new ethers.providers.AlchemyProvider("mainnet", 'Fm-wANB61-hzoUevEz8Of07SUsUp0k0E');
        const signer = provider.getSigner();
    
        try {
          const contract = new ethers.Contract(ContractAdd.contract, abi, signer);
          return contract;
        }
        catch(err){
            console.log(err);
        }
    }

    async function fetch(){
        try{
            const contract = await contractSetup();
            console.log(contract);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetch();
    },[])

  return (
    <div></div>
  )
}
