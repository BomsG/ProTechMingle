import React, { Component } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import Avatar from "../images/Avatars.png";
import DummyImage from "../images/dummy.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa";
import Carousel from "react-multi-carousel";

const EventSlider = () => {
  const items = [
    {
      imageSrc: "DummyImage",
      name: "Untitled Designers",
      location: " Sheraton Hotel, Abuja ",
      date: "28 December 2023",
      time: "10pm",
    },
    {
      imageSrc: "DummyImage",
      name: "Untitled Designers",
      location: " Sheraton Hotel, Abuja ",
      date: "28 December 2023",
      time: "10pm",
    },
    {
      imageSrc: "DummyImage",
      name: "Untitled Designers",
      location: " Sheraton Hotel, Abuja ",
      date: "28 December 2023",
      time: "10pm",
    },
  ];

  return (
    <>
      <div className="mt-[50px]">
        <h1 className="text-3xl font-bold">Popular Events</h1>
        <div className="flex">
          {items.map((items) => (
            <div className="mr-4 border-2 rounded-lg shadow-lg">
              <img src={DummyImage} />
              <p>{items.name}</p>
              <p className="flex items-center">
                <FaLocationDot />
                {items.location}
              </p>
              <p>
                <FaCalendarDay /> {items.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventSlider;
