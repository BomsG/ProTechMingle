import React from "react";
import Reset from "../../images/reset.png";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const ResetPassword = () => {
  return (
    <>
      <div className="w-full flex h-[100vh] justify-center items-center">
        <div className="text-center">
          <img
            src={Reset}
            className="flex justify-center w-[50px] pb-5 mx-[auto]"
          />
          <h1 className="text-3xl font-semibold mb-1">Forgot your Password?</h1>
          <p className="text-[16px]">
            No worries! A link will be sent to reset your <br /> password
          </p>
          <form className="text-left pt-1">
            <label for="email" className="block text-[16px] font-[500] mb-2">
              Email*
            </label>

            <input
              type="email"
              placeholder="Enter your Email"
              id="email"
              className="w-full  text-sm py-[12px] px-2 border border-[#656565] rounded-[5px]"
            />
            <Link to="/Confirm">
              <button className="bg-[#003366] w-full text-white text-sm rounded-lg py-3 mt-5 font-semibold">
                Send resend Link
              </button>
            </Link>
            <Link to="/Login">
              <h2 className="pt-3 text-center text-sm font-bold text-[#003366] flex justify-center items-center">
                <FaArrowLeftLong /> Back to Login
              </h2>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
