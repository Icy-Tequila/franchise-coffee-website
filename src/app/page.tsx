"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import WhyUs from "../sections/why-us";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div id="home">
      {/* Orange section */}
      <div className="relative bg-[#ff5100] w-full min-h-screen overflow-hidden">
        {/* Header */}
        <div className="w-full flex justify-between relative">
          <Image
            src="/images/adhira-logo.png"
            alt="Logo"
            width={90}
            height={90}
            className="ml-4 mt-2 "
          />

          {/* Custom Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white px-4 py-2 shadow-lg rounded-4xl my-7 mr-6 relative z-50 flex items-center cursor-pointer"
            >
              {isOpen ? (
                <X className="text-[#ff5100]" />
              ) : (
                <Menu className="text-[#ff5100]" />
              )}
            </button>

            {isOpen && (
              <div className="absolute top-0 left-0 w-screen ml-[-410px] bg-[#1e2339] text-white p-6 rounded-b-3xl z-40">
                <div className="mb-4 mt-[-16px] ml-[5px]">
                  <Image
                    src="/images/adhira-logo.png"
                    alt="Logo"
                    width={90}
                    height={90}
                  />
                </div>
                <ul className="flex flex-col gap-2">
                  <a
                    href="#why-us"
                    className="py-2 px-3 hover:bg-[#2b2f45] rounded cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Why us
                  </a>
                  <li
                    className="py-2 px-3 hover:bg-[#2b2f45] rounded cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Franchise
                  </li>
                  <li
                    className="py-2 px-3 hover:bg-[#2b2f45] rounded cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Our Story
                  </li>
                  <li
                    className="py-2 px-3 hover:bg-[#2b2f45] rounded cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Stores
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Title */}
        <div className="lobster-regular text-white text-8xl text-center mt-7 mb-12">
          Namma <br /> Coffee
        </div>

        {/* Coffee image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] max-w-[480px] h-[320px] z-2">
          <Image
            src="/images/hero-coffee.avif"
            alt="Hero Image"
            width={500}
            height={500}
            className="w-full h-auto -rotate-6"
          />
        </div>

        {/* Beans image */}
        <Image
          src="/images/beans.avif"
          alt="Beans"
          width={150}
          height={150}
          className="absolute w-[700px] max-w-[700px] bottom-0 mb-[-10px] left-1/2 -translate-x-1/2 h-auto z-1"
        />

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#ff5100] to-transparent z-3" />

        {/* Request Franchise Button */}
        <button className="absolute bottom-13 left-1/2 -translate-x-1/2 z-4 bg-white rounded-full text-[#ff5100] border border-[#ff5100] text-sm px-5 py-2 cursor-pointer">
          Request Franchise
        </button>
      </div>

      {/* Next section */}
      <div id="why-us">
        <WhyUs />
      </div>
    </div>
  );
}
