import styles from "../styles/Hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className="flex justify-between items-center p-6 bg-transparent mx-20 w-[1440px] h-[653px]">
      <div className={styles.container}></div>
      <div className="w-[482px] h-[286.92px] top-[182.49px] left-[120px] flex flex-col gap-[32px]">
        <h2 className="font-medium text-[64px] leading-[64px] tracking-[0%] text-[#8BAC3E]">
          Good Food Us Good Mood
        </h2>
        <p className="text-[#757575] font-normal text-[18px] leading-[29px] tracking-[0%]">
          I would think that conserving our natural resources should be a
          conservative position: Not to waste food, and not to throw away a lot
          of the food that we buy.
        </p>
        <div className="flex gap-5">
          <button className="bg-[#8BAC3E] shadow-[0px_8px_32px_0px_#666BE259] text-white rounded-full w-[147px] h-[42px]">
            <a href="/notfoundpage">Daftar Sekarang</a>
          </button>
          <button className="bg-[#F2F2F2] text-black rounded-full w-[92px] h-[42px]">
            <a href="/notfoundpage">About Us</a>
          </button>
        </div>
      </div>
      <div className="w-[603px] h-[663.62px] top-[37px] left-[701px]">
        <Image
          src="/assets/Group 385.png"
          width={1000}
          height={530}
          alt="food"
          priority
        />
      </div>
    </section>
  );
}

export default Hero;
