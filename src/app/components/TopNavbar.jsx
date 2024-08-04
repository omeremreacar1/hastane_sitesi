import React from "react";
import telephone from "@/app/assets/telephone.png";
import { GiHamburgerMenu } from "react-icons/gi";
import down_arrow from "@/app/assets/down-arrow.png";
import { useState, useEffect } from "react";
import Image from "next/image";
import usa_flag from "../assets/usa_flag.png";
import turkey_flag from "../assets/turkey_flag.png";
import saudi_flag from "../assets/saudi_flag.png";
import Link from "next/link";

function TopNavbar() {
  const [showLanguages, setShowLanguages] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isLinkActive, setIsLinkActive] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsNavbarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="bg-custom-top">
        {/* 1.Kısım */}
        <div
          className="lg:hidden absolute right-2 cursor-pointer"
          onClick={() => {
            setIsNavbarOpen(!isNavbarOpen);
          }}
        >
          <GiHamburgerMenu className="size-10" />
        </div>

        <div
          className={`container mx-auto hidden lg:flex lg:flex-row justify-between items-center text-xs lg:text-base ${
            isNavbarOpen == true ? "!flex !flex-col" : ""
          }`}
        >
          <div className="flex text-lg lg:text-base lg:space-x-7 flex-col lg:flex-row items-center lg:items-stretch">
            <div
              className={`py-4 lg:w-[47px] border-b-2 border-b-custom-top hover:border-b hover:font-bold hover:border-custom-top-text-and-border hover:text-custom-top-text-and-border text-gray-400 ${
                isLinkActive == 1
                  ? "!border-b-2 !font-bold !border-custom-top-text-and-border !text-custom-top-text-and-border "
                  : ""
              }`}
              onClick={() => {
                setIsLinkActive(1);
              }}
            >
              <Link href="#">Home</Link>
            </div>
            <div
              className={`py-4 lg:w-[50px] border-b-2 border-b-custom-top hover:border-b hover:font-bold hover:border-custom-top-text-and-border hover:text-custom-top-text-and-border text-gray-400 ${
                isLinkActive == 2
                  ? "!border-b-2 !font-bold !border-custom-top-text-and-border !text-custom-top-text-and-border "
                  : ""
              }`}
              onClick={() => {
                setIsLinkActive(2);
              }}
            >
              <Link href="#">About</Link>
            </div>
            <div
              className={`py-4 lg:w-[140px] border-b-2 border-b-custom-top hover:border-b hover:font-bold hover:border-custom-top-text-and-border hover:text-custom-top-text-and-border text-gray-400 ${
                isLinkActive == 3
                  ? "!border-b-2 !font-bold !border-custom-top-text-and-border !text-custom-top-text-and-border "
                  : ""
              }`}
              onClick={() => {
                setIsLinkActive(3);
              }}
            >
              <Link href="#">Legal Documents</Link>
            </div>
            <div
              className={`py-4 lg:w-[155px] border-b-2 border-b-custom-top hover:border-b hover:font-bold hover:border-custom-top-text-and-border hover:text-custom-top-text-and-border text-gray-400 ${
                isLinkActive == 4
                  ? "!border-b-2 !font-bold !border-custom-top-text-and-border !text-custom-top-text-and-border "
                  : ""
              }`}
              onClick={() => {
                setIsLinkActive(4);
              }}
            >
              <Link href="#">Customer Supports</Link>
            </div>
            <div
              className={`py-4 lg:w-[123px] border-b-2 border-b-custom-top hover:border-b hover:font-bold hover:border-custom-top-text-and-border hover:text-custom-top-text-and-border text-gray-400 ${
                isLinkActive == 5
                  ? "!border-b-2 !font-bold !border-custom-top-text-and-border !text-custom-top-text-and-border "
                  : ""
              }`}
              onClick={() => {
                setIsLinkActive(5);
              }}
            >
              <Link href="#">Login For Clinic</Link>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-stretch space-y-5 lg:space-y-0 mb-2 lg:mb-0 lg:space-x-7 mt-3 lg:mt-0">
            <div className="flex space-x-3">
              <Image
                src={telephone}
                width={23}
                className="size-5 lg:mt-[4px] -mr-[5px]"
              />
              <div className="lg:pt-for-top font-semibold text-sm">
                +90-555-635-44 22
              </div>
            </div>
            <div className="flex space-x-1 items-center relative select-none">
              <Image src={usa_flag} width={22} height={22} alt="USA Bayrağı" />
              <div className="font-extralight">English</div>
              <Image
                src={down_arrow}
                width={20}
                className="cursor-pointer"
                onClick={() => {
                  if (showLanguages) {
                    setShowLanguages(false);
                  } else {
                    setShowLanguages(true);
                  }
                }}
              />
              {showLanguages ? (
                <div className="bg-slate-300 w-28 absolute top-5 -right-3 lg:top-[25px] lg:-right-[7px] rounded">
                  <div
                    className="flex justify-between text-white cursor-pointer px-4"
                    onClick={() => {
                      setShowLanguages(false);
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
                      setShowLanguages(false);
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
