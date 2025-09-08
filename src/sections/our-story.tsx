import React from "react";
import Image from "next/image";
import YouTubeEmbed from "../components/YoutubeEmbed";

export default function OurStory() {
  return (
    <div className="bg-[#ffe8de] w-full h-auto flex flex-col items-center relative">
      <div className="flex flex-col items-center mt-10">
        <div className="baloo-2 text-xs text-center text-[#ff5100] mb-[-10px]">
          WHERE THE STORY BEGIN
        </div>
        <Image
          src="/images/adhira-text.png"
          alt="adhira-text"
          width={140}
          height={100}
        />
      </div>
      <Image
        src="/images/adhira.png"
        alt=""
        width={65}
        height={50}
        className="absolute top-1/4 left-0 transform -translate-y-1/2"
      />
      <Image
        src="/images/appa.png"
        alt=""
        width={75}
        height={50}
        className="absolute top-1/8 right-0 transform -translate-y-1/2"
      />
      <div className="baloo-2 text-lg text-center mt-7 mb-5 mx-10">
        Listen to our founder Hariharan talk about Adhira & Appa Coffee,
        connection, and love. With our coffee cafe franchise in India,
        there&apos;s a story in every sip of coffee.
      </div>
      <button className="baloo-2 bg-white rounded-full text-[#ff5100] border border-[#d64502] text-sm px-5 p-2.5 cursor-pointer shadow-[0_2px_0_0_#ff5100]">
        Request Franchise
      </button>
      <YouTubeEmbed url="https://www.youtube.com/watch?v=JgtbM6e72W0&t=1s" />
    </div>
  );
}
