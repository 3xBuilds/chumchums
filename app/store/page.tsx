'use client'
import { getPrintfulProducts } from "@/components/Store/getPrintfulProducts"
import axios from "axios";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";

import bg from "@/assets/WebsiteLanding/collectionbg.jpg"

export default function Home(){

    const [products, setProducts] = useState<any>([])

    async function getItems(){

        const res = await axios.get("/api/printFulProducts")
        console.log(res.data.prods);
        setProducts(res.data.prods)
    }

    useEffect(()=>{getItems()},[])

    return(
        <div className=" w-screen h-screen p-20 max-md:px-4 max-md:py-10 flex flex-col items-center justify-start">
            
            <div className="w-screen h-screen fixed top-0 overflow-hidden -z-[10]">
                <Image src={bg} className="object-cover w-full h-full brightness-[0.2]" width={200} height={200} alt="logo"/>
            </div>
            
            <h2 className="text-xl text-[#d4d87f]">Welcome to</h2>
            <h2 className="text-3xl">The Chum Store!</h2>

            <h3 className="text-xl text-left mt-10 w-full text-[#d4d87f] mb-5">Our Products</h3>
            {
                products.length === 0 ? <h3 className="w-full p-4 rounded-lg bg-black/20 text-center">Loading...</h3> : 
                <div className="w-full flex gap-4 flex-wrap">
                    {products.map((product:any)=>(
                        <div className="bg-orange-500 p-4 rounded-xl border-4 border-black flex flex-col items-center justify-center">
                            <Image className="w-60 h-60 rounded-xl border-4 border-black" width={1080} height={1080} src={product.thumbnail_url} alt={product.name}/>
                            <h3 className="text-center text-xl mt-4">{product.name}</h3>
                            {/* <div>
                                {product.variants.map((variant:any)=>(
                                    <div>
                                        <h4>{variant.name}</h4>
                                        <p>{variant.price}</p>
                                        <p>{variant.in_stock ? "In Stock" : "Out of Stock"}</p>
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    ))}
                </div>
            }

        </div>
    )
}