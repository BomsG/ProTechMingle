import React, { Component } from "react";
import illustrator from "../images/rafiki.png";
import star from "../images/AI-stars.png";
import google from "../images/button-icon.png";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { auth, googleProvider } from "../config/Firebase.js";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(auth?.currentUser?.email);
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };
  const siginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>
      <div className="h-full bg-[#fefefe]  flex  items-center ">
        <div className="w-[100%] h-[100%] bg-[#E6EBF0]  pl-[50px] pt-[50px] hidden  lg:block">
          <div className=" h-[100vh] w-[100%]">
            <h1 className="text-4xl font-semibold pb-6">
              Introducing <span className="text-[#244759]">ProTechMingle</span>
            </h1>
            <p className="pb-3 font-semibold text-[16px] flex ">
              <img src={star} className="mr-4" />
              Connect and interact with fellow tech professionals.
            </p>
            <p className="pb-3 font-semibold text-[16px] flex items-center ">
              <img src={star} className="mr-4" /> Join communities of
              like-minded professionals{" "}
            </p>
            <p className="pb-3 font-semibold text-[16px] flex items-center ">
              <img src={star} className="mr-4" /> Discover and apply to the most
              suitable job opportunities for you.
            </p>
            <p className="pb-3 font-semibold text-[16px] flex items-center ">
              <img src={star} className="mr-4" /> Find events that align with
              your preferences.
            </p>
            <img src={illustrator} className="w-[80%] h-[430px] pt-10" />
          </div>
        </div>
        <div className="w-[100%] ml-0 md:ml-0 lg:ml-[100px] mt-10 flex lg:block items-center justify-center mb-10">
          <div className="">
            <h1 className="text-[#244759] mb-20 text-[26px] text-center font-[500] block lg:hidden">
              ProTechMingle
            </h1>
            <h1 className="text-3xl font-semibold pb-2 text-center  lg:text-left">
              Login to your accoun
            </h1>
            <p className="2xl pb-4 text-center  lg:text-left">Welcome back!</p>
            <form className="w-full lg:w-[60%] ">
              <label for="email" className="block text-[16px] font-[500] mb-2">
                Email*
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                className="w-[100%] py-[12px] px-2 border border-[#656565] rounded-[5px] text-sm mb-5"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                for="password"
                className="block text-[16px] font-[500] mb-2"
              >
                Password*
              </label>
              <div className="flex justify-between w-[100%] py-[12px] px-2 border border-[#656565] rounded-[5px]">
                <input
                  type={passwordShown ? "text" : "password"}
                  placeholder="Enter your password"
                  id="password"
                  className="w-full border-none outline-none  text-sm"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FaRegEyeSlash onClick={togglePasswordVisiblity} />
              </div>
              <div className="flex justify-between mt-3">
                <div className="flex">
                  <input type="checkbox" className="mr-2" />
                  <p>Remember me?</p>
                </div>
                <div>
                  <Link to="Reset">
                    <a href="#" className="text-[#003366] font-semibold">
                      Forgot password?
                    </a>
                  </Link>
                </div>
              </div>
              <Link to="Event">
                <button
                  className="bg-[#003366] w-full text-white text-sm rounded-lg py-3 mt-5 font-semibold"
                  onClick={signIn}
                >
                  Log in
                </button>
              </Link>
              <button
                className="border border-[#003366] text-[#003366] w-full font-bold rounded-lg py-3 mt-5 flex justify-center"
                onClick={siginWithGoogle}
              >
                <img src={google} />
                Sign in with Google
              </button>
              <h3 className="text-center font-semibold mt-4 text-sm">
                Don't have an account?{" "}
                <Link to="/signup">
                  <span className="text-[#003366]">Sign up</span>
                </Link>
              </h3>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
