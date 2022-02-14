import React from "react";

import "./Team.css";

import Raveena from "../Assets/Team/raveena.png";
import Sahan from "../Assets/Team/sahan.png";
import Anjana from "../Assets/Team/anjana.png";
import Mitila from "../Assets/Team/mitila.png";

const Teams = () => {
  return (
    <div className="container max-w-7xl mx-auto px-8 bg-slate-300 pb-10 pr-10 ">
      <div className="flex flex-wrap">
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-5 my-20">
          <div className="cursor-pointer">
            <img
              alt="Jenna Kardi"
              src={Sahan}
              className="shadow-lg max-w-full h-auto align-middle border-none undefined"
            />
          </div>
          <div className="pt-6 text-center">
            <h1 className="text-gray-900 text-xl font-Poppins font-bold leading-normal mt-0 mb-2">
              Sahan Kumarasiri
            </h1>
            <p className="text-blue-gray-700 text-base font-Poppins leading-relaxed mt-0 mb-4">
              Software Engineer
            </p>
            <div className="flex items-center justify-center gap gap-2">
              <button className="items-center justify-center outline-none focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-12 h-12 p-0 grid place-items-center  leading-normal bg-transparent text-blue-700 hover:bg-zinc-800 hover:text-blue-600   undefined">
                <div className="text-3xl">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </div>
              </button>
              <button className="items-center justify-center outline-none focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-12 h-12 p-0 grid place-items-center  leading-normal bg-transparent text-pink-600 hover:bg-zinc-800 hover:text-pink-600  undefined">
                <div className="text-3xl">
                  <ion-icon name="logo-instagram"></ion-icon>
                </div>
              </button>
              <button className="items-center justify-center outline-none focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-12 h-12 p-0 grid place-items-center  leading-normal bg-transparent text-blue-700 hover:bg-zinc-800 hover:text-blue-600   undefined">
                <div className="text-3xl">
                  <ion-icon name="logo-facebook"></ion-icon>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-5 my-20">
          <div className="cursor-pointer">
            <img
              alt="Jenna Kardi"
              src={Anjana}
              className="shadow-lg max-w-full h-auto align-middle border-none undefined"
            />
          </div>
          <div className="pt-6 text-center">
            <h1 className="text-gray-900 text-xl font-Poppins font-bold leading-normal mt-0 mb-2">
              Anjana Wijesooriya
            </h1>
            <p className="text-blue-gray-700 text-base font-Poppins leading-relaxed mt-0 mb-4">
              Full Stack Developer
            </p>
            <div className="flex items-center justify-center gap gap-2">
              <button className="items-center justify-center outline-none focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-12 h-12 p-0 grid place-items-center  leading-normal bg-transparent text-blue-700 hover:bg-zinc-800 hover:text-blue-600   undefined">
                <div className="text-3xl">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </div>
              </button>
              <button className="items-center justify-center outline-none focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-12 h-12 p-0 grid place-items-center  leading-normal bg-transparent text-pink-600 hover:bg-zinc-800 hover:text-pink-600  undefined">
                <div className="text-3xl">
                  <ion-icon name="logo-instagram"></ion-icon>
                </div>
              </button>
              <button className="items-center justify-center outline-none focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-12 h-12 p-0 grid place-items-center  leading-normal bg-transparent text-blue-700 hover:bg-zinc-800 hover:text-blue-600   undefined">
                <div className="text-3xl">
                  <ion-icon name="logo-facebook"></ion-icon>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-5 my-20">
          <div className="cursor-pointer">
            <img
              alt="Jenna Kardi"
              src={Mitila}
              className="shadow-lg max-w-full h-auto align-middle border-none undefined"
            />
          </div>
          <div className="pt-6 text-center">
            <h1 className="text-gray-900 text-xl font-Poppins font-bold leading-normal mt-0 mb-2">
              Mithila Dilshan
            </h1>
            <p className="text-blue-gray-700 text-base font-Poppins leading-relaxed mt-0 mb-4">
              Web Developer
            </p>
            <div className="flex items-center justify-center gap gap-2">
              <button className="items-center justify-center outline-none focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-12 h-12 p-0 grid place-items-center  leading-normal bg-transparent text-blue-700 hover:bg-zinc-800 hover:text-blue-600   undefined">
                <div className="text-3xl">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </div>
              </button>
              <button className="items-center justify-center outline-none focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-12 h-12 p-0 grid place-items-center  leading-normal bg-transparent text-pink-600 hover:bg-zinc-800 hover:text-pink-600  undefined">
                <div className="text-3xl">
                  <ion-icon name="logo-instagram"></ion-icon>
                </div>
              </button>
              <button className="items-center justify-center outline-none focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-12 h-12 p-0 grid place-items-center  leading-normal bg-transparent text-blue-700 hover:bg-zinc-800 hover:text-blue-600   undefined">
                <div className="text-3xl">
                  <ion-icon name="logo-facebook"></ion-icon>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-5 my-20">
          <div className="cursor-pointer">
            <img
              alt="Jenna Kardi"
              src={Raveena}
              className="shadow-lg max-w-full h-auto align-middle border-none undefined"
            />
          </div>
          <div className="pt-6 text-center">
            <h1 className="text-gray-900 text-xl font-Poppins font-bold leading-normal mt-0 mb-2">
              Raveena Bandara
            </h1>
            <p className="text-blue-gray-700 text-base font-Poppins leading-relaxed mt-0 mb-4">
              Backend Developer
            </p>
            <div className="flex items-center justify-center gap gap-2">
              <button className="items-center justify-center outline-none focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-12 h-12 p-0 grid place-items-center  leading-normal bg-transparent text-blue-700 hover:bg-zinc-800 hover:text-blue-600   undefined">
                <div className="text-3xl">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </div>
              </button>
              <button className="items-center justify-center outline-none focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-12 h-12 p-0 grid place-items-center  leading-normal bg-transparent text-pink-600 hover:bg-zinc-800 hover:text-pink-600  undefined">
                <div className="text-3xl">
                  <ion-icon name="logo-instagram"></ion-icon>
                </div>
              </button>
              <button className="items-center justify-center outline-none focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-12 h-12 p-0 grid place-items-center  leading-normal bg-transparent text-blue-700 hover:bg-zinc-800 hover:text-blue-600   undefined">
                <div className="text-3xl">
                  <ion-icon name="logo-facebook"></ion-icon>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
