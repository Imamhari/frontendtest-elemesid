"use client";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const items = [
  {
    name: "Cupcake",
    icon: "/assets/icon/cupcake.png",
    count: 22,
    bg: "bg-[#F0FEEB]",
  },
  {
    name: "Pizza",
    icon: "/assets/icon/pizza.png",
    count: 25,
    bg: "bg-[#E4F2F4]",
  },
  {
    name: "Kebab",
    icon: "/assets/icon/kebab.png",
    count: 12,
    bg: "bg-[#EAEEFA]",
  },
  {
    name: "Salmon",
    icon: "/assets/icon/salmon.png",
    count: 22,
    bg: "bg-[#F9EEF3]",
  },
  {
    name: "Doughnut",
    icon: "/assets/icon/doughnut.png",
    count: 11,
    bg: "bg-[#F3F7D9]",
  },
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  return (
    <section className="flex flex-col">
      <div className="flex justify-center overflow-hidden w-[1333px] h-[215px] p-[10px] gap-5">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-center w-[230px] h-[175px] p-4 rounded-xl shadow-lg transition-all duration-300 cursor-pointer
              ${index === current ? "scale-110 shadow-xl border-2 border-gray-300"  : "scale-100"}
              ${item.bg}
              hover:scale-110`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 
                ${index === current ? "opacity-20" : "opacity-0"}
                hover:opacity-20`}
              style={{ backgroundImage: "url('/assets/backgroud.png')" }}
            ></div>
            {/* Icon */}
            <img
              src={item.icon}
              alt={item.name}
              className="w-16 h-16 relative z-10"
            />
            <h4 className="relative z-10 text-lg font-semibold">{item.name}</h4>
            <p className="relative z-10 text-sm">{item.count} Items</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end mr-20 gap-4">
        <button
          onClick={prevSlide}
          className="flex justify-center items-center gap-2 w-[113px] h-[50px] bg-[#8BAC3E] text-white rounded-full shadow-md hover:bg-[#8BAC3E] transition"
        >
          <ChevronLeft size={20} className="bg-white text-[#8BAC3E] rounded-full w-[33px] h-[33px]" />
          PREV
        </button>
        <button
          onClick={nextSlide}
          className="flex justify-center items-center gap-2 px-4 py-2 bg-[#8BAC3E] text-white rounded-full shadow-md hover:bg-[#8BAC3E] transition w-[113px] h-[50px]"
        >
          NEXT
          <ChevronRight size={20} className="bg-white text-[#8BAC3E] rounded-full w-[33px] h-[33px]" />
        </button>
      </div>
    </section>
  );
}

export default Carousel;
