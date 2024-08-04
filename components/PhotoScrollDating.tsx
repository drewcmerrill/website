"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { BoyfriendPhotos } from "@/data";

export function PhotoScrollDating() {
  return (
    <div className="mt-0 h-[40rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={BoyfriendPhotos}
        direction="right"
        speed="fast"
      />
    </div>
  );
}
