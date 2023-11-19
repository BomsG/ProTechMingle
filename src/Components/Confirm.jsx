import React from "react";
import Mails from "../images/Mails.png";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const Confirm = () => {
  return (
    <>
      <div className="flex h-[100vh] items-center justify-center">
        <div className="w-[45%] lg:w-[30%] text-center">
          <img src={Mails} className="w-[60px] mx-[auto]" />
          <h1 className="text-center text-2xl lg:text-3xl font-bold pt-5">
            Check your email
          </h1>
          <p className="text-[12px] md:text-[15px] lg:text-[1p6x] pt-2">
            The link to reset your password has been sent to Johndoe@gmail.com
          </p>
          <button className="bg-[#003366] w-[80%] text-white text-sm rounded-lg py-3 mt-5 font-semibold">
            Send resend Link
          </button>
          <p className="pt-3 font-semibold text-sm lg:text-[16px]">
            didn't get Email?{" "}
            <Link to="/set-new-password">
              <span className="text-[#003366] font-bold cursor-pointer">
                Click to resend
              </span>
            </Link>
          </p>
          <Link to="/Login">
            <p className="text-[#003366] font-bold text-sm pt-2 flex justify-center items-center">
              <FaArrowLeftLong /> back to Login
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Confirm;
