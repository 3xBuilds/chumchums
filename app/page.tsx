import Image from "next/image";

import { FootComp } from "@/components/WebsiteLanding/UI/footComp";
import { Navbar } from "@/components/WebsiteLanding/UI/navbar";
import { Landing } from "@/components/WebsiteLanding/UI/landing";
import { Team } from "@/components/WebsiteLanding/UI/team";
import { Socials } from "@/components/WebsiteLanding/UI/socials";
import { NftFetcher } from "@/components/WebsiteLanding/UI/nftFetcher";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-hidden flex-col items-center justify-between bg-white">
      <Navbar/>
      <Landing/>
      <NftFetcher/>
      <Team/>
      <Socials/>
      <FootComp/>
    </main>
  );
}
