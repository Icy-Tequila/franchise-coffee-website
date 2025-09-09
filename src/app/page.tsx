"use client";

import Image from "next/image";
import { Menu, X, ChevronUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import WhyUs from "../sections/why-us";
import OurStory from "../sections/our-story";
import Stores from "../sections/Stores";
import Franchise from "../sections/Franchise";

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

  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);
  }, []);

  // Close menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <div id="home" className="baloo-2 text-[#1e2339]">
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
              <div className="fixed top-0 left-0 w-screen bg-[#1e2339] text-white  z-40 rounded-b-3xl">
                <div className="mb-4 mt-[-16px] ml-[-8px] pl-6 pt-6">
                  <Image
                    src="/images/adhira-logo.png"
                    alt="Logo"
                    width={90}
                    height={90}
                  />
                </div>
                <ul className="flex flex-col gap-2 px-2 pb-4">
                  <a
                    href="#why-us"
                    className="py-2 px-3 hover:bg-[#2b2f45] rounded cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Why us
                  </a>
                  <a
                    href="#franchise"
                    className="py-2 px-3 hover:bg-[#2b2f45] rounded cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Franchise
                  </a>
                  <a
                    href="#our-story"
                    className="py-2 px-3 hover:bg-[#2b2f45] rounded cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Our Story
                  </a>
                  <a
                    href="#stores"
                    className="py-2 px-3 hover:bg-[#2b2f45] rounded cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Stores
                  </a>
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

      <div id="why-us" className="relative">
        <WhyUs />
        <div id="our-story">
          <OurStory />
        </div>
        <div id="stores" className="flex justify-center">
          <Stores />
        </div>
        <div id="franchise" className="flex justify-center">
          <Franchise />
        </div>

        {/* Sticky scroll-up button */}
        <div className="sticky bottom-5 mr-5 flex justify-end mt-4">
          <div
            className="w-14 bg-white px-4 py-2 shadow-lg rounded-4xl cursor-pointer z-20"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ChevronUp className="text-[#ff5100]" />
          </div>
        </div>
      </div>
    </div>
  );
}
