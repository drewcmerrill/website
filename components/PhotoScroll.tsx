"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { ScrollPhotos } from "@/data";

export function PhotoScroll() {
  return (
    <div className="mt-20 h-[40rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="text-center heading tracking-wider md:mb-4  flex items-center ">
        Take a glimpse into my life!
      </div>
      <InfiniteMovingCards
        items={ScrollPhotos}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
