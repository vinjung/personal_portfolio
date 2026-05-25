import Navbar from "@/components/Navbar";
import WhoAmI from "@/components/sections/WhoAmI";
import KeyProject1 from "@/components/sections/KeyProject1";
import KeyProject2 from "@/components/sections/KeyProject2";
import KeyProject3 from "@/components/sections/KeyProject3";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <WhoAmI />
        <KeyProject1 />
        <KeyProject2 />
        <KeyProject3 />
      </main>
    </>
  );
}
