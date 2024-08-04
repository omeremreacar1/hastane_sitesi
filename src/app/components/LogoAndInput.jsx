import React, { useState } from "react";
import usa_flag from "../assets/usa_flag.png";
import turkey_flag from "../assets/turkey_flag.png";
import saudi_flag from "../assets/saudi_flag.png";
import down_arrow from "@/app/assets/down-arrow.png";
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

function LogoAndInput() {
  const [showCountries, setShowCountries] = useState(false);

  return (
    <div>
      <div className="h-48 lg:h-20 flex items-center">
        <div className="container space-y-3 lg:space-y-0 mx-auto flex flex-col lg:flex-row justify-between items-center xl:items-stretch">
          {/* Logo */}
          <div className="bg-blue-600 w-28 text-white py-1 px-3 flex justify-center font-semibold rounded text-2xl cursor-pointer">
            Logo
          </div>

          {/* Arama Bölümü */}
          <div className="flex xl:w-for-input-wrapper items-center border border-gray-300 rounded relative select-none lg:justify-center">
            <div className="flex items-center border-r h-6 pr-3 ml-2">
              <Image src={usa_flag} width={20} height={20} className="mr-1" />
              USA
              <Image
                className="cursor-pointer ml-[2px]"
                width={20}
                src={down_arrow}
                onClick={() => {
                  setShowCountries(!showCountries);
                }}
              />
            </div>

            {showCountries === true ? (
              <div className="w-28 absolute bg-slate-300 select-none top-6 -left-[10px] lg:top-8 lg:-left-[0px] rounded z-40">
                <div
                  className="flex justify-between text-white cursor-pointer px-4"
                  onClick={() => {
                    setShowCountries(false);
                  }}
                >
                  <Image
                    src={turkey_flag}
                    width={24}
                    height={24}
                    alt="Türk Bayrağı"
                  />
                  Türkçe
                </div>
                <div
                  className="flex justify-between text-white cursor-pointer px-4"
                  onClick={() => {
                    setShowCountries(false);
                  }}
                >
                  <Image
                    src={saudi_flag}
                    width={24}
                    height={24}
                    alt="Arabistan Bayrağı"
                  />
                  Arabic
                </div>
              </div>
            ) : (
              <></>
            )}

            <div className="flex items-center ml-2">
              <CiSearch className="text-blue-700 size-6" />
              <input
                type="text"
                className="outline-none ml-2 xl:w-for-input w-[150px]"
                placeholder="Enter the disease, hospital or doctor"
              />
            </div>
          </div>

          {/* Yıldız Kısımları */}
          <div className="flex items-center">
            <div className="bg-for-stars p-1">
              <FaStar className="text-white bg-for-stars size-4" />
            </div>
            <div className="bg-for-stars p-1 ml-1">
              <FaStar className="text-white bg-for-stars size-4" />
            </div>
            <div className="bg-for-stars p-1 ml-1">
              <FaStar className="text-white bg-for-stars size-4" />
            </div>
            <div className="bg-for-stars p-1 ml-1">
              <FaStar className="text-white bg-for-stars size-4" />
            </div>
            <div className="bg-for-stars p-1 ml-1">
              <FaStar className="text-white bg-for-stars size-4" />
            </div>
            <span className="text-gray-500 font-semibold ml-3">5.0 Rating</span>
          </div>

          <div>
            <div className="bg-blue-600 text-white py-2 px-4 flex justify-center rounded cursor-pointer">
              Becoma A Partner
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoAndInput;
