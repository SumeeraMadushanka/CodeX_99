import React, { useState } from "react";
import Theame from "./Theame";

const NavBar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "SERVICES", link: "/" },
    { name: "PORTFOLIO", link: "/" },
    { name: "TEAM", link: "/" },
    { name: "BLOG", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-lime-500 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          CodeX_99
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu-sharp"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center font-semibold md:pb-0  pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100`}
        >
          {Links.map((Link) => (
            <li key={Link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={Link.link}
                className="text-gray-800 hover:text-lime-500 duration-500"
              >
                {Link.name}
              </a>
            </li>
          ))}
          <Theame>Get Started</Theame>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;