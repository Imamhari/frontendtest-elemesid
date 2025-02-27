import Image from "next/image";

const items = [
  {
    name: "Pizza Paperoni",
    category: "Pizza",
    image: "/assets/foods/pizza-paperoni.png",
    rating: "4",
    bg: "bg-[#E6F3F5]",
  },
  {
    name: "Pizza Meat",
    category: "Pizza",
    image: "/assets/foods/pizza-meat.png",
    rating: "3",
    bg: "bg-[#E6F3F5]",
  },
  {
    name: "Doner Kebab",
    category: "Kebab",
    image: "/assets/foods/doner-kebab.png",
    rating: "5",
    bg: "bg-[#EAEEFA]",
  },
  {
    name: "Salmon Roll",
    category: "Salmon",
    image: "/assets/foods/salmon-roll.png",
    rating: "4",
    bg: "bg-[#F9EEF3]",
  },
  {
    name: "Cupcake Choco",
    category: "Cupcake",
    image: "/assets/foods/cupcake-choco.png",
    rating: "4",
    bg: "bg-[#F0FEEB]",
  },
  {
    name: "Doughnut Milk",
    category: "Doughnut",
    image: "/assets/foods/doughnut-milk.png",
    rating: "5",
    bg: "bg-[#F3F7D9]",
  },
  {
    name: "Doughnut Unicorn",
    category: "Doughnut",
    image: "/assets/foods/doughnut-unicorn.png",
    rating: "4",
    bg: "bg-[#F3F7D9]",
  },
  {
    name: "Kathi Kebab",
    category: "Kebab",
    image: "/assets/foods/kathi-kebab.png",
    rating: "4",
    bg: "bg-[#EAEEFA]",
  },
];

function Trending() {
  return (
    <section className="flex flex-col p-6 xl:w-[1440px] xl:h-[1039px] xl:max-w-screen-2xl max-w-screen-xl mx-auto gap-4 w-full">
      <div className="flex flex-col items-start">
        <h3 className="font-medium text-[24px] md:text-[38px] leading-[36px] md:leading-[50px]">
          Browser Our Trending
        </h3>
        <span className="font-medium text-[24px] md:text-[38px] leading-[36px] md:leading-[50px] text-[#8BAC3E]">
          Receipt
        </span>
      </div>
      {/* Pake Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} p-4 rounded-xl hover:scale-105 transition-tranform shadow-[0px_11px_39px_0px_rgba(0,0,0,0.07)] cursor-pointer backdrop-blur-[11px] flex flex-col gap-2 w-[330px] h-[306px]`}
          >
            <div className="w-[118.15px] h-[120px] rounded-xl">
            <Image
              src={item.image}
              alt={item.name}
              width={150}
              height={150}
              className="w-full h-full object-cover"
            />
            </div>
            <h4 className="text-lg font-semibold">{item.name}</h4>
            <p className="text-[#8BAC3E] text-sm">{item.category}</p>
            <div>
              {Array.from({length: 5}, (_,i) =>(
                <span key={i} className={i< item.rating ? "text-orange-500" : "text-gray-300"}>★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
      <button className='bg-[#8BAC3E] text-white rounded-full w-[160px] h-[50px] hover:bg-[#A4B441]'>ALL Receipt</button>
      </div>
    </section>
  );
}

export default Trending;
