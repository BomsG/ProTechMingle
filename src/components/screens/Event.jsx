import React from "react";
import Nav from "../Pages/Nav";
import EventSlider from "../Pages/EventSlider";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Event = () => {
  const Catergories = [
    "Categories",
    "Location",
    "Date",
    "Event Type",
    "Pricing",
  ];
  return (
    <>
      <div className="mx-[80px]">
        <div className="">
          <Nav />
          <div className="mt-10 ">
            <div className="flex justify-between items-center my-5 ">
              <h1 className="w-[30px] text-3xl font-semibold">
                Explore EventsExplore Events
              </h1>

              <a
                href=""
                className="flex items-center text-[12px] font-semibold ml-2 bg-[#003366] rounded-[5px] px-5 py-2 text-white"
              >
                <FaPlus className="mr-2" size={12} />
                <Link to="/CreateEvent">Create Event</Link>
              </a>
            </div>
          </div>

          <select
            id="categories"
            className="border-2 text-[#6A6A6A] border-[#949494] focus:border-[#78b2ec] px-3 py-2 mr-5 rounded-[6px] text-[14px] font-semibold"
          >
            <option className="" value="Disabled disabled">
              Categories
            </option>
            <option className="" value="Design">
              Design
            </option>
            <option className="" value="Web">
              Web Dev
            </option>
            <option className="" value="Mobile">
              Mobile Dev
            </option>
            <option className="" value="cyber">
              Cyber security
            </option>
            <option className="" value="cloud">
              Cloud Engineering
            </option>
          </select>
          <select
            id="Location"
            className="border-2 text-[#6A6A6A] border-[#949494] focus:border-[#78b2ec] px-3 py-2 mr-5 rounded-[6px] text-[14px] font-semibold"
          >
            <option className="">Location</option>
          </select>
          <select className="border-2 text-[#6A6A6A] border-[#949494] focus:border-[#78b2ec] px-3 py-2 mr-5 rounded-[6px] text-[14px] font-semibold">
            <option className="">Date</option>
            <option className="">This Week</option>
            <option className="">Next Week</option>
          </select>
          <select className="border-2 text-[#6A6A6A] border-[#949494] focus:border-[#78b2ec] px-3 py-2 mr-5 rounded-[6px] text-[14px] font-semibold">
            <option className="">Event Type</option>
            <option className="">Physical</option>
            <option className="">Virtual</option>
          </select>
          <select className="border-2 text-[#6A6A6A] border-[#949494] focus:border-[#78b2ec] px-3 py-2 mr-5 rounded-[6px] text-[14px] font-semibold">
            <option className="">Pricing</option>
            <option className=""> 500+</option>
            <option className="">1000+</option>
          </select>

          <EventSlider />
        </div>
      </div>
    </>
  );
};

export default Event;
