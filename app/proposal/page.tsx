"use client";

import { FloatingNav } from "@/components/ui/FloatingNav";
import MagicButton from "@/components/ui/MagicButton";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { navItems } from "@/data";
import Link from "next/link";
import React, { useState } from "react";
import { FaHeart, FaInstagram } from "react-icons/fa";
import Video from "next-video";
import { PhotoScrollDating } from "@/components/PhotoScrollDating";
import { CanvasRevealEffectDemo } from "@/components/CanvasRevealEffectDemo";

const Page = () => {
  const [overlayVisibleYes, setOverlayVisibleYes] = useState(true);

  const handleOverlayClickYes = () => {
    setOverlayVisibleYes(false);
  };

  const [overlayVisibleNo, setOverlayVisibleNo] = useState(true);

  const handleOverlayClickNo = () => {
    setOverlayVisibleNo(false);
  };

  return (
    <main className="bg-grid-black/[0.03] dark:bg-grid-white/[0.1] relative dark:bg-black-100 flex items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full flex-col">
        <FloatingNav navItems={navItems} />
        <div className="w-full flex flex-col items-center mt-32 mb-10">
          <div className="flex">
            <TextGenerateEffect
              className="text-center text-4xl md:text-5xl lg:text-5xl"
              words="Marry me Brynn?"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center lg:flex-row gap-6 lg:justify-center mb-10">
          <div className="relative border-black border-2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
            <img src="/Rejection.webp" alt="" className="h-[100%] object-fit" />
            {overlayVisibleNo && (
              <div
                className="absolute inset-0 bg-white  flex items-center justify-center cursor-pointer"
                onClick={handleOverlayClickNo}
              >
                <span className="text-black text-xl">
                  Click to see me if you say no
                </span>
              </div>
            )}
          </div>
          <div className="relative border-black border-2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
            <img
              src="/Acceptance.webp"
              alt=""
              className="h-[100%] object-fit]"
            />
            {overlayVisibleYes && (
              <div
                className="absolute inset-0 bg-white flex items-center justify-center cursor-pointer"
                onClick={handleOverlayClickYes}
              >
                <span className="text-black text-xl">
                  Click to see us if you say yes
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
