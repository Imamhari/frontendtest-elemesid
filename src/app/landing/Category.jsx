import React from "react";
import Carousel from "./../component/Carousel";

function Category() {
  return (
    <section className="flex flex-col p-6 mx-20 w-[1440px] h-[573px] gap-4">
      <div className="flex flex-col items-start">
        <h3 className="font-medium text-[38px] leading-[50px] tracking-[0%]">
          Browser Our Category
        </h3>
        <span className="font-medium text-[38px] leading-[50px] tracking-[0%] text-[#8BAC3E]">
          Receipt
        </span>
      </div>
      <Carousel />
    </section>
  );
}

export default Category;
