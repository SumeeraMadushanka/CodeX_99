import React from "react";

import "./Technologies.css";

import img1 from "../Assets/Technologies/react.png";
import img2 from "../Assets/Technologies/redux.png";
import img3 from "../Assets/Technologies/java.png";
import img4 from "../Assets/Technologies/flutter.png";
import img5 from "../Assets/Technologies/node.png";
import img6 from "../Assets/Technologies/express.png";
import img7 from "../Assets/Technologies/php.png";
import img8 from "../Assets/Technologies/mongodb.png";
import img9 from "../Assets/Technologies/mysql.png";
import img10 from "../Assets/Technologies/firebase.png";
import img11 from "../Assets/Technologies/sql.png";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Technologies = () => {
  return (
    <div>
      <div className="feature-1 py-6 md:py-12">
        <div className="container px-14 mx-auto">
          <div className="flex -mx-4">
            <div className="px-4 text-center md:w-10/12 xl:w-8/12 mx-auto">
              <h1 className="mb-4 text-4xl font-medium">Technologies</h1>
              <h1 className="text-2xl font-medium">Technologies what we use</h1>
              <div className="h-1 mx-auto bg-indigo-200 w-96 opacity-75 mt-4 rounded"></div>
            </div>
          </div>

          <div className="md:flex md:-mx-4 mt-8 md:pt-4">
            <div className="px-4 md:w-1/3 mt-6 md:mt-0">
              <div
                className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div className="text-4xl p-4 w-16 h-16 mx-auto text-lime-500">
                  <ion-icon name="code-slash-sharp"></ion-icon>
                </div>
                <h5 className="text-xl font-bold mb-4">Frontend</h5>
                <div className="flex ml-4 space-x-5">
                  <div>
                    <img className=" w-14" src={img1} alt="" />
                  </div>
                  <div>
                    <img className=" w-14" src={img2} alt="" />
                  </div>
                  <div>
                    <img className=" w-14" src={img3} alt="" />
                  </div>
                  <div>
                    <img className=" w-14" src={img4} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 md:w-1/3 mt-6 md:mt-0">
              <div
                className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                <div className="text-4xl p-4 w-16 h-16 mx-auto text-lime-500">
                  <ion-icon name="code-slash-sharp"></ion-icon>
                </div>
                <h5 className="text-xl font-bold mb-4">Backend</h5>
                <div className="flex ml-16 space-x-5">
                  <div>
                    <img className=" w-14" src={img5} alt="" />
                  </div>
                  <div>
                    <img className=" w-14 mt-4" src={img6} alt="" />
                  </div>
                  <div>
                    <img className=" w-14" src={img7} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 md:w-1/3 mt-6 md:mt-0">
              <div
                className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div className="text-4xl p-4 w-16 h-16 mx-auto text-lime-500">
                  <ion-icon name="server-sharp"></ion-icon>
                </div>
                <h5 className="text-xl font-bold mb-4">Database</h5>
                <div className="flex ml-6 space-x-5">
                  <div>
                    <img className=" w-14" src={img8} alt="" />
                  </div>
                  <div>
                    <img className=" w-14" src={img9} alt="" />
                  </div>
                  <div>
                    <img className=" w-14" src={img10} alt="" />
                  </div>
                  <div>
                    <img className=" w-14 mt-4" src={img11} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
