import { Mail, Phone, Instagram, Menu } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <section>
      <div className="hidden xl:block">
        <div className="flex justify-between w-[1470px] h-[423px] gap-4 border rounded-xl bg-[#F9FFF6] p-20">
          <div className="flex flex-col w-[335px] h-[127px] gap-5 ">
            <Image
              src="/assets/logo.png"
              width={207}
              height={50}
              alt="logo"
              priority
            />
            <p className="font-normal text-[14px] leading-[20px] tracking-[0%] text-[#757575]">
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
              Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
              12950
            </p>
            <div className="flex gap-[32px]">
              <div className="text-[#8BAC3E] hover:text-white hover:bg-[#8BAC3E] bg-[40px] rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer transition duration-500">
                <Mail />
              </div>
              <div className="text-[#8BAC3E] hover:text-white hover:bg-[#8BAC3E] bg-[40px] rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer transition duration-500">
                <Phone />
              </div>
              <div className="text-[#8BAC3E] hover:text-white hover:bg-[#8BAC3E] bg-[40px] rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer transition duration-500">
                <Instagram />
              </div>
            </div>
          </div>
          <div className="flex flex-col text-[#757575] gap-4">
            <h5 className="text-black text-lg mb-5">Categories</h5>
            <p>Cupcake</p>
            <p>Pizza</p>
            <p>Kebab</p>
            <p>Salmon</p>
            <p>Dougnut</p>
          </div>
          <div className="flex flex-col text-[#757575] gap-4">
            <h5 className="text-black text-lg mb-5">About Us</h5>
            <p>About Us</p>
            <p>FAQ</p>
            <p>Report Problem</p>
          </div>
          <div className="flex flex-col text-[#757575] gap-4">
            <h5 className="text-black text-lg mb-5">Newsletter</h5>
            <p>
              Get now free 50% discount for alll products on your first order
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Your email address"
                className="border border-black rounded-l-lg w-[300px] h-[40px] pl-4"
              />
              <button className="bg-[#8BAC3E] text-white px-4 py-2 rounded-r-lg hover:bg-[#A4B441]">
                SEND
              </button>
            </div>
            <div className="flex gap-2">
              <Mail className="text-[#8BAC3E]" />
              <p>elemesid@gmail.com</p>
            </div>
            <div className="flex gap-2">
              <Phone className="text-[#8BAC3E]" />
              <p>0888 1111 2222</p>
            </div>
          </div>
        </div>
        <p className="font-normal text-[12px] leading-[16px] tracking-[5%] text-[#757575] mt-3 flex justify-center">
          © 2021 ELEMES ID. ALL RIGHTS RESERVED
        </p>
      </div>
      <div className=" bottom-0 w-screen mx-5 text-[#757575] flex justify-between   md:hidden  bg-white ">
        <button className="flex flex-col items-center">
          <Menu />
          <p>Home</p>
        </button>
        <button className="flex flex-col items-center">
          <Menu />
          <p>Promotions</p>
        </button>
        <button className="flex flex-col items-center">
          <Menu />
          <p>Others</p>
        </button>
      </div>
    </section>
  );
}

export default Footer;
