import React from "react";
import Image from "next/image";

export default function WhyUs() {
  return (
    <div className="my-15 flex flex-col items-center">
      <div className="w-[90%] lg:w-[80%] flex flex-col md:flex-row md:justify-between">
        <div className="garamond text-5xl md:text-6xl text-[#1e2339] text-center md:text-start mt-7 mb-12">
          Truly, <span className="text-[#ff5100]">Indian.</span>
        </div>
        <div className="baloo-2 text-lg text-center md:max-w-[400px] md:text-start mt-7 mb-12 mx-5">
          There&apos;s only one way to revolutionize India&apos;s coffee
          landscape — by bringing back the authentic Indian filter coffee.
          That&apos;s exactly what we&apos;re doing through our growing coffee
          cafe franchise in India. As a leading coffee shop, we are committed to
          preserving tradition while creating a modern coffee experience for
          every coffee lover.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[40px] w-[90%]">
        <div className="flex flex-col items-center mb-10">
          <div className="w-60 md:w-full h-70 border-30 border-b-0 border-[#ffe8de] rounded-t-full rounded-b-none overflow-hidden relative">
            <Image
              src="/images/story-beans.avif"
              fill
              alt="Framed"
              className="object-cover"
            />
          </div>
          <div className="baloo-2 text-lg text-center my-2">
            Specially Sourced Coffee Beans
          </div>
          <div className="baloo-2 text-center text-sm text-gray-500">
            Single origin to Story Beans®
          </div>
        </div>
        <div className="flex flex-col items-center mb-10">
          <div className="w-60 md:w-full h-70 border-25 border-b-0 border-[#ffe8de] rounded-t-full rounded-b-none overflow-hidden relative">
            <Image
              src="/images/indian-latitude.avif"
              fill
              alt="Framed"
              className="object-cover"
            />
          </div>
          <div className="baloo-2 text-lg text-center my-2">
            South and North Snacks
          </div>
          <div className="baloo-2 text-center text-sm text-gray-500">
            Snacks of Indian Latitude
          </div>
        </div>
        <div className="flex flex-col items-center mb-10">
          <div className="w-60 md:w-full h-70  border-30 border-b-0 border-[#ffe8de] rounded-t-full rounded-b-none overflow-hidden relative">
            <Image
              src="/images/incredible-india.avif"
              fill
              alt="Framed"
              className="object-cover"
            />
          </div>
          <div className="baloo-2 text-lg text-center my-2">
            Incredible Flavours
          </div>
          <div className="baloo-2 text-center text-sm text-gray-500">
            Originated from Incredible India
          </div>
        </div>
      </div>
    </div>
  );
}
