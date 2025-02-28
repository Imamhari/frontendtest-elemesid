"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronRight, ChevronLeft } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  return (
    <section className="flex flex-col">
      <div className="w-full h-[215px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={5}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },  // HP kecil
          480: { slidesPerView: 2 },  // HP besar
          768: { slidesPerView: 3 },  // Tablet
          1024: { slidesPerView: 4 }, // Laptop
          1280: { slidesPerView: 5 }, // Desktop
        }}
        className="w-full h-[200px] flex justify-center items-center"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center pt-3 pl-4">
            <div
              className={`${item.bg} relative flex flex-col items-center justify-center w-[250px] h-[175px]  rounded-xl shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 hover:z-20`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 hover:opacity-20 transition-opacity"
                style={{ backgroundImage: "url('/assets/backgroud.png')" }}
              ></div>

              <img
                src={item.icon}
                alt={item.name}
                className="w-16 h-16 relative z-10"
              />
              <h4 className="relative z-10 text-lg font-semibold">
                {item.name}
              </h4>
              <p className="relative z-10 text-sm">{item.count} Items</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      
      <div className="xl:flex justify-end mr-20 gap-4 mt-4 hidden">
        <button className="prev-btn flex justify-center items-center gap-2 w-[113px] h-[50px] bg-[#8BAC3E] text-white rounded-full shadow-md hover:bg-[#A4B441] transition">
          <ChevronLeft size={20} className="bg-white text-[#8BAC3E] rounded-full w-[33px] h-[33px]" />
          PREV
        </button>
        <button className="next-btn flex justify-center items-center gap-2 px-4 py-2 bg-[#8BAC3E] hover:bg-[#A4B441] text-white rounded-full shadow-md transition w-[113px] h-[50px]">
          NEXT
          <ChevronRight size={20} className="bg-white text-[#8BAC3E] rounded-full w-[33px] h-[33px]" />
        </button>
      </div>
    </section>
  );
}

export default Carousel;
