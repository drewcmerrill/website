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
          <div className="flex">
            <TextGenerateEffect
              className="text-center text-4xl md:text-5xl lg:text-5xl"
              words="Wanna go on a date?"
            />
          </div>

          <div className="text-center tracking-wider my-4 text-xl md:text-3xl flex items-center font-medium">
            Hey, I&apos;m Drew. Thank you for considering me for this postion,
            here&apos;s why I would make a great boyfriend.
          </div>
        </div>
        <div className="w-full  flex flex-col lg:flex-row">
          <div className="flex-1  p-7">
            <img
              className="aspect-auto object-cover w-full max-h-[700px] shadow-2xl "
              src="/Fountain.webp"
              alt="Fountain"
            />
          </div>
          <div className="flex-1  p-7 flex-col flex ">
            <a className="text-5xl  text-[#5AB0F1] mb-5">
              Wicked Smart (not in an autistic way)
            </a>
            <p className="text-2xl md:text-3xl mb-5">
              First off, I can design websites. I&apos;ll admit it, that&apos;s
              cool af.
            </p>

            <p className="text-2xl md:text-3xl mb-5">
              I have a Bachelors AND Master&apos;s degree in Computer Science.
              They don&apos;t just hand those out. You have to pay a lot of
              money and put in the bare minimum effort.
            </p>
            <p className="text-2xl md:text-3xl mb-5">
              I&apos;m pretty good at math. If you tell me any date I can tell
              you what day of the week it was. And I&apos;m not just talking
              2024, I can do multiple CENTURIES. Want to know when the founding
              fathers signed the Declaration of Independence? I got you, it was
              a Thursday. (This is where people start to think I&apos;m
              autistic)
            </p>
          </div>
        </div>
        <div className="w-full  flex flex-col-reverse lg:flex-row">
          <div className="flex-1  p-7 flex-col flex ">
            <a className="text-5xl  text-[#5AB0F1] mb-5">Athlete</a>
            <p className="text-2xl md:text-3xl mb-5">
              Now, I know what you&apos;re thinking. &quot;What a nerd, I bet
              he&apos;s not moderately decent at a handful of sports.&quot;
              WRONG
            </p>

            <p className="text-2xl md:text-3xl mb-5">
              Try me dude. Pickleball? Rock Climbing? Spikeball? Volleyball??
              I&apos;ll beat you every time.
            </p>
            <p className="text-2xl md:text-3xl mb-5">
              But if you can instead beat ME, I just might fall in love.
            </p>
          </div>
          <div className="flex-1  p-7">
            <img
              className="aspect-auto object-cover w-full max-h-[700px] shadow-2xl "
              src="/Athlete.webp"
              alt="Athlete"
            />
          </div>
        </div>
        <div className="w-full  flex flex-col lg:flex-row">
          <div className="flex-1  p-7">
            <img
              className="aspect-auto object-cover w-full max-h-[700px] shadow-2xl "
              src="/Friends.webp"
              alt="Friends"
            />
          </div>
          <div className="flex-1  p-7 flex-col flex ">
            <a className="text-5xl  text-[#5AB0F1] mb-5">Friends</a>
            <p className="text-2xl md:text-3xl mb-5">I have them!</p>

            <p className="text-2xl md:text-3xl mb-5">
              Another point against autism.
            </p>
          </div>
        </div>
        <div className="w-full  flex flex-col-reverse lg:flex-row">
          <div className="flex-1  p-7 flex-col flex ">
            <a className="text-5xl  text-[#5AB0F1] mb-5">Hobbies</a>
            <p className="text-2xl md:text-3xl mb-5">
              &quot;Drew&quot;, you ask, &quot;what do you like to do in your
              freetime?&quot;
            </p>

            <p className="text-2xl md:text-3xl mb-5">
              Thank you for asking! Me and my friends play a lot of volleyball
              (currently looking for a 2&apos;s partner...)
            </p>
            <p className="text-2xl md:text-3xl mb-5">
              But I also love to read{" "}
              <a
                href="/spreadsheets"
                target="_blank"
                className="text-[#5AB0F1] underline"
              >
                see my 2021 reading goal
              </a>
              , do the New York Times Crossword, play board games, workout, rock
              climb, hike, and go scuba diving.
            </p>
          </div>
          <div className="flex-1  p-7">
            <img
              className="aspect-auto object-cover w-full max-h-[700px] shadow-2xl "
              src="/Hobbies.webp"
              alt="Hobbies"
            />
          </div>
        </div>
        <div className="w-full  flex flex-col lg:flex-row">
          <div className="flex-1  p-7">
            <img
              className="aspect-auto object-cover w-full max-h-[700px] shadow-2xl "
              src="/Volunteer.webp"
              alt="Volunteer"
            />
          </div>
          <div className="flex-1  p-7 flex-col flex ">
            <a className="text-5xl  text-[#5AB0F1] mb-5">Volunteering</a>
            <p className="text-2xl md:text-3xl mb-5">
              Every weekend I wake up at 6am so I can go volunteer at an animal
              refuge. And it&apos;s not even court mandated! I guess I&apos;m
              just really kindhearted, noble, caring, etc. Because isn&apos;t
              that what volunteering is about? Exploiting it for your own
              personal gain?
            </p>

            <p className="text-2xl md:text-3xl mb-5">
              The place I volunteer at is called{" "}
              <a
                href="https://libertywildlife.org/about-us/who-we-are/"
                className="text-[#5AB0F1] hover:underline"
                target="_blank"
              >
                {" "}
                Liberty Wildlife
              </a>{" "}
              and it&apos;s really cool and you should check it out.
            </p>
            <p className="text-2xl md:text-3xl mb-5">
              I also coached a little league soccer team for one season. I lead
              those little gremlins to the championship where we lost 11-1
            </p>
            <img
              className="aspect-auto object-cover w-full max-h-[700px] md:max-h-[300px] shadow-2xl "
              src="/Soccer.webp"
              alt="Soccer"
            />
          </div>
        </div>
        <div className="w-full  flex flex-col-reverse lg:flex-row">
          <div className="flex-1  p-7 flex-col flex ">
            <a className="text-5xl  text-[#5AB0F1] mb-5">In conclusion...</a>
            <p className="text-2xl md:text-3xl mb-5">
              Oh, I forgot to mention that I&apos;m also really humble.
            </p>

            <p className="text-2xl md:text-3xl mb-5">
              Thank you for your time and I look forward to hearing back from
              you.
            </p>
            <div className="flex justify-center">
              <a href="https://www.instagram.com/drewcmerrill/" target="_blank">
                <MagicButton
                  title="My Instagram"
                  icon={<FaInstagram />}
                  position="right"
                />
              </a>
            </div>
          </div>
          <div className="flex-1  p-7">
            <img
              className="aspect-auto object-cover w-full max-h-[700px] shadow-2xl "
              src="/LilOlMe.JPG"
              alt="LilOlMe"
            />
          </div>
        </div>
        <PhotoScrollDating />
      </div>
    </main>
  );
};

export default page;