import React, { useState } from "react";

const NavBar = () => {
  let Links = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SERVICES", link: "#services" },
    { name: "PRICE", link: "#price" },
    { name: "PORTFOLIO", link: "#portfolio" },
    { name: "TEAM", link: "#team" },
    { name: "CONTACT", link: "#contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-zinc-800 py-2 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-sky-600">
          <span className="text-6xl text-lime-500 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
         <span className="text-3xl">CodeX_99</span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-8 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu-sharp"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center font-semibold md:pb-0  pb-0 absolute md:static bg-zinc-800  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-500 ease-in ${
            open ? "top-21 opacity-100" : "top-[-490px]"
          } md:opacity-100`}
        >
          {Links.map((Link) => (
            <li key={Link.name} className="md:ml-2 text-lg md:my-0 my-7">
              <a
                href={Link.link}
                className=" text-white hover:text-lime-500 hover:bg-gray-700 py-2 hover:py-2 px-4 hover:px-4 hover:rounded-full  duration-500"
              >
                {Link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
