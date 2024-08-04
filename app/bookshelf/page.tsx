import { FloatingNav } from "@/components/ui/FloatingNav";
import Shelf from "@/components/ui/Shelf";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { books, navItems } from "@/data";
import React from "react";

const page = () => {
  return (
    <main className="bg-grid-black/[0.03] dark:bg-grid-white/[0.1] relative dark:bg-black-100 flex  items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full flex-col">
        <FloatingNav navItems={navItems} />
        <div className="w-full flex flex-col items-center mt-32 mb-10">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-5xl"
            words="My Bookshelf"
          />
          <div className="text-center tracking-wider mb-4 text-md sm:text-xl md:text-3xl flex items-center font-semibold md:font-normal">
            I thought it would be neat to have a unique way of tracking all the
            books I own. I&apos;ve hand-drawn each cover to scale. Only about
            150 to go...
          </div>
        </div>
        <div className="w-full  flex-col">
          <Shelf books={books}></Shelf>
        </div>
      </div>
    </main>
  );
};

export default page;
