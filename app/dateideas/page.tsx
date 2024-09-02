import { FloatingNav } from "@/components/ui/FloatingNav";
import MagicButton from "@/components/ui/MagicButton";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { navItems } from "@/data";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { PhotoScrollDating } from "@/components/PhotoScrollDating";

const page = () => {
  return (
    <main className="bg-grid-black/[0.03] dark:bg-grid-white/[0.1] relative dark:bg-black-100 flex  items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full flex-col">
        <FloatingNav navItems={navItems} />
        <div className="w-full flex flex-col items-center mt-32 mb-10">
          {/* <div className="flex">
            <TextGenerateEffect
              className="text-center text-4xl md:text-5xl lg:text-5xl"
              words="Wanna go on a date?"
            />
          </div> */}
          {/* dinner, drinks, hike, picnic, wildcard */}

          <div className="text-center tracking-wider my-4 text-xl md:text-3xl flex items-center font-medium">
            Hi Delani, I&apos;m so excited to have made it to the second round of interviews. Here are some ideas for our first date
          </div>
        </div>
        <div className="w-full  flex flex-col lg:flex-row">
          <div className="flex-1  p-7">
            <img
              className="aspect-auto object-cover w-full max-h-[700px] shadow-2xl "
              src="/Dinner.webp"
              alt="Fountain"
            />
          </div>
          <div className="flex-1  p-7 flex-col flex ">
            <a className="text-5xl  text-[#5AB0F1] mb-5">
              Dinner
            </a>
            <p className="text-2xl md:text-3xl">Pros:</p>
            <ul className="text-2xl md:text-3xl list-disc pl-10">
              <li>A classic</li>
              <li>We can get to know each other</li>
              <li>We get to eat some bangin food</li>
            </ul>
            <p className="text-2xl md:text-3xl">Cons:</p>
            <ul className="text-2xl md:text-3xl list-disc pl-10">
              <li>Not very creative on my part</li>
            </ul>
          </div>
        </div>
        <div className="w-full  flex flex-col-reverse lg:flex-row">
          <div className="flex-1  p-7 flex-col flex ">
            <a className="text-5xl  text-[#5AB0F1] mb-5">Drinks</a>
            <p className="text-2xl md:text-3xl">Pros:</p>
            <ul className="text-2xl md:text-3xl list-disc pl-10">
              <li>We can still get to know each other</li>
              <li>Sometimes it&apos;s fun to get a little tipsy on the first date to break the ice</li>
            </ul>
            <p className="text-2xl md:text-3xl">Cons:</p>
            <ul className="text-2xl md:text-3xl list-disc pl-10">
              <li>Still, not very creative</li>
            </ul>
          </div>
          <div className="flex-1  p-7">
            <img
              className="aspect-auto object-cover w-full max-h-[700px] shadow-2xl "
              src="/Drinks.jpg"
              alt="Athlete"
            />
          </div>
        </div>
        <div className="w-full  flex flex-col lg:flex-row">
          <div className="flex-1  p-7">
            <img
              className="aspect-auto object-cover w-full max-h-[700px] shadow-2xl "
              src="/Piestewa.jpg"
              alt="Friends"
            />
          </div>
          <div className="flex-1  p-7 flex-col flex ">
            <a className="text-5xl  text-[#5AB0F1] mb-5">Sunset Hike</a>
            <p className="text-2xl md:text-3xl">Pros:</p>
            <ul className="text-2xl md:text-3xl list-disc pl-10">
              <li>Good exercise</li>
              <li>Piestewa is beautiful at sunset</li>
              <li>Can still talk if I&apos;m not gasping</li>
            </ul>
            <p className="text-2xl md:text-3xl">Cons:</p>
            <ul className="text-2xl md:text-3xl list-disc pl-10">
              <li>It&apos;s hot as fuck outside. But are we really going to let the sun dictate how we live our lives?</li>
            </ul>
          </div>
        </div>
        <div className="w-full  flex flex-col-reverse lg:flex-row">
          <div className="flex-1  p-7 flex-col flex ">
            <a className="text-5xl  text-[#5AB0F1] mb-5">Sunset Picnic</a>
            <p className="text-2xl md:text-3xl">Pros:</p>
            <ul className="text-2xl md:text-3xl list-disc pl-10">
              <li>Cute as hell</li>
              <li>Still get to eat AND drink</li>
              <li>We can listen to music while I beat you in card games</li>
            </ul>
            <p className="text-2xl md:text-3xl">Cons:</p>
            <ul className="text-2xl md:text-3xl list-disc pl-10">
              <li>See cons of the sunset hike</li>
            </ul>
          </div>
          <div className="flex-1  p-7">
            <img
              className="aspect-auto object-cover w-full max-h-[700px] shadow-2xl "
              src="/Picnic.jpg"
              alt="Hobbies"
            />
          </div>
        </div>
        <div className="w-full  flex flex-col lg:flex-row">
          <div className="flex-1  p-7">
            <img
              className="aspect-auto object-cover w-full max-h-[700px] shadow-2xl "
              src="/robbery.jpeg"
              alt="Volunteer"
            />
          </div>
          <div className="flex-1  p-7 flex-col flex ">
            <a className="text-5xl  text-[#5AB0F1] mb-5">Bank Robbery</a>
            <p className="text-2xl md:text-3xl">Pros:</p>
            <ul className="text-2xl md:text-3xl list-disc pl-10">
              <li>We&apos;ll be rich</li>
              <li>Exhilarating</li>
              <li>Great teambuilding exercise</li>
              <li>Quick to learn if one of us has commitment issues</li>
              <li>Get to wear cool outfits</li>
            </ul>
            <p className="text-2xl md:text-3xl">Cons:</p>
            <ul className="text-2xl md:text-3xl list-disc pl-10">
              <li>None that I can think of???</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;