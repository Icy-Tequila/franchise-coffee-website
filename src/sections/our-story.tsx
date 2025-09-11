import React from "react";
import Image from "next/image";
import YouTubeEmbed from "../components/YoutubeEmbed";

export default function OurStory() {
  return (
    <div className="bg-[#ffe8de] w-full h-auto flex flex-col items-center relative">
      <div className="flex flex-col items-center mt-10">
        <div className="baloo-2 text-xs lg:text-lg text-center text-[#ff5100] mb-[-10px]">
          WHERE THE STORY BEGIN
        </div>
        <Image
          src="/images/adhira-text.png"
          alt="adhira-text"
          width={140}
          height={100}
          className="lg:w-[200px]"
        />
      </div>
      <Image
        src="/images/adhira.png"
        alt=""
        width={65}
        height={50}
        className="absolute lg:top-55 top-40 left-0 transform -translate-y-1/2 md:w-[100px] lg:w-[180px]"
      />
      <Image
        src="/images/appa.png"
        alt=""
        width={75}
        height={50}
        className="absolute lg:top-30 top-20 right-0 transform -translate-y-1/2 md:w-[110px] lg:w-[200px]"
      />
      <div className="flex flex-col lg:flex-row lg:my-10 lg:w-[90%]">
        <div className="flex flex-col">
          <div className="baloo-2 text-lg text-center lg:text-start mt-7 mb-5 mx-10 lg:ml-0 max-w-[500px]">
            Listen to our founder Hariharan talk about Adhira & Appa Coffee,
            connection, and love. With our coffee cafe franchise in India,
            there&apos;s a story in every sip of coffee.
          </div>
          <div className="flex justify-center lg:justify-start">
            <a
              href="#franchise"
              className="baloo-2 bg-white rounded-full text-[#ff5100] border border-[#d64502] text-sm px-5 p-2.5 cursor-pointer shadow-[0_2px_0_0_#ff5100]"
            >
              Request Franchise
            </a>
          </div>
        </div>
        <YouTubeEmbed url="https://www.youtube.com/watch?v=JgtbM6e72W0&t=1s" />
      </div>
    </div>
  );
}
