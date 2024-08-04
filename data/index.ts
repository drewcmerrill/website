import { link } from "fs";
import { title } from "process";

export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/#about" },
  { name: "Spreadsheets", link: "/spreadsheets" },
  { name: "Bookshelf", link: "/bookshelf" },
];

export const gridItems = [
  {
    id: 1,
    title: "Lil' Ol' Me",
    description: "",
    className: "lg:col-span-3 md:col-span-3 row-span-4 lg:min-h-[60vh] min-h-[40vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/LilOlMe.JPG",
    spareImg: "",
    link: "/#about"
  },
  {
    id: 2,
    title: "Yearly Spreadsheet Goals",
    description: "",
    className: "lg:col-span-2 md:col-span-3 row-span-2 min-h-[20vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/Spreadsheets.jpg",
    spareImg: "",
    link: "/spreadsheets"
  },
  {
    id: 3,
    title: "My Bookshelf",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 row-span-2 min-h-[20vh]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/Bookshelf.jpg",
    spareImg: "",
    link: "/bookshelf"
  },

];

export const standardHeight = 325;

export const books = [

  {
    title: "New Spring",
    img: "/The_Wheel_of_Time-15.webp",
    heightMultiplier: 1,
  },
  {
    title: "New Spring",
    img: "/The_Wheel_of_Time-14.webp",
    heightMultiplier: 1,
  },
  {
    title: "New Spring",
    img: "/The_Wheel_of_Time-13.webp",
    heightMultiplier: 1,
  },
  {
    title: "New Spring",
    img: "/The_Wheel_of_Time-12.webp",
    heightMultiplier: 1,
  },
  {
    title: "New Spring",
    img: "/The_Wheel_of_Time-11.webp",
    heightMultiplier: 1,
  },
  {
    title: "New Spring",
    img: "/The_Wheel_of_Time-10.webp",
    heightMultiplier: 1,
  },
  {
    title: "New Spring",
    img: "/The_Wheel_of_Time-9.webp",
    heightMultiplier: 1,
  },
  {
    title: "New Spring",
    img: "/The_Wheel_of_Time-8.webp",
    heightMultiplier: 1,
  },
  {
    title: "New Spring",
    img: "/The_Wheel_of_Time-7.webp",
    heightMultiplier: 1,
  },
  {
    title: "New Spring",
    img: "/The_Wheel_of_Time-6.webp",
    heightMultiplier: 1,
  },
  {
    title: "New Spring",
    img: "/The_Wheel_of_Time-5.webp",
    heightMultiplier: 1,
  },
  {
    title: "New Spring",
    img: "/The_Wheel_of_Time-4.webp",
    heightMultiplier: 1,
  },
  {
    title: "New Spring",
    img: "/The_Wheel_of_Time-3.webp",
    heightMultiplier: 1,
  },
  {
    title: "New Spring",
    img: "/The_Wheel_of_Time-2.webp",
    heightMultiplier: 1,
  },
  {
    title: "New Spring",
    img: "/The_Wheel_of_Time-1.webp",
    heightMultiplier: 1,
  },
  {
    title: "The Lord of the Rings",
    img: "/The_Lord_Of_The_Rings.webp",
    heightMultiplier: .86,
  },
  {
    title: "H is for Hawk",
    img: "/H_Is_For_Hawk.webp",
    heightMultiplier: .86,
  },
  {
    title: "Dune",
    img: "/Dune.webp",
    heightMultiplier: .86,
  },
  {
    title: "Les Miserables",
    img: "/Les_Miserables.webp",
    heightMultiplier: .96,
  },
  {
    title: "Cryptonomicon",
    img: "/Cryptonomicon.webp",
    heightMultiplier: .84,
  },
  {
    title: "SPQR",
    img: "/SPQR.webp",
    heightMultiplier: .86,
  },
  {
    title: "Red Rising",
    img: "/Red_Rising.webp",
    heightMultiplier: .86,
  },
  {
    title: "Golden Son",
    img: "/Golden_Son.webp",
    heightMultiplier: .86,
  },

  {
    title: "This Book is Full of Spiders",
    img: "/This_Book_Is_Full_Of_Spiders.webp",
    heightMultiplier: .86,
  },
  {
    title: "Fire & Blood",
    img: "/Fire_&_Blood.webp",
    heightMultiplier: 1,
  },
  {
    title: "A Knight of the Seven Kingdoms",
    img: "/A_knight_of_The_seven_Kingdoms.webp",
    heightMultiplier: 1,
  },
  {
    title: "The Goblin Emperor",
    img: "/The_Goblin_Emperor.webp",
    heightMultiplier: .86,
  },
  {
    title: "King of the Wyld",
    img: "/Kings_Of_The_Wyld.webp",
    heightMultiplier: .86,
  },
  {
    title: "Philadelphia Chickens",
    img: "/Philadelphia_Chickens.webp",
    heightMultiplier: .86,
  },
  {
    title: "Foundation",
    img: "/Foundation.webp",
    heightMultiplier: .86,
  },
  {
    title: "The Catcher in the Rye",
    img: "/The_Catcher_in_the_Rye.webp",
    heightMultiplier: .84,
  },
  {
    title: "Justice",
    img: "/Justice.webp",
    heightMultiplier: .86,
  },
  {
    title: "Things to Make and Do in the Fourth Dimension",
    img: "/Things_To_Make_And_Do_In_The_Fourth_Dimension.webp",
    heightMultiplier: .86,
  },
  {
    title: "How to Win Friends and Influence People",
    img: "/How_To_Win_Friends_And_Influence_People.webp",
    heightMultiplier: .86,
  },
  {
    title: "The Sea of Tranquility",
    img: "/The_Sea_of_Tranquility.webp",
    heightMultiplier: .89,
  },
  {
    title: "Nighlord Sunset",
    img: "/Nightlord_Sunset.webp",
    heightMultiplier: .97,
  },
  {
    title: "Replay",
    img: "/Replay.webp",
    heightMultiplier: .86,
  },
  {
    title: "The Song of Achilles",
    img: "/The_Song_of_Achilles.webp",
    heightMultiplier: .84,
  },

  {
    title: "Wuthering Heights",
    img: "/Wuthering_Heights.webp",
    heightMultiplier: .89,
  },



  {
    title: "Endurance",
    img: "/Endurance.webp",
    heightMultiplier: .86,
  },
  {
    title: "The Count of Monte Cristo",
    img: "/The_Count_Of_Monte_Cristo.webp",
    heightMultiplier: .86,
  },
  {
    title: "A Gentleman in Moscow",
    img: "/A_Gentleman_In_Moscow.webp",
    heightMultiplier: .98,
  },
  {
    title: "Educated",
    img: "/Educated.webp",
    heightMultiplier: 1
  },
  {
    title: "The Handmaid's Tale",
    img: "/The_Handmaids_Tale.webp",
    heightMultiplier: .84
  },
  {
    title: "The Road",
    img: "/The_Road.webp",
    heightMultiplier: .84
  },
  {
    title: "Kafka on the Shore",
    img: "/Kafka_On_The_Shore.webp",
    heightMultiplier: .82
  },
  {
    title: "This Is How You Lose the Time War",
    img: "/This_Is_How_You_Lose_The_Time_War.webp",
    heightMultiplier: .87
  }
]

export const BoyfriendPhotos = [
  {
    id: 2,
    img: "/Cheesin.webp",
  },
  {
    id: 5,
    img: "/DirtyDancing.webp",
  },
  {
    id: 21,
    img: "/ThirstTrap.webp",
  },
  {
    id: 7,
    img: "/Flowers.webp",
  },
  {
    id: 8,
    img: "/Greta.webp",
  },
  {
    id: 16,
    img: "/Shred.webp",
  },
  {
    id: 18,
    img: "/Spy.webp",
  },
  {
    id: 19,
    img: "/Starfish.webp",
  },
  {
    id: 21,
    img: "/Ariel.webp",
  },
  {
    id: 20,
    img: "/Baskin.webp",
  },

];

export const ScrollPhotos = [
  {
    id: 1,
    img: "/Boarders.webp",
  },
  {
    id: 2,
    img: "/Cheesin.webp",
  },
  {
    id: 4,
    img: "/Darkside.webp",
  },
  {
    id: 5,
    img: "/DirtyDancing.webp",
  },
  {
    id: 6,
    img: "/FlowerGirls.webp",
  },
  {
    id: 7,
    img: "/Flowers.webp",
  },
  {
    id: 8,
    img: "/Greta.webp",
  },
  {
    id: 9,
    img: "/Les.webp",
  },
  {
    id: 10,
    img: "/MountainBike.webp",
  },
  {
    id: 12,
    img: "/PickleBoy.webp",
  },
  {
    id: 14,
    img: "/SandClub.webp",
  },
  {
    id: 15,
    img: "/ScubaBuddies.webp",
  },
  {
    id: 16,
    img: "/Shred.webp",
  },
  {
    id: 18,
    img: "/Spy.webp",
  },
  {
    id: 19,
    img: "/Starfish.webp",
  },
];




export const socialMedia = [
  {
    id: "1",
    img: "/git.svg",
    link: "https://github.com/drewcmerrill/"
  },
  {
    id: "2",
    img: "/insta.svg",
    link: "https://www.instagram.com/drewcmerrill/"
  },
  {
    id: "3",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/drewcmerrill/"
  },
];

export const flipWords = ["developing", "engineering", "volleyball", "pickleball", "hiking", "designing", "scubadiving", "charts", "graphs", "learning", "weightlifting", "SQL", "Wordle", "Connections", "etymology", "rock climbing", "spikeball", "you ;)", "algorithms", "good design", "functionality", "piano", "musicals", "cooking", "coding", "running", "sunshine", "audiobooks", "podcasts", "volunteering", "space", "birds", "spreadsheets", "reading", "boardgames", "databases", "woodworking", "crosswords", "snowboarding", "jorts", "swimming", "singing", "trivia", "parks", "walks", "puzzles", "tennis", "sailing", "yoga", "data visualization", "art", "graphic design", "sketching", "journaling", "animating", "CAD",]



