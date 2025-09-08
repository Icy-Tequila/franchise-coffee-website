import React from "react";
import Image from "next/image";

export default function Stores() {
  return (
    <div className="flex flex-col items-center baloo-2">
      <div className="flex flex-col items-center lg:my-15">
        <div className="w-full max-w-[600px] garamond text-3xl lg:text-6xl text-[#1e2339] text-center mt-7 mb-5  mx-10">
          Whole nation&apos;s about to drink{" "}
          <span className="text-[#ff5100]">Our coffee.</span>
        </div>
        <div className="text-sm lg:text-lg text-center mx-10 mb-5">
          Join our initiative and be part of the growing coffee cafe franchise
          market in India.
        </div>
        <button className="bg-white rounded-full text-[#ff5100] border border-[#d64502] text-sm px-5 p-2.5 cursor-pointer shadow-[0_2px_0_0_#ff5100]">
          Request Franchise
        </button>
      </div>
      <div className="my-10 w-[90%] grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="flex flex-col items-center gap-1">
            <div className="w-full h-23 border-7 border-[#ffe8de] rounded-full overflow-hidden">
              <Image
                src="/images/store-1.avif"
                width={400}
                height={400}
                alt="Framed"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>Kochi</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-full h-23 border-7 border-[#ffe8de] rounded-full overflow-hidden">
              <Image
                src="/images/store-2.avif"
                width={400}
                height={400}
                alt="Framed"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>Chennai</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="flex flex-col items-center gap-1">
            <div className="w-full h-23 border-7 border-[#ffe8de] rounded-full overflow-hidden">
              <Image
                src="/images/store-3.avif"
                width={400}
                height={400}
                alt="Framed"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>Hyderabad</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-full h-23 border-7 border-[#ffe8de] rounded-full overflow-hidden">
              <Image
                src="/images/store-4.avif"
                width={400}
                height={400}
                alt="Framed"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>Mumbai</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="flex flex-col items-center gap-1">
            <div className="w-full h-23 border-7 border-[#ffe8de] rounded-full overflow-hidden">
              <Image
                src="/images/store-5.avif"
                width={400}
                height={400}
                alt="Framed"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>Pune</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-full h-23 border-7 border-[#ffe8de] rounded-full overflow-hidden">
              <Image
                src="/images/store-6.avif"
                width={400}
                height={400}
                alt="Framed"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>New Delhi</div>
          </div>
        </div>
      </div>
      <div className="w-[90%] h-auto border-6 border-[#fffaf7] outline-[2.5px] outline-black rounded-2xl">
        <div className="border border-[#f5e9e4] w-full h-auto rounded-2xl flex flex-col items-center p-3">
          <div className="flex justify-around items-center w-full">
            <div className="w-full h-[2px] bg-[#ff5100]"></div>
            <Image
              src="/images/adhira-logo-2.png"
              alt=""
              width={80}
              height={50}
            />
            <div className="w-full h-[2px] bg-[#ff5100]"></div>
          </div>
          <div className="text-center mb-7">
            <div className="garamond text-3xl mt-7 mb-2">
              Coffee with a <span className="text-[#ff5100]">Twist</span>
            </div>
            <div>Quick look into our top sellers</div>
          </div>
          <div className="flex w-full items-center gap-2">
            <div>Beverages</div>
            <div className="w-full h-[1.5px] bg-gray-200"></div>
          </div>
          <div className="w-full flex flex-col gap-2 mb-10">
            <div className="w-full grid grid-cols-2 gap-2">
              <div className="w-full flex flex-col p-2 items-center border border-gray-200 h-auto rounded-2xl">
                <div className="w-full h-20 rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/bev-1.avif"
                    alt=""
                    fill
                    className="w-full object-cover"
                  />
                </div>
                <div className="w-full mt-2">
                  <div className="text-sm mb-1">Kumbakonam Koffee</div>
                  <div className="text-xs text-black/70">
                    Traditional filter coffee, straight from heritage town.
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col p-2 items-center border border-gray-200 h-auto rounded-2xl">
                <div className="w-full h-20 rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/bev-2.avif"
                    alt=""
                    fill
                    className="w-full object-cover"
                  />
                </div>
                <div className="w-full mt-2">
                  <div className="text-sm mb-1">Madras Macchiato</div>
                  <div className="text-xs text-black/70">
                    Bold and creamy, with a touch of Chennai charm
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-2">
              <div className="w-full flex flex-col p-2 items-center border border-gray-200 h-auto rounded-2xl">
                <div className="w-full h-20 rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/bev-3.avif"
                    alt=""
                    fill
                    className="w-full object-cover"
                  />
                </div>
                <div className="w-full mt-2">
                  <div className="text-sm mb-1">Andhra Affogatoe</div>
                  <div className="text-xs text-black/70">
                    Rich espresso meets cool, Andhra sweetness
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col p-2 items-center border border-gray-200 h-auto rounded-2xl">
                <div className="w-full h-20 rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/bev-4.avif"
                    alt=""
                    fill
                    className="w-full object-cover"
                  />
                </div>
                <div className="w-full mt-2">
                  <div className="text-sm mb-1">Salem Spice</div>
                  <div className="text-xs text-black/70">
                    A spicy twist to wake up your senses.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-2">
              <div className="w-full flex flex-col p-2 items-center border border-gray-200 h-auto rounded-2xl">
                <div className="w-full h-20 rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/bev-5.avif"
                    alt=""
                    fill
                    className="w-full object-cover"
                  />
                </div>
                <div className="w-full mt-2">
                  <div className="text-sm mb-1">Hampi Hazelnut</div>
                  <div className="text-xs text-black/70">
                    Nutty notes with the spirit of Hampi.
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col p-2 items-center border border-gray-200 h-auto rounded-2xl">
                <div className="w-full h-20 rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/bev-6.avif"
                    alt=""
                    fill
                    className="w-full object-cover"
                  />
                </div>
                <div className="w-full mt-2">
                  <div className="text-sm mb-1">Malabar Mocha</div>
                  <div className="text-xs text-black/70">
                    Smooth mocha with a hint of Malabar richness
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto flex flex-col gap-2 rounded-2xl bg-[#fff8f5] border border-[#f5e9e4] p-3">
            <div className="flex w-full items-center gap-2">
              <div>Food</div>
              <div className="w-full h-[1.5px] bg-[#ff5100]/20"></div>
            </div>
            <div className="w-full grid grid-cols-2 gap-2">
              <div className="w-full flex flex-col p-2 items-center border border-gray-200 h-auto rounded-2xl">
                <div className="w-full h-20 rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/food-1.avif"
                    alt=""
                    fill
                    className="w-full object-cover"
                  />
                </div>
                <div className="w-full mt-2">
                  <div className="text-sm mb-1">Medu Vada Waffle</div>
                  <div className="text-xs text-black/70">
                    Crispy vada reinvented as a waffle delight.
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col p-2 items-center border border-gray-200 h-auto rounded-2xl">
                <div className="w-full h-20 rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/food-2.avif"
                    alt=""
                    fill
                    className="w-full object-cover"
                  />
                </div>
                <div className="w-full mt-2">
                  <div className="text-sm mb-1">Dosa Tacos</div>
                  <div className="text-xs text-black/70">
                    South Indian dosa meets Mexican taco magic.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-2">
              <div className="w-full flex flex-col p-2 items-center border border-gray-200 h-auto rounded-2xl">
                <div className="w-full h-20 rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/food-3.avif"
                    alt=""
                    fill
                    className="w-full object-cover"
                  />
                </div>
                <div className="w-full mt-2">
                  <div className="text-sm mb-1">Palak Paneer Ravioli</div>
                  <div className="text-xs text-black/70">
                    Classic flavours wrapped in Italian elegance.
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col p-2 items-center border border-gray-200 h-auto rounded-2xl">
                <div className="w-full h-20 rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/food-4.avif"
                    alt=""
                    fill
                    className="w-full object-cover"
                  />
                </div>
                <div className="w-full mt-2">
                  <div className="text-sm mb-1">Filter Coffee Tiramisu</div>
                  <div className="text-xs text-black/70">
                    Aromatic filter coffee in a creamy Italian classic.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center my-5">
            <button className="bg-white rounded-full text-[#ff5100] border border-[#d64502] text-sm px-5 p-2.5 cursor-pointer shadow-[0_2px_0_0_#ff5100]">
              Explore More
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] mt-15 lg:items-center w-[90%] md:w-[80%]">
        <div className="flex justify-center md:justify-start"><div className="w-[120px] md:w-[150px] lg:w-[200px] h-[120px] md:h-[150px] lg:h-[200px] border-7 border-[#ffe8de] rounded-full overflow-hidden relative ">
          <Image
            src="/images/chef-renjith.avif"
            fill
            alt="Framed"
            className="object-cover"
          />
        </div></div>
        <div><div className="garamond text-3xl md:text-6xl text-[#1e2339] text-center md:text-start mt-7 lg:mt-0">
          <span className="text-[#ff5100]">Deliciously </span>Fabulous
        </div>
        <div className="text-lg text-center md:text-start mt-7 mb-5 max-w-[600px]">
          &quot;At Adhira & Appa, every ingredient, every flavour, tells a story
          that&apos;s close to the heart bringing tradition, innovation, and
          warmth to every cup.&quot; <br></br>
        </div>
        <div className="font-semibold text-center md:text-start">Chef. Renjith</div></div>
      </div>
      <div className="flex flex-col mt-15 items-center w-[90%]">
        <div className="w-[70%] lg:mb-5">
          <div className="text-xl text-center my-2">Supply Chain</div>
          <div className="text-base text-center text-gray-500">
            From farm to cup, ensuring quality and care at every step
          </div>
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-2 my-2">
          <div className="w-full flex flex-col p-2 items-center h-auto text-center">
            <Image
              src="/images/sourcing.png"
              alt=""
              width={50}
              height={50}
              className=""
            />
            <div className="w-full mt-2 flex flex-col items-center">
              <div className="text-base mb-1">Sourcing</div>
              <div className="text-sm text-black/70 max-w-[200px]">
                Ethically sourced beans, crafted for the perfect cup.
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col p-2 items-center h-auto text-center">
            <Image
              src="/images/processing.png"
              alt=""
              width={50}
              height={50}
              className=""
            />
            <div className="w-full mt-2 flex flex-col items-center">
              <div className="text-base mb-1">Processing</div>
              <div className="text-sm text-black/70 max-w-[200px]">
                Processed with care to preserve rich flavours.
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col p-2 items-center h-auto text-center">
            <Image
              src="/images/packaging.png"
              alt=""
              width={50}
              height={50}
              className=""
            />
            <div className="w-full mt-2 flex flex-col items-center">
              <div className="text-base mb-1">Packaging</div>
              <div className="text-sm text-black/70 max-w-[200px]">
                Packaged to lock in the freshness you deserve.
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col p-2 items-center h-auto text-center">
            <Image
              src="/images/adhira-logo-2.png"
              alt=""
              width={50}
              height={50}
              className=""
            />
            <div className="w-full mt-2 flex flex-col items-center">
              <div className="text-base mb-1">Distribution</div>
              <div className="text-sm text-black/70 max-w-[200px]">
                Delivered straight to you, ensuring every sip is perfect.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
