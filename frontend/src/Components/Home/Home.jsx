import React from "react";

import Ellipse from "../Assets/Background/Ellipse.png";
import Wave3 from "../Assets/Background/wave3.png";
import Loading from "../Assets/Background/loading.gif";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  return (
    <div className=" bg-[#2b2d3f]" id="home">
      <section className="container h-screen flex px-[10%] py-[6%] mx-auto">
        <img
          src={Ellipse}
          className="z-20 animate-ping w-6 absolute left-24 top-56"
          alt=""
        />
        <img
          src={Ellipse}
          className="z-20 animate-ping w-6 absolute right-96 top-36"
          alt=""
        />
        <img
          src={Ellipse}
          className="z-20 animate-ping w-6 absolute left-80 bottom-6"
          alt=""
        />
        <img
          src={Ellipse}
          className="z-20 animate-ping w-6 absolute right-40 top-64"
          alt=""
        />

        <img
          src={Wave3}
          className="absolute bottom-20 right-36 w-96 animate-pulse"
          alt=""
        />

        <div className=" absolute w-5/12 mt-20 left-20">
          <img src={Loading} alt="" />
        </div>

        <div className="pt-32">
          <div className="absolute right-96">
            <h1 className="text-3xl leading-normal py-8">
              Build visual <br />
              tracking systems <br />
              for your
              <span> customers</span>
            </h1>
            <button className="bg-teal-600 px-7 rounded-full tracking-wide py-3 text-xs hover:scale-110 duration-300">
              GET STARTED
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
