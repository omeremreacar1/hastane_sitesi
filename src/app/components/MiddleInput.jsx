import React from "react";
import { CiSearch } from "react-icons/ci";
import location from "@/app/assets/location.png";
import Image from "next/image";
import l1 from "@/app/assets/left/div.overflow-hidden-1.png";
import l2 from "@/app/assets/left/div.overflow-hidden-2.png";
import l3 from "@/app/assets/left/div.overflow-hidden-3.png";
import l4 from "@/app/assets/left/div.overflow-hidden-4.png";
import l5 from "@/app/assets/left/div.overflow-hidden-5.png";
import l6 from "@/app/assets/left/div.overflow-hidden-6.png";
import l7 from "@/app/assets/left/div.overflow-hidden.png";
import r1 from "@/app/assets/right/div.overflow-hidden-1.png";
import r2 from "@/app/assets/right/div.overflow-hidden-2.png";
import r3 from "@/app/assets/right/div.overflow-hidden-3.png";
import r4 from "@/app/assets/right/div.overflow-hidden-4.png";
import r5 from "@/app/assets/right/div.overflow-hidden-5.png";
import r6 from "@/app/assets/right/div.overflow-hidden-6.png";
import r7 from "@/app/assets/right/div.overflow-hidden.png";

function MiddleInput() {
  return (
    <div>
      <div className="relative custom-class">
        <div className="absolute left-2 lg:left-12 top-9 space-y-5 lg:space-y-0 select-none">
          <Image src={l2} className="size-8 lg:size-12" />
          <Image src={l6} className="size-8 lg:size-12 ml-20 opacity-20" />
          <Image src={l4} className="size-8 lg:size-12 ml-4 lg:-ml-4" />
          <Image src={l1} className="size-8 lg:size-12 ml-20 opacity-20" />
          <Image src={l3} className="size-8 lg:size-12 ml-9 opacity-10" />
          <Image src={l5} className="size-8 lg:size-12 ml-40 opacity-45" />
          <Image src={l7} className="size-8 lg:size-12 ml-25 opacity-25" />
        </div>

        <div className="absolute right-2 lg:right-12 top-9 space-y-5 lg:space-y-0 select-none">
          <Image src={r2} className="size-8 lg:size-12 opacity-5" />
          <Image src={r6} className="size-8 lg:size-12 ml-20 opacity-20" />
          <Image
            src={r4}
            className="size-8 lg:size-12 ml-4 lg:-ml-4 opacity-10"
          />
          <Image src={r1} className="size-8 lg:size-12 ml-20 opacity-20" />
          <Image src={r3} className="size-8 lg:size-12 ml-9 opacity-15" />
          <Image src={r5} className="size-8 lg:size-12 ml-40 opacity-45" />
          <Image src={r7} className="size-8 lg:size-12 ml-25 opacity-25" />
        </div>

        <div className="container mx-auto flex items-center justify-center flex-col h-[450px]">
          <div>
            <h1 className="font-2xl md:text-5xl font-medium">
              World's Best Advanced
            </h1>
          </div>
          <div>
            <h1 className="font-2xl md:text-5xl font-medium">
              Cross-Border Care
            </h1>
          </div>
          <p className="text-gray-500 my-5 md:text-base	text-xs">
            Find The Best Hospitals and Doctors Across the world
          </p>

          {/* İnput Kısmı */}
          <div className="flex bg-white items-center h-16 rounded w-[265px] md:w-[300px] lg:w-for-input-wrapper">
            <div className="flex border-r ml-3">
              <CiSearch className="text-blue-700 size-3 lg:size-6" />
              <input
                type="text"
                className="w-[75px] lg:w-72 border border-r outline-none border-none lg:ml-1 lg:text-base text-xs pr-2 z-40"
                placeholder="Enter the disease, hospital or doctor"
              />
            </div>

            <div className="flex ml-3">
              <Image src={location} className="size-3 lg:size-6" />
              <input
                type="text"
                className="outline-none w-[70px] lg:w-56 ml-1 lg:text-base text-[10px] z-40"
                placeholder="Your Location"
              />
            </div>

            <div className="flex item-center md:flex-none">
              <button className="bg-blue-700 text-white rounded md:text-base text-xs py-1 px-1 md:py-2 md:px-4 ml-2">
                Search
              </button>
            </div>
          </div>

          <p className="mt-7 sm:text-base text-[10px] w-[200px] lg:w-auto">
            <span className="text-gray-500">Suggestion:</span> Oncology,
            Endocrinology, <span className="text-blue-500">Infertility</span>,
            Mental Health, Cardiology
          </p>
        </div>
      </div>
    </div>
  );
}

export default MiddleInput;
