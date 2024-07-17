import Image from "next/image";
import { WalletConnectButton } from "@/components/buttons/WalletConnectButton";
import { FootComp } from "@/components/UI/footComp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <WalletConnectButton/>
      

      <FootComp/>
    </main>
  );
}
