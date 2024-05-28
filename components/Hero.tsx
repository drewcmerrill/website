import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FloatingNav } from "./ui/FloatingNav";
import { ModeToggle } from "./ui/ModeToggle";
import WordRotate from "./ui/word-rotate";
import { flipWords } from "@/data";

const Hero = () => {
  const longestWord = Math.max(...flipWords.map((word) => word.length));
  const maxWidth = `${longestWord - 1}ch`; // 'ch' unit for character width

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-16 -left-10  h-screen" fill="white" />
        <Spotlight className="top-0 left-0 w-screen h-screen " fill="purple" />
        <Spotlight className="top-10 left-0 w-screen h-screen " fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.06] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-5xl"
            words="Hey there! My name is Drew"
          />

          <div className="text-center tracking-wider mb-4 text-md sm:text-2xl md:text-3xl flex items-center font-semibold md:font-normal">
            And I like&nbsp;
            <div
              className="flex justify-start border-b-1 md:border-b-2 border-black dark:border-white"
              style={{
                width: maxWidth,
              }}
            >
              <WordRotate
                words={flipWords}
                // className="text-[#6366f1] dark:text-purple"
              />
            </div>
          </div>

          <a href="/dashboard">
            <MagicButton
              title="See My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
