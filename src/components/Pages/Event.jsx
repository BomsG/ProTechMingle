import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import Avatar from "../images/Avatars.png";
import EventSlider from "./EventSlider";

const Event = () => {
  const Catergories = [
    "All",
    "Designs",
    "Engineering",
    "Finance",
    "Management",
    "Marketing",
  ];
  return (
    <>
      <div className="mx-[100px]">
        <div className="flex items-center  my-5">
          <h1 className="text-xl font-semibold  text-[#244759] mr-3">
            ProTechMingle
          </h1>
          <div className="flex items-center border w-[350px] pl-2 rounded-lg">
            <IoSearchOutline />
            <input
              type="search"
              placeholder="search"
              className="py-2 px-2 w-full outline-none"
            />
          </div>
          <ul className="flex items-center">
            <li className="text-[15px] font-semibold ml-5">
              <a href="">Post Forum</a>
            </li>
            <li className="text-[15px] font-semibold ml-2 bg-[#003366] rounded-lg px-3 py-2 text-white">
              <a href="">Events</a>
            </li>
            <li className="text-[15px] font-semibold ml-2">
              <a href="">Communities</a>
            </li>
            <li className="text-[15px] font-semibold mx-5">
              <a href="">Job boards</a>
            </li>
          </ul>
          <div className="ml-4 flex items-center">
            <CiMail size={20} className="mr-3" />
            <IoIosNotificationsOutline size={20} className="mr-3" />
            <img src={Avatar} className="w-[30px]" />
            <h1 className="font-semibold">Hi! Mary</h1>
            <select>
              <option></option>
            </select>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-bold">Events</h1>
          <div className="flex items-center mt-5">
            <div className="flex items-center border w-[70%] pl-2 rounded-[5px] ">
              <IoSearchOutline />
              <input
                type="search"
                placeholder="search"
                className="py-2 px-2 w-full outline-none"
              />
            </div>
            <button className="text-[15px] font-semibold ml-2 bg-[#003366] rounded-[5px] px-5 py-3 text-white">
              <a href="">Search</a>
            </button>
          </div>
        </div>
        <ul className="flex mt-10">
          {Catergories.map((Catergories) => (
            <li className="border-2 border-blue-600 px-3 py-2 mr-5 rounded-[6px] text-[14px] font-semibold">
              {Catergories}
            </li>
          ))}
        </ul>
        <EventSlider />
      </div>
    </>
  );
};

export default Event;
