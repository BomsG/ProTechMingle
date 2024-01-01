import Nav from "../Pages/Nav";
import { IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

const Category = () => {
  const [clicked, Setclicked] = useState("");
  const handleEvent = (event) => {
    Setclicked(event.target.value);
    const newButton = document.createElement("button");
    clicked.appendChild(newButton);
  };
  const handleButton = (event) => {
    console.log(event);
  };

  const item = [
    "Design",
    "Technology",
    "Digital",
    "Career",
    "Fun",
    "Networking",
    "Launching",
  ];
  return (
    <>
      <div className="mx-[80px]">
        <div>
          <Nav />
        </div>
        <div className="h-[100vh] flex justify-center items-center my-20">
          <div className=" shadow-2xl w-[50%] py-10 px-10">
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 flex justify-between items-center">
              <span className="bg-blue-800 w-[60%] h-2 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"></span>
              <span>60%</span>
            </div>
            <div className="">
              <h2 className="mt-10 mb-2 font-bold text-sm">Category</h2>
              <button
                type="submit"
                className="mb-4 border-2 text-[#003366] border-[#2d4a68] focus:border-[#78b2ec] px-3 py-2 mr-5 rounded-[6px] text-[14px] font-semibold"
              >
                {clicked}
              </button>
              <div className="flex w-[100%] py-3  px-2 text-sm border rounded-md items-center">
                <input
                  type="text"
                  placeholder="Enter your event category and press “ENTER”"
                  className="w-full outline-none mx-3"
                  id="myInput"
                  onInput={handleEvent}
                />
              </div>
            </div>
            <div className="">
              <h2 className="mt-10 mb-2 font-bold text-sm">Suggestions</h2>
              {item.map((item, i) => (
                <button
                  className="mb-4 border-2 text-[#003366] border-[#2d4a68] focus:border-[#78b2ec] px-3 py-2 mr-5 rounded-[6px] text-[14px] font-semibold"
                  onClick={() => handleButton(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex justify-between ">
              <button className="border-2 border-blue-900 text-blue-900 text-md py-2 px-3 w-[40%]  rounded-md">
                Save Draft
              </button>
              <button className="w-[40%] bg-blue-900 text-white font-semibold text-[12px]  py-2 px-3 rounded-md">
                <Link to="/Ticket"> Next</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
