import React, { Component } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import Avatar from "../../images/Avatars.png";
// import Avatar2 from "../../images/Avaters.png";
// import Avatar3 from "../images/Avatars(3).png";
import DummyImage from "../../images/dummy.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
// import Carousel from "react-multi-carousel";
import OptionIcon from "../../images/Option.png";
import { Link } from "react-router-dom";
import Group from "../../images/AvatarGroups.png";

const EventSlider = () => {
  const items = [
    {
      imageSrc: "DummyImage",
      name: "Untitled Designers Conference",
      location: "Zone Tech, Yaba",
      date: "In 3 hours",
      time: "10pm",
    },
    {
      imageSrc: "DummyImage",
      name: "Untitled Designers Conference",
      location: "Zone Tech, Yaba",
      date: "In 3 hours",
      time: "10pm",
    },
    {
      imageSrc: "DummyImage",
      name: "Untitled Designers Conference",
      location: "Zone Tech, Yaba",
      date: "In 3 hours",
      time: "10pm",
    },
  ];
  const Tomorrow = [
    {
      imageSrc: "DummyImage",
      name: "Untitled Designers Conference",
      location: "Zone Tech, Yaba",
      date: "In 3 hours",
      time: "10pm",
    },
    {
      imageSrc: "DummyImage",
      name: "Untitled Designers Conference",
      location: "Zone Tech, Yaba",
      date: "In 3 hours",
      time: "10pm",
    },
    {
      imageSrc: "DummyImage",
      name: "Untitled Designers Conference",
      location: "Zone Tech, Yaba",
      date: "In 3 hours",
      time: "10pm",
    },
    {
      imageSrc: "DummyImage",
      name: "Untitled Designers Conference",
      location: "Zone Tech, Yaba",
      date: "In 3 hours",
      time: "10pm",
    },
    {
      imageSrc: "DummyImage",
      name: "Untitled Designers Conference",
      location: "Zone Tech, Yaba",
      date: "In 3 hours",
      time: "10pm",
    },
    {
      imageSrc: "DummyImage",
      name: "Untitled Designers Conference",
      location: "Zone Tech, Yaba",
      date: "In 3 hours",
      time: "10pm",
    },
  ];

  return (
    <>
      <div className="mt-[50px]">
        <h1 className="text-3xl font-bold mb-5">Popular Events</h1>
        <div className="grid grid-cols-3">
          {items.map((items) => (
            <Link to="/EventD">
              <div className="mr-4 border-[#fff0] rounded-lg shadow-lg relative">
                <img src={DummyImage} className="w-full " />
                <img
                  src={OptionIcon}
                  className="absolute bottom-0 right-3 top-3 bg-white rounded-full "
                />
                <div className="flex justify-between my-4 mx-3">
                  <div>
                    <p className="text-[15px] font-semibold">{items.name}</p>
                    <p className="flex items-center text-[13px]">
                      <FaLocationDot size={10} className="mr-2" />
                      {items.location}
                    </p>
                    <p className="flex items-center text-[13px]">
                      <IoMdTime size={10} className="mr-2" /> {items.date}
                    </p>
                    <img src={Group} className="w-[60px] mt-5" />
                  </div>
                  <div className="w-[40px] ">
                    <div className="bg-[#5188a3] text-[14px] text-white flex justify-center rounded-t-[5px]">
                      <h1>Nov</h1>
                    </div>
                    <div className=" bg-[#244759] text-white flex justify-center rounded-b-[5px]">
                      <h1>08</h1>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <h1 className="mt-20 mb-5 text-3xl font-bold">Tomorrow</h1>
        <div className="grid grid-cols-3 ">
          {Tomorrow.map((Tomorrow) => (
            <div className="mr-4 mb-10 border-[#fff0] rounded-lg shadow-lg relative">
              <img src={DummyImage} className="w-full" />
              <img
                src={OptionIcon}
                className="absolute bottom-0 right-3 top-3 bg-white rounded-full "
              />
              <div className="flex justify-between mx-3 my-3">
                <div>
                  <p className="text-[15px] font-semibold mb-2">
                    {Tomorrow.name}
                  </p>
                  <p className="flex items-center text-[13px] mb-2">
                    <FaLocationDot size={10} className="mr-2" />
                    {Tomorrow.location}
                  </p>
                  <p className="flex items-center text-[13px] mb-2">
                    <IoMdTime size={10} className="mr-2" /> {Tomorrow.date}
                  </p>
                  <img src={Group} className="w-[55px]" />
                  <div className="flex">
                    {/* <img src={Avatar} className="relative w-8 " /> */}
                    {/* <img src={Avatar2} className="absolute  right-0  w-8" />
                    <img
                      src={Avatar3}
                      className="absolute left-0 right-0  w-8"
                    /> */}
                  </div>
                </div>
                <div className="w-[50px] ">
                  <div className="bg-[#5188a3] text-[14px] text-white flex justify-center rounded-t-[5px]">
                    <h1>Nov</h1>
                  </div>
                  <div className=" bg-[#244759] text-white flex justify-center rounded-b-[5px]">
                    <h1>08</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventSlider;
