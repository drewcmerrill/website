import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const About = () => {
  return (
    <section id="about" className=" w-full flex-col">
      <div className="w-full flex flex-col items-center mt-32 mb-10">
        <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-5xl"
          words="Thanks for checking out my website!"
        />
        <div className="text-center tracking-wider my-4 text-xl md:text-3xl flex items-center font-medium">
          My name is Drew Merrill and I&apos;m a software developer! I made this
          website to teach myself web development and to have a public way to
          document my life and the fun projects I do.
        </div>
      </div>
      <div className="w-full  flex flex-col lg:flex-row">
        <div className="flex-1  p-7">
          <img
            className="aspect-auto object-cover w-full max-h-[600px] shadow-xl border-2 md:border-[3px] border-black border-dashed"
            src="/Fountain.webp"
            alt="Fountain"
          />
        </div>
        <div className="flex-1  p-7 flex-col flex ">
          <p className="text-2xl md:text-3xl mb-5">
            I graduated Summa Cum Laude from Arizona State University with a
            degree in Computer Science and a 4.0 GPA.
          </p>
          <p className="text-2xl md:text-3xl">
            And then I thought &quot;Hey, that was fun&quot; and went back to
            ASU and got my Masters Degree in Computer Science with a focus in
            Big Data Systems.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col-reverse lg:flex-row">
        <div className="flex-1  p-7 flex-col">
          <p className="text-2xl md:text-3xl mb-5">
            When I&apos;m not working on coding projects, I can usually be found
            reading, playing a board game, volleyball, or piano, woodworking,
            rock climbing, making a spreadsheet, or doing the New York Times
            crossword.
          </p>
        </div>
        <div className="flex-1  p-7 ">
          <img
            className="aspect-auto object-cover w-full max-h-[600px] shadow-xl border-2 md:border-[3px]  border-black border-dashed"
            src="/PigeonKing.webp"
            alt="PigeonKing"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
