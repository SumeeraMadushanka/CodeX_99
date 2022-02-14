import React from "react";

import IMG1 from "../Assets/Serviecs/img1.jpg";
import IMG2 from "../Assets/Serviecs/img2.jpg";
import IMG3 from "../Assets/Serviecs/img3.jpg";
import IMG4 from "../Assets/Serviecs/img4.jpg";
import IMG5 from "../Assets/Serviecs/img5.jpg";
import IMG6 from "../Assets/Serviecs/img6.jpg";

const Services = () => {
  return (
    <>
      <div className="bg-slate-200 mt-20 ">
        <div className="text-center pt-16 translate-y-8 md:translate-y-20">
          <span className=" text-5xl text-black font-semibold font-Poppins">What Do We Do?</span>
        </div>
        <div className="p-10 md:p-36 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
          <div className="overflow-hidden shadow-lg outline outline-lime-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 scale-90">
            <img className="w-full" src={IMG1} alt="" />
            <div className="px-6 py-4 hover:bg-lime-500 transition duration-300 ease-in">
              <div className="font-bold text-2xl mb-2">
                Software Development
              </div>
              <p className="text-gray-700 text-base hover:text-white transition duration-300 ease-in">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>

          <div className="overflow-hidden shadow-lg outline outline-orange-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 scale-90">
            <img className="w-full" src={IMG2} alt="" />
            <div className="px-6 py-4 hover:bg-orange-500">
              <div className="font-bold text-2xl mb-2">Web Development</div>
              <p className="text-gray-700 text-base hover:text-white transition duration-300 ease-in">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>

          <div className="overflow-hidden shadow-lg outline outline-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 scale-90">
            <img className="w-full" src={IMG3} alt="" />
            <div className="px-6 py-4 hover:bg-sky-500 transition duration-300 ease-in">
              <div className="font-bold text-2xl mb-2">
                Application Development
              </div>
              <p className="text-gray-700 text-base hover:text-white transition duration-300 ease-in">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>

          <div className="overflow-hidden shadow-lg outline outline-violet-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 scale-90">
            <img className="w-full" src={IMG4} alt="" />
            <div className="px-6 py-4 hover:bg-violet-600 transition duration-300 ease-in">
              <div className="font-bold text-xl mb-2">
                UI/UX Graphic Designing
              </div>
              <p className="text-gray-700 text-base hover:text-white transition duration-300 ease-in">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>

          <div className="overflow-hidden shadow-lg outline outline-red-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 scale-90">
            <img className="w-full" src={IMG5} alt="" />
            <div className="px-6 py-4 hover:bg-red-600 transition duration-300 ease-in">
              <div className="font-bold text-xl mb-2">Digital Graphic</div>
              <p className="text-gray-700 text-base hover:text-white transition duration-300 ease-in">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>

          <div className="overflow-hidden shadow-lg outline outline-pink-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 scale-90">
            <img className="w-full" src={IMG6} alt="" />
            <div className="px-6 py-4 hover:bg-pink-600 transition duration-300 ease-in">
              <div className="font-bold text-xl mb-2">Digital Marketing</div>
              <p className="text-gray-700 text-base hover:text-white transition duration-300 ease-in">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
