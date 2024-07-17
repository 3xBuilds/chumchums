import Image from "next/image";

import { FootComp } from "@/components/UI/footComp";
import { Navbar } from "@/components/UI/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Navbar/>
      {/* <FootComp/> */}
    </main>
  );
}
