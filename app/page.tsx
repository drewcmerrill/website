import About from "@/components/About";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { PhotoScroll } from "@/components/PhotoScroll";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className=" bg-grid-black/[0.05] dark:bg-grid-white/[0.15] relative dark:bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <About />
        <PhotoScroll />
        <Footer />
      </div>
    </main>
  );
}
