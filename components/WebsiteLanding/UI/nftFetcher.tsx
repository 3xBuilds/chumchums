"use client"

import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import abi from "@/utils/abis/chumabi"
import { ContractAdd } from '@/utils/contractAds'
import Image from 'next/image'
import guitar from "@/assets/WebsiteLanding/logos/guitar.png"
import { IoIosArrowBack } from 'react-icons/io'

import bg from "@/assets/WebsiteLanding/collectionbg.jpg"

import blur from "@/assets/WebsiteLanding/logos/blur2.png"
import opensea from "@/assets/WebsiteLanding/logos/opensea2.png"
import magiceden from "@/assets/WebsiteLanding/logos/magiceden2.png"
import axios from 'axios'


export const NftFetcher = () => {

    interface Obj {
        trait_type: string,
        value: string
    }
    interface Prop {
        owner: string,
        img: string,
        tokenId: number,
        attributeArr: Array<Obj>
    }

    const[tokenId, setTokenId] = useState<number>(0);
    const[index, setIndex] = useState<number>(0);
    // const[image, setImage] = useState<string>("");
    // const[owner, setOwner] = useState<string>("");

    const[data, setData] = useState<Array<Prop>>([]);


    async function contractSetup(){
        const provider = ethers.getDefaultProvider("https://mainnet.infura.io/v3/2d79cc1bf74a4f578c497d810215b1f9");

        try {
          const contract = new ethers.Contract(ContractAdd.contract, abi, provider);
          return contract;
        }
        catch(err){
            console.log(err);
        }
    }

    async function fetchForward(){
        try{
            const contract = await contractSetup();

            for(let i = 0; i<20; i++){
                const tokenId = Math.floor(5699*Math.random());
                const owner = await contract?.ownerOf(tokenId);
                const img = "https://gateway.pinata.cloud/ipfs/QmXcSqfgLDPWaZBxrM3fxWenaE9nTDQGGtC59twFsphf92/"+tokenId+".png"

                const res = await axios.get("https://gateway.pinata.cloud/ipfs/Qmem6x3tee8t1thwaCzcFi5DjaZHkHwJniceizdMTmmVfh/"+tokenId);
                
                
                const attributeArr = res.data.attributes;

                setData(oldArr => [...oldArr, {owner, img, tokenId, attributeArr}])
            }
            
        }
        catch(err){
            console.log(err);
        }
    }


    useEffect(()=>{
        fetchForward();
    },[])

    useEffect(()=>{
        
    },[tokenId])

  return (
    <div className='bg-[#01534D] w-screen flex flex-col py-20 max-xl:gap-4 xl:gap-6 items-center justify-start'>
       <div className='flex'>
        <Image src={guitar} alt="guitar" className='w-16 h-16' />
        <h2 className='text-[56px] text-[#e7b34e] relative mb-10'>Collection</h2>
       </div>
        <div className='w-full'>
            <div className='flex bg-[#d0d570]/20 py-10 relative md:p-4 overflow-hidden rounded-xl border-4 border-[#d0d570]/70 h-fit max-xl:gap-4 xl:gap-6 justify-center items-center w-[95%] mx-auto'>
                
                <div className='absolute h-full w-[150rem] md:w-[90rem] overflow-hidden object-cover'>
                    <Image src={bg} alt='hello' className='w-[150rem] h-full md:w-[90rem] rounded-lg z-[1] brightness-[45%]' />
                </div>

                <button onClick={()=>{if(index==0){setIndex(19)} else{setIndex(prev => prev-1)}}} className="text-5xl max-md:absolute left-0 top-[11.5rem] max-md:bg-black/20 z-10 mx-auto bg-transparent hover:bg-white/30 p-2 rounded-full duration-200" ><IoIosArrowBack/></button>
                {data.map((item, i)=>(
                    <>
                        { i == index && <div className='flex max-md:flex-col relative z-[1] gap-8 w-[100%] px-4'>
                        <div className='overflow-hidden w-[40%] max-md:w-[100%] md:max-w-[35rem] md:max-h-[35rem] md:min-h-[20rem] md:min-w-[20rem]'>
                            <Image width={1080} height={1080} src={item.img} alt="hello" className='border-dashed border-[#e7b34e] border-4 rounded-xl' />
                        </div>
                        <div className='flex-col flex gap-10 md:w-[60%] items-end justify-end h-full'>
                            <div className='flex flex-col items-start md:my-10 max-md:my-5 h-full gap-2 justify-start w-full'>
                                <h2 className='text-4xl md:text-6xl text-nowrap'>Chum #{item.tokenId}</h2>
                                <h3 className='text-[#d0d570] text-xl md:text-2xl text-nowrap' >Owned By: <span className='truncate text-white'>{item.owner.substring(0,5)}...{item.owner.substring(item.owner.length-6, item.owner.length)}</span></h3>
                                
                                <div className='flex flex-wrap gap-2 items-center justify-start max-md:justify-center'>
                                    {
                                        item.attributeArr.map((attr)=>(
                                            <div className='border-[#d0d570] text-center bg-[#000000]/30 w-40 rounded-xl border-2'>
                                                <h3 className='text-[#d0d570] text-md text-bold'>{attr.trait_type}</h3>
                                                <h3 className='text-white text-sm text-semibold'>{attr.value}</h3>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className='flex max-md:flex-col gap-4 items-center w-full h-full flex-wrap mt-10 '>
                                    <a href={"https://blur.io/eth/asset/0xe987e9b07ca431fe0c7e8f431fa4f94ab9ca2423/"+item.tokenId} target='_blank' className='bg-black text-white text-xl w-40 hover:brightness-125 rounded-xl border-2 border-white/30 duration-200 py-2 flex items-center justify-center gap-2' ><Image src={blur} alt="blur" className='w-8' />Blur</a>
                                    <a href={"https://opensea.io/assets/ethereum/0xe987e9b07ca431fe0c7e8f431fa4f94ab9ca2423/"+item.tokenId} target='_blank' className='bg-blue-500 text-white text-xl w-40 hover:brightness-125 rounded-xl border-2 border-blue-400 duration-200 py-2 flex items-center justify-center gap-2' ><Image src={opensea} alt="blur" className='w-8' />Opensea</a>
                                    <a href={"https://magiceden.io/collections/ethereum/0xe987e9b07ca431fe0c7e8f431fa4f94ab9ca2423?evmItemDetailsModal=1~0xe987e9b07ca431fe0c7e8f431fa4f94ab9ca2423~"+item.tokenId} target='_blank' className=' bg-rose-500 text-white text-xl w-40 hover:brightness-125 rounded-xl border-2 border-rose-400 duration-200 py-2 flex items-center justify-center gap-2' ><Image src={magiceden} alt="blur" className='w-8' />Magic Eden</a>
                                </div>
                            </div>
                            </div>
                        </div>}
                    </>
                    
                ))}
                <button onClick={()=>{if(index!=20){setIndex(prev => prev+1)} else{setIndex(0)}}} className="text-5xl bg-transparent max-md:absolute right-0 top-[11.5rem] max-md:bg-black/20 z-10 hover:bg-white/30 mx-auto p-2 rounded-full duration-200 rotate-180" ><IoIosArrowBack/></button>
            </div>

        </div>
        
    </div>
  )
}
