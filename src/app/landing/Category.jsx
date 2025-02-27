import React from "react";
import Carousel from "./../component/Carousel";

function Category() {
  return (
    <section className="flex flex-col p-6 xl:max-w-screen-2xl mt-10 xl:mt-0 w-full max-w-screen-xl mx-auto xl:w-[1440px] xl:h-[573px] gap-4">
      <div className="flex flex-col items-start">
        <h3 className="font-medium text-[24px] md:text-[38px] leading-[36px] md:leading-[50px]">
          Browser Our Category
        </h3>
        <span className="font-medium text-[24px] md:text-[38px] leading-[36px] md:leading-[50px] text-[#8BAC3E]">
          Receipt
        </span>
      </div>
      <Carousel />
    </section>
  );
}

export default Category;
