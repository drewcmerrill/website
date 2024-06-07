"use client";

import React, { useState } from "react";

import { cn } from "@/utils/cn";

import animationData from "@/data/confetti.json";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  link,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  link: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "drewcmerrill@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative border-2 md:border-[3px]  border-black border-dashed mb-10 cursor-pointer group/bento shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="w-full h-full absolute">
        {img && (
          <Link key={`link=${id}`} href={link}>
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "object-cover object-center w-full h-full"
              )}
            />
          </Link>
        )}
      </div>
      {id === 1 && (
        <div className="absolute -top-40 md:-top-56 lg:-top-64  md:left-[5%] lg:left-[15%] z-10">
          <img src="/ThatsMe.svg" className="h-32 md:h-48 lg:h-56"></img>
        </div>
      )}
      {id === 2 && (
        <div className="absolute -top-10 -left-5 md:-left-10 z-10">
          <img src="/PostIt.svg" className="h-28 lg:h-40 -rotate-[20deg]"></img>
        </div>
      )}
      {id === 3 && (
        <div className="absolute -bottom-0 right-16 z-10">
          <img src="/PostIt2.svg" className="h-28 lg:h-40 "></img>
        </div>
      )}
    </div>
  );
};
