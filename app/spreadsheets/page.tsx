import { FloatingNav } from "@/components/ui/FloatingNav";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { navItems } from "@/data";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="bg-grid-black/[0.03] dark:bg-grid-white/[0.1] relative dark:bg-black-100 flex  items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full flex-col">
        <FloatingNav navItems={navItems} />
        <div className="w-full flex flex-col items-center mt-32 mb-10">
          <TextGenerateEffect
            className="text-center text-3xl md:text-5xl lg:text-5xl"
            words="I. Love. Spreadsheets."
          />
          <div className="text-center tracking-wider my-4 text-xl md:text-3xl flex items-center font-medium">
            Every year since 2021 I&apos;ve had what I call my &quot;Spreadsheet
            Goal&quot;. I just set a goal for the year and I track it with a
            spreadsheet!
          </div>
        </div>
        <div className="w-full  flex flex-col lg:flex-row">
          <div className="flex-1  p-7 mb-10 lg:mb-0">
            <img
              className="aspect-auto object-cover w-full max-h-[700px] shadow-xl border-2 md:border-[3px] border-black border-dashed"
              src="/Bookstack.webp"
              alt="Bookstack"
            />
          </div>
          <div className="flex-1  p-7 flex-col flex relative">
            <img
              className="absolute h-44 sm:h-56 md:h-60 -top-12 md:-top-16 left-56 md:left-64"
              src="/ClickMe.svg"
              alt="ClickMe"
            />
            <a
              href="https://docs.google.com/spreadsheets/d/1mp2_U62ixWZYZNB4-ayK6o2MwtrinNz9eijT3FN1KiE/edit?usp=sharing"
              target="_blank"
              className="text-5xl  text-[#5AB0F1] mb-5 hover:underline"
            >
              2021 Books
            </a>
            <p className="text-2xl md:text-3xl mb-5">
              In 2021, my goal was to read my height in books. At the end of the
              year, I wanted to stack all my books up and have the pile be as
              tall as I was.
            </p>

            <p className="text-2xl md:text-3xl">Notable Stats</p>

            <ul className="text-2xl md:text-3xl list-disc pl-10">
              <li>Total Books: 60</li>
              <li>Total Height: 72.25&quot;</li>
              <li>Total Pages: 27,052</li>
              <li>Average book length: 451 pages</li>
              <li>Average pages read per day: 74 pages</li>
              <li>Average time to finish a book: 6 days</li>
            </ul>
          </div>
        </div>
        <div className="w-full  flex flex-col-reverse lg:flex-row">
          <div className="flex-1  p-7 flex-col flex ">
            <a
              href="https://docs.google.com/spreadsheets/d/1YSnqbUjtFJLr0lWR7Wdcvi1xLmJmCP_zyN4x1TTiEfI/edit?usp=sharing"
              target="_blank"
              className="text-5xl  text-[#5AB0F1] mb-5 hover:underline"
            >
              2022 Card Workouts
            </a>
            <p className="text-2xl md:text-3xl mb-5">
              In 2022 me and my roommate, Matan, did the &quot;Card
              Workout&quot;. I made a spreadsheet that generates 4 different
              exercises and assigns it to a suit in a deck of cards. The number
              on the card designated how many reps we did. And we had to do that
              Every. Single. Day. For a whole year!!! It was hell. If we missed
              a day we had to put $10 into a communal pot which we used to fund
              our scuba trip at the end of the year.
            </p>
          </div>
          <div className="flex-1  p-7">
            <img
              className="aspect-auto object-cover w-full max-h-[700px] shadow-xl border-2 md:border-[3px] border-black border-dashed"
              src="/CardWorkout.webp"
              alt="CardWorkout"
            />
          </div>
        </div>
        <div className="w-full  flex flex-col lg:flex-row">
          <div className="flex-1  p-7">
            <img
              className="aspect-auto object-cover w-full max-h-[700px] shadow-xl border-2 md:border-[3px] border-black border-dashed"
              src="/Hour.webp"
              alt="Hour"
            />
          </div>
          <div className="flex-1  p-7 flex-col flex ">
            <a
              href="https://docs.google.com/spreadsheets/d/1nOK9gC_wGT_ZqvLGJOuL6yu3UsUGcp77bhkASDDZMzE/edit?usp=sharing"
              target="_blank"
              className="text-5xl  text-[#5AB0F1] mb-5 hover:underline"
            >
              2023 Hour of Productivity
            </a>
            <p className="text-2xl md:text-3xl mb-5">
              In 2023 I wanted to be more productive and learn some new skills.
              So I tasked myself with learning for an hour every day, but the
              caveat was that the day of the week dictated what I learned that
              day.
            </p>

            <ul className="text-2xl md:text-3xl list-disc pl-10">
              <li>Sunday: Read a non-fiction book</li>
              <li>Monday: Data Structures and Algorithms</li>
              <li>Tuesday: Math</li>
              <li>Wednesday: Web Development</li>
              <li>Thursday: Music Theory</li>
              <li>Friday: Drawing</li>
              <li>Saturday: Work on my 9000 piece puzzle</li>
            </ul>
          </div>
        </div>
        <div className="w-full  flex flex-col-reverse lg:flex-row">
          <div className="flex-1  p-7 flex-col flex ">
            <a
              href="https://docs.google.com/spreadsheets/d/1WqOmMvtLO_4EMo5jXOetI9JYMYkDpDQciW13Hzkpp2E/edit?usp=sharing"
              target="_blank"
              className="text-5xl  text-[#5AB0F1] mb-5 hover:underline"
            >
              2024 NYT Games
            </a>
            <p className="text-2xl md:text-3xl mb-5">
              I decided to make this year&apos;s spreadsheet a little more fun.
              I LOVE doing the NYT mini crossword. So I decided to keep track of
              my solve times. They also offer some other games like Wordle,
              Connections, and Spelling Bee that I track as well.
            </p>
            <p className="text-2xl md:text-3xl ">
              In order to achieve a coveted Perfect Day I must:
            </p>
            <ul className="text-2xl md:text-3xl list-disc pl-10">
              <li>
                Get first place on my Mini leaderboard (Frances, Molly, and
                Annika make this very difficult)
              </li>
              <li>Find the pangram in Spelling Bee</li>
              <li>Solve Connections flawlessly</li>
              <li>Find the Wordle in 3 attempts or less</li>
            </ul>
          </div>
          <div className="flex-1  p-7">
            <img
              className="aspect-auto object-cover w-full max-h-[700px] shadow-xl border-2 md:border-[3px] border-black border-dashed"
              src="/Connections.webp"
              alt="Connections"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
