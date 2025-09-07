import React from "react";
import Image from "next/image";

export default function WhyUs() {
  return (
    <div className="my-15">
      <div className="garamond text-5xl text-center mt-7 mb-12">
        Truly, <span className="text-[#ff5100]">Indian</span>
      </div>
      <div className="baloo-2 text-lg text-center mt-7 mb-12 mx-5">
        There&apos;s only one way to revolutionize India&apos;s coffee landscape
        — by bringing back the authentic Indian filter coffee. That&apos;s
        exactly what we&apos;re doing through our growing coffee cafe franchise
        in India. As a leading coffee shop, we are committed to preserving
        tradition while creating a modern coffee experience for every coffee
        lover.
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col items-center mb-10">
          <div className="w-60 h-70 max-w-sm border-30 border-b-0 border-[#ffe8de] rounded-t-full rounded-b-none overflow-hidden">
            <Image
              src="/images/story-beans.avif"
              width={400}
              height={400}
              alt="Framed"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="baloo-2 text-lg text-center mt-2">
            Specially Sourced Coffee Beans
          </div>
          <div className="baloo-2 text-center text-sm text-gray-400">
            Single origin to Story Beans®
          </div>
        </div>
        <div className="flex flex-col items-center mb-10">
          <div className="w-60 h-70 max-w-sm border-30 border-b-0 border-[#ffe8de] rounded-t-full rounded-b-none overflow-hidden">
            <Image
              src="/images/indian-latitude.avif"
              width={400}
              height={400}
              alt="Framed"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="baloo-2 text-lg text-center mt-2">
            Specially Sourced Coffee Beans
          </div>
          <div className="baloo-2 text-center text-sm text-gray-400">
            Single origin to Story Beans®
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-60 h-70 max-w-sm border-30 border-b-0 border-[#ffe8de] rounded-t-full rounded-b-none overflow-hidden">
            <Image
              src="/images/incredible-india.avif"
              width={400}
              height={400}
              alt="Framed"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="baloo-2 text-lg text-center mt-2">
            Specially Sourced Coffee Beans
          </div>
          <div className="baloo-2 text-center text-sm text-gray-400">
            Single origin to Story Beans®
          </div>
        </div>
      </div>
    </div>
  );
}
