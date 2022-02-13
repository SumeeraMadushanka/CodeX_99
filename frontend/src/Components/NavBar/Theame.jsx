import React from "react";

const Theame = (props) => {
  return (
    <button className="bg-lime-500 text-black font-[Poppins] py-2 px-6 rounded-full md:ml-8 hover:bg-gray-900 hover:text-white duration-500 font-semibold"> 
      {props.children}
    </button>
  );
};

export default Theame;
