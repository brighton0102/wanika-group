"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";

const navItems = [
  { label: "Home", link: "/" },
  {
    label: "Our Companies",
    link: "/services",
    children: [
      { label: "Mopane Capital", link: "/companies/mopane-capital" },
      {
        label: "Idwala Asset Management",
        link: "/companies/idwala-asset-management",
      },
      { label: "Watata Commodities", link: "/companies/watata-commodities" },
      { label: "Sekela Microfinance", link: "/companies/sekela-microfinance" },
      { label: "Kikapu Financial Services", link: "/companies/kikapu-finance" },
      {
        label: "Naka Event Management",
        link: "/companies/naka-event-management",
      },
    ],
  },
  { label: "Services", link: "/services" },
  { label: "Solutions", link: "/solutions" },
  { label: "About Us", link: "/about-us" },
  { label: "Contact Us", link: "/contact-us" },
];

export default function Navbar() {
  const [isSideMenuOpen, setSideMenu] = useState(false);

  function openSideMenu() {
    setSideMenu(true);
  }

  function closeSideMenu() {
    setSideMenu(false);
  }

  return (
    <div className="absolute top-0 left-0 z-50 w-full">
      <div className="flex justify-between w-full px-2 py-5 mx-auto bg-transparent md:px-8 lg:px-16 xl:px-52 2xl:px-72">
        <section className="flex items-center gap-10">
          <p className="text-2xl font-bold text-white">iDesign Websites,</p>
        </section>

        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="items-center hidden gap-4 transition-all lg:flex">
          {navItems.map((data, index) => (
            <div key={index} className="relative group">
              <Link
                href={data.link ?? "#"}
                className="relative px-2 py-3 transition"
                onClick={closeSideMenu}
              >
                <p className="flex items-center gap-2 text-lg text-white cursor-pointer md:text-base group-hover:text-custorm-green">
                  <span>{data.label}</span>
                  {data.children && (
                    <IoIosArrowDown className="transition-all rotate-180 group-hover:rotate-0" />
                  )}
                </p>
              </Link>
              {data.children && (
                <div className="absolute right-0 flex-col hidden w-auto gap-1 py-3 mt-2.5 transition-all bg-white rounded-lg shadow-md top-10 group-hover:flex">
                  {data.children.map((child, childIndex) => (
                    <SingleNavItem
                      key={childIndex}
                      child={child}
                      closeSideMenu={closeSideMenu}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <FiMenu
          onClick={openSideMenu}
          className="text-4xl text-white cursor-pointer md:block lg:hidden"
        />
      </div>
    </div>
  );
}

function MobileNav({ closeSideMenu }) {
  const [isItemOpen, setItemOpen] = useState({});
  const [animationParent] = useAutoAnimate();

  function toggleItem(index) {
    setItemOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  }

  return (
    <div className="fixed top-0 left-0 flex justify-end w-full h-full min-h-screen bg-black/60 lg:hidden">
      <div className="h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="text-4xl cursor-pointer"
          />
        </section>
        <div
          ref={animationParent}
          className="flex flex-col gap-2 text-base transition-all"
        >
          {navItems.map((data, index) => (
            <div key={index} className="relative group">
              <div
                onClick={() => toggleItem(index)}
                className="relative px-2 py-3 transition cursor-pointer"
              >
                <p className="flex gap-2 text-lg items- text-neutral-400 group-hover:text-black">
                  <span>{data.label}</span>
                  {data.children && (
                    <IoIosArrowDown
                      className={`text-xs transition-all ${
                        isItemOpen[index] ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </p>
              </div>
              {isItemOpen[index] && data.children && (
                <div className="flex flex-col w-auto gap-1 py-3 transition-all bg-white rounded-lg shadow-md">
                  {data.children.map((child, childIndex) => (
                    <SingleNavItem
                      key={childIndex}
                      child={child}
                      closeSideMenu={closeSideMenu}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleNavItem({ child, closeSideMenu }) {
  return (
    <Link
      href={child.link ?? "#"}
      className="flex items-center px-4 py-2 text-lg text-gray-800 cursor-pointer md:text-base hover:bg-gray-100"
      onClick={closeSideMenu}
    >
      <span className="whitespace-nowrap">{child.label}</span>
    </Link>
  );
}
