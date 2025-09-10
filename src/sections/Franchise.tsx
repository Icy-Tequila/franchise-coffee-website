"use client";
import React from "react";
import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";
import { UserRound, Mail } from "lucide-react";

export default function Franchise() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    countryCode: "+63", // default PH
    email: "",
    franchiseType: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // You can connect API / email service here
  };

  return (
    <div className="w-full py-10 flex flex-col items-center mt-10 lg:mt-15">
      <div className="w-full bg-[#feeae3] flex flex-col py-10">
        <div className="w-[90%] lg:w-[85%]">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-5 items-end">
            <div className="garamond text-3xl md:text-6xl">
              Business is good,
              <br />
              <span className="text-[#ff5100]">Get a franchise.</span>
            </div>
            <div className="text-sm lg:text-lg max-w-[350px]">
              Unique opportunity to capture the growing coffee beverage market
              in India with a successful coffee cafe franchise in India.
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
              homegrown coffee culture through our coffee cafe franchise in
              India, creating a coffee shop experience that feels both authentic
              and welcoming.
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
      <div className="w-[90%] lg:w-[85%] grid lg:grid-cols-2 mt-10 bg-white gap-10">
        <div className="w-full h-[500px] rounded-xl overflow-hidden relative">
          <Image
            src="/images/cafe-gallery-1.avif"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-[80%] garamond text-3xl md:text-4xl">
            Interested in opening a store?
            <span className="text-[#ff5100]"> Let&apos;s talk!</span>
          </div>
          <div className="w-[80%] mt-5">
            <form
              onSubmit={handleSubmit}
              className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 text-sm"
            >
              {/* First Name */}
              <div>
                <label className="block text-sm mb-2">First Name</label>
                <div className="relative w-full">
                  <UserRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5 pointer-events-none" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="w-full pl-10 p-1.5 border border-[#ff5100] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#30b7a0] focus:border-[#30b7a0]/40 text-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="w-full p-1.5 border border-[#ff5100] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#30b7a0] focus:border-[#30b7a0]/40 text-gray-400"
                  required
                />
              </div>

              {/* Phone Number with Country Code */}
              <div className="md:col-span-2">
                <label className="block text-sm mb-2">Phone Number</label>
                <div className="flex">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="p-1.5 border border-r-0 border-[#ff5100] rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#30b7a0] focus:border-[#30b7a0]/40"
                  >
                    <option value="+63">(PH) +63</option>
                    <option value="+1">(US) +1</option>
                    <option value="+44">(UK) +44</option>
                    <option value="+91">(IN) +91</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-1.5 border border-[#ff5100] rounded-r-lg focus:outline-none focus:ring-1 focus:ring-[#30b7a0] focus:border-[#30b7a0]/40 text-gray-400"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <label className="block text-sm mb-2">Email</label>
                <div className="relative w-full">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5 pointer-events-none" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full pl-10 p-1.5 border border-[#ff5100] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#30b7a0] focus:border-[#30b7a0]/40 text-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Dropdown */}
              <div className="md:col-span-2">
                <label className="block text-sm mb-2">Investment Budget</label>
                <select
                  name="franchiseType"
                  value={formData.franchiseType}
                  onChange={handleChange}
                  className="w-full p-1.5 border border-[#ff5100] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#30b7a0] focus:border-[#30b7a0]/40"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="small">₱200K - ₱500K</option>
                  <option value="medium">₱500K - ₱1M</option>
                  <option value="large">₱1M and above</option>
                </select>
              </div>

              {/* Submit */}
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
