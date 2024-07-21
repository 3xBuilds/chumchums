import Image from "next/image";
import { Navbar } from "@/components/StickerGenerator/UI/navbar";
import { StickerGen } from "@/components/StickerGenerator/UI/stickerGen";
import StickerGenTest from "@/components/StickerGenerator/UI/stickerGenTest";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-y-hidden items-center justify-start bg-[#1E1E1E]">
        <Navbar/>
        {/* <StickerGen/> */}
        <StickerGenTest/>
    </main>
  );
}
