import React from "react";
import Image from "next/image";

export default function Franchise() {
  return (
    <div className="w-full bg-[#feeae3] py-10 flex flex-col items-center mt-10 lg:mt-15">
      <div className="w-[90%] lg:w-[85%]">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-5 items-end">
          <div className="garamond text-3xl md:text-6xl">
            Business is good,
            <br />
            <span className="text-[#ff5100]">Get a franchise.</span>
          </div>
          <div className="text-sm lg:text-lg max-w-[350px]">
            Unique opportunity to capture the growing coffee beverage market in
            India with a successful coffee cafe franchise in India.
          </div>
        </div>
        <div className="w-full h-[1.5px] bg-[#ecd7cd] mt-5 lg:mt-10 lg:mb-5"></div>
      </div>
      <div className="w-[90%] lg:w-[85%] mt-5">
        <div className="w-full text-sm lg:text-lg font-semibold">
          Starts with multiple revenue streams across categories.
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8 text-white text-center mt-5">
          <div className="w-full h-[150px] lg:h-[180px] bg-[#ff5100] rounded-xl flex flex-col items-center">
            <div className="w-full pl-[10%] h-[30%] flex items-center lg:text-2xl lg:mb-5">
              Indian Snacks
            </div>
            <div className="w-[80%] h-[70%] rounded-xl overflow-hidden relative rounded-b-none">
              <Image
                src="/images/fran-1.avif"
                alt="Framed"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full h-[150px] lg:h-[180px] bg-[#ff5100] rounded-xl flex flex-col items-center">
            <div className="w-full pl-[10%] h-[30%] flex items-center lg:text-2xl lg:mb-5">
              Beverages
            </div>
            <div className="w-[80%] h-[70%] rounded-xl overflow-hidden relative rounded-b-none">
              <Image
                src="/images/fran-2.avif"
                alt="Framed"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full h-[150px] lg:h-[180px] bg-[#ff5100] rounded-xl flex flex-col items-center">
            <div className="w-full pl-[10%] h-[30%] flex items-center lg:text-2xl lg:mb-5">
              Merchandise
            </div>
            <div className="w-[80%] h-[70%] rounded-xl overflow-hidden relative rounded-b-none">
              <Image
                src="/images/fran-3.avif"
                alt="Framed"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full h-[150px] lg:h-[180px] bg-[#ff5100] rounded-xl flex flex-col items-center">
            <div className="w-full pl-[10%] h-[30%] flex items-center lg:text-2xl lg:mb-5">
              Coffee Beans
            </div>
            <div className="w-[80%] h-[70%] rounded-xl overflow-hidden relative rounded-b-none">
              <Image
                src="/images/fran-4.avif"
                alt="Framed"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
