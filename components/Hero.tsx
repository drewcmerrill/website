import { FaFile } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import WordRotate from "./ui/word-rotate";
import { flipWords } from "@/data";

const Hero = () => {
  const longestWord = Math.max(...flipWords.map((word) => word.length));
  const maxWidth = `${longestWord}ch`; // 'ch' unit for character width

  return (
    <div className="pb-20 pt-16 md:pt-20">
      {/* <div>
        <Spotlight className="-top-16 -left-10  h-screen" fill="white" />
        <Spotlight className="top-0 left-0 w-screen h-screen " fill="purple" />
        <Spotlight className="top-10 left-0 w-screen h-screen " fill="blue" />
      </div> */}

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-5xl"
            words="Hey there! My name is Drew"
          />

          <div className="text-center tracking-wider mb-4 text-md sm:text-2xl md:text-3xl flex items-center font-semibold md:font-normal">
            And I like&nbsp;
            <div
              className="flex justify-start"
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

          <a
            href="https://drive.google.com/file/d/13K7De9k_YftxfIt53-BeQlauhNaorLzS/view"
            target="_blank"
          >
            <MagicButton title="My Resume" icon={<FaFile />} position="right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
