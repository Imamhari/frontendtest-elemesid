import Image from "next/image";
import styles from "../styles/Hero.module.css";

function Hero() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center p-6 bg-transparent mx-auto max-w-screen-xl xl:max-w-screen-2xl xl:w-[1440px]">
      <div className={styles.container}></div>
      <div className="w-full lg:w-[482px] flex flex-col items-start lg:items-start gap-8 text-start lg:text-left">
        <h2 className="font-medium text-[40px] md:text-[64px] leading-tight text-[#8BAC3E]">
          Good Food Us Good Mood
        </h2>
        <div className="lg:hidden w-full flex justify-start">
          <Image
            src="/assets/Group 385.png"
            width={300}
            height={300}
            alt="food"
            priority
          />
        </div>
        <p className="text-[#757575] font-normal text-[16px] md:text-[18px] leading-[29px] max-w-md">
          I would think that conserving our natural resources should be a
          conservative position: Not to waste food, and not to throw away a lot
          of the food that we buy.
        </p>
        <div className="flex gap-5">
          <button className="bg-[#8BAC3E] hover:bg-[#A4B441] shadow-lg text-white rounded-full px-6 py-2">
            <a href="/notfoundpage">Daftar Sekarang</a>
          </button>
          <button className="bg-[#F2F2F2] hover:bg-[#E6F3F5] text-black rounded-full px-6 py-2">
            <a href="/notfoundpage">About Us</a>
          </button>
        </div>
      </div>
      <div className="hidden lg:block w-[651px] h-[663.62px] top-[37px] left-[701px]">
        <Image
          src="/assets/Group 385.png"
          width={600}
          height={600}
          alt="food"
          priority
        />
      </div>
    </section>
  );
}

export default Hero;
