import React from "react";
import { cn } from "@/utils/cn";
import { standardHeight } from "@/data";

// Define the Book interface
interface Book {
  title: string;
  img: string;
  heightMultiplier: number;
}

interface ShelfProps {
  className?: string;
  books: Book[];
}

const Shelf: React.FC<ShelfProps> = ({ className, books }) => {
  return (
    <div className={cn("flex-col relative", className)}>
      <div className="flex items-end flex-wrap justify-center px-2 relative">
        {books.map((book, index) => (
          <div className="flex-col relative mb-10" key={index}>
            <div className="relative">
              <img
                key={index}
                src={book.img}
                alt={book.title}
                style={{
                  height: `${book.heightMultiplier * standardHeight}px`,
                }}
                className={`${
                  book.img.includes("The_Wheel_of_Time")
                    ? "hidden lg:block"
                    : ""
                } transition relative transform origin-bottom lg:hover:cursor-pointer  lg:hover:scale-[175%] z-10 hover:z-50 hover:shadow-2xl`}
              />
            </div>
            <div className="bg-[#623e20] absolute -left-[20px] w-[20px] h-[40px] z-0" />
            <div className="bg-[#623e20] absolute -right-[20px] w-[20px] h-[40px] z-0" />
            <div className="bg-[#623e20] w-full h-[40px] shadow-bottom z-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shelf;
