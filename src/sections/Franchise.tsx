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
      <div className="w-[90%] lg:w-[85%] mt-10 grid lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col gap-5 lg:order-3">
          <div className="garamond text-3xl md:text-5xl">
            Quick market
            <span className="text-[#ff5100]"> insights</span>
          </div>
          <div className="text-md lg:text-lg">
            Unlike every other coffee brand, we&apos;re promoting India&apos;s
            homegrown coffee culture through our coffee cafe franchise in India,
            creating a coffee shop experience that feels both authentic and
            welcoming.
          </div>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 w-full gap-5 lg:gap-8 my-5 lg:mb-0 lg:min-h-[170px]">
          <div className="flex flex-col items-center lg:items-start justify-center p-7 bg-white border border-[#edd8ce] rounded-2xl">
            <div className="text-3xl lg:text-6xl">$1.2billion</div>
            <div className="text-sm lg:text-lg">will reach by 2030</div>
          </div>
          <div className="flex flex-col items-center lg:items-start text-center justify-center p-7 bg-white border border-[#edd8ce] rounded-2xl">
            <div className="text-3xl lg:text-6xl">63.16%</div>
            <div className="text-sm lg:text-lg">Growth in consumption</div>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start justify-center p-7 bg-white border border-[#edd8ce] rounded-2xl lg:order-4">
          <div className="text-3xl lg:text-6xl">1Year</div>
          <div className="text-sm lg:text-lg">to Break Even</div>
        </div>
      </div>
    </div>
  );
}
