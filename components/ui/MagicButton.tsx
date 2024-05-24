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
        className="inline-flex p-[3px] relative h-12 w-full md:w-60 md:mt-10 overflow-hidden"
        onClick={handleClick}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple rounded-lg" />
        <div
          className={`inline-flex px-8 py-2 h-full w-full cursor-pointer items-center justify-center gap-2 text-sm font-medium bg-white dark:bg-[#161A31] rounded-[6px] relative group transition duration-200 dark:text-white hover:bg-transparent ${otherClasses}`}
        >
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </div>
      </button>
    </div>
  );
};

export default MagicButton;
