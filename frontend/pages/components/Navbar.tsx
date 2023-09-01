import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  if (!theme) {
    setTheme("system");
  }

  return (
    <>
      <header className="w-full mx-auto px-4 bg-white fixed top-0 z-50 shadow sm:px-20 dark:bg-stone-900 dark:border-b dark:border-slate-600">
        <div className="justify-between md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3">
              <div className="md:py-5 md:block">
                <h2 className="text-2xl font-bold">
                  &#8725;&#8725;&#160;&#160;Xavier Kuehn
                </h2>
              </div>
              <div className="md:hidden">
                <button onClick={() => setNavbar(!navbar)}>
                  {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                </button>
              </div>
            </div>
          </div>
          <div>
            {" "}
            {/*none s-resize*/}
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <div className="items-center justify-center md:flex md:space-x-6 space-y-8 md:space-y-0">
                {NAV_ITEMS.map((item, idx) => {
                  return (
                    <Link
                      key={idx}
                      to={item.page}
                      className={
                        "block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 dark:hover:text-neutral-600 hover:cursor-ns-resize"
                      }
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={() => setNavbar(!navbar)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <a
                  className="block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 dark:hover:text-neutral-600"
                  href="/resume-8-31-23.pdf"
                  target="_blank"
                >
                  Resume
                </a>
                {currentTheme === "dark" ? (
                  <button
                    onClick={() => setTheme("light")}
                    className="bg-slate-100 p-2 rounded-xl"
                  >
                    <RiSunLine size={25} color="black" />
                  </button>
                ) : (
                  <button
                    onClick={() => setTheme("dark")}
                    className="bg-slate-100 p-2 rounded-xl"
                  >
                    <RiMoonFill size={25} color="black" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
