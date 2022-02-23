import React, { useState } from "react";
import axios from "axios";

import load1 from "../Assets/Contact/load2.gif";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="antialiased bg-gray-100">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-sky-800 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
              <p className="pt-2 text-cyan-100 text-sm">
                Keep in touch with us 👉
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="call"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>(+123) 456 7890</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="mail"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>CodeX_99@gmail.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="location"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>N0:123, Main Street, ABCD.</span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a href="#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
          </div>
          <div className="relative lg:-right-60 md:-right-60">
            <div className="absolute z-0 w-40 h-40 bg-lime-400 rounded-full -right-28 -top-28"></div>
            <div className="absolute z-0 w-40 h-40 bg-lime-400 rounded-full -left-28 -bottom-16"></div>
            <div className="relative bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
              <form className="flex flex-col space-y-4" onSubmit={submitForm}>
                <p>{banner}</p>
                <div>
                  <label className="text-sm">Your Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                    onChange={handleName}
                    value={name}
                  />
                </div>
                <div>
                  <label className="text-sm">Email Address</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                    onChange={handleEmail}
                    value={email}
                  />
                </div>
                <div>
                  <label className="text-sm">Message</label>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                    onChange={handleMessage}
                    value={message}
                  />
                </div>
                <button className="inline-block self-end bg-cyan-400 hover:bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm cursor-pointer">
                  Send Message
                  {bool ? (
                    <b className="load">
                      <img src={load1} alt="not responding" />
                    </b>
                  ) : (
                    ""
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
