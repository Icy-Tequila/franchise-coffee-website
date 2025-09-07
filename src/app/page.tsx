import Image from "next/image";
import { Menu } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Orange section */}
      <div className="relative bg-[#ff5100] w-full min-h-screen overflow-hidden">
        {/* Header */}
        <div className="w-full flex justify-between">
          <Image
            src="/images/adhira-logo.png"
            alt="Logo"
            width={70}
            height={70}
            className="ml-4 mt-2"
          />
          <button className="bg-white px-4 shadow-lg rounded-4xl my-5 mr-4">
            <Menu className=" text-[#ff5100]" />
          </button>
        </div>
        <div>
          {/* Title */}
        <div className="lobster-regular text-white text-8xl text-center mt-7 mb-12">
          Namma <br /> Coffee
        </div>

        {/* Coffee image (sticks to bottom of orange div) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] max-w-[480px] h-[320px] z-2">
          <Image
            src="/images/hero-coffee.avif"
            alt="Hero Image"
            width={500}
            height={500}
            className="w-full h-auto -rotate-6"
          />
        </div>

        {/* Beans image (sticks relative to orange div) */}
        <Image
          src="/images/beans.avif"
          alt="Beans"
          width={150}
          height={150}
          className="absolute w-[700px] max-w-[700px] bottom-0 mb-[-10px] left-1/2 -translate-x-1/2 h-auto z-1"
        />

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#ff5100] to-transparent z-3" />
        <button className="absolute bottom-13 left-1/2 -translate-x-1/2 z-4 bg-white rounded-full text-[#ff5100] border border-[#ff5100] text-sm px-5 py-2">
          Request Franchise
        </button>
        </div>
      </div>

      {/* Next section */}
      <div className="bg-white w-full h-[500px]"></div>
    </div>
  );
}
