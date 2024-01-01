import Nav from "../Pages/Nav";
import { IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";
import { LuTicket } from "react-icons/lu";
import { RxLockClosed } from "react-icons/rx";

const Ticket = () => {
  return (
    <>
      <div className="mx-[80px]">
        <div>
          <Nav />
        </div>
        <div className="h-[100vh] flex justify-center items-center my-20">
          <div className=" shadow-2xl w-[50%] py-10 px-10">
            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 flex justify-between gap-3 items-center">
              <span class="bg-blue-800 w-[100%] h-2 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"></span>
              <span>100%</span>
            </div>
            <div className="flex gap-4 w-full my-10">
              <div className="w-full">
                <label className="block font-semibold text-lg mb-2">
                  Ticket Price
                </label>
                <div className="border-2 border-[#949494] flex items-center px-3 gap-3  rounded-md w-full h-[60px] ">
                  <LuTicket color="#949494" size={20} />
                  <p className="text-[#949494] ">Free</p>
                </div>
              </div>
              <div className="w-full">
                <label className="block font-semibold text-lg mb-2">
                  Ticket Availability
                </label>
                <div className="border-2 border-[#949494] flex items-center px-3 gap-3 rounded-md w-full h-[60px] ">
                  <LuTicket color="#949494" size={20} />
                  <p className="text-[#949494] ">Unlimited</p>
                </div>
              </div>
            </div>
            <div className="">
              <h2 className="mt-3 mb-2 text-[16px] font-semibold">
                Who Can See it?
              </h2>
              <div className="flex w-[100%] mb-10 py-3  px-2 text-sm border-2 border-[#949494] h-[60px] rounded-md items-center">
                <RxLockClosed size={20} color="#949494" />
                <input
                  type="text"
                  placeholder="Enter location or virtual link"
                  className="w-full outline-none mx-3"
                />
              </div>
            </div>

            <div className="flex justify-between ">
              <button className="border-2 border-blue-900 text-blue-900 text-md py-2 px-3 w-[40%]  rounded-md">
                Save Draft
              </button>
              <button className="w-[40%] bg-blue-900 text-white font-semibold text-[12px]  py-2 px-3 rounded-md">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
