import React from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <div>
      <button
        className="inline-flex p-[3px] relative h-12 w-full md:w-60 md:mt-10"
        onClick={handleClick}
      >
        <div
          className={` border-2 border-black dark:border-white border-dashed inline-flex px-8 py-2 h-full w-full cursor-pointer bg-white items-center justify-center gap-2 text-md font-medium  dark:bg-[#161A31]  relative  dark:text-white hover:bg-[#5AB0F1] dark:hover:bg-transparent ${otherClasses}`}
        >
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
          {/* <Icon className="absolute h-6 w-6 -top-[13px] -left-[13px] dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-[13px] -left-[13px] dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-[13px] -right-[13px] dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-[13px] -right-[13px] dark:text-white text-black" /> */}
        </div>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default MagicButton;
