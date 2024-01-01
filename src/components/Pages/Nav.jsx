import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
// import Avatar from "../images/Avatars.png";
import EventSlider from "./EventSlider";
import { FaPlus } from "react-icons/fa";
// import logo from "../images/lo(1)go.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const Catergories = [
    "Categories",
    "Location",
    "Date",
    "Event Type",
    "Pricing",
  ];
  return (
    <>
      <div className="">
        <div className="">
          <div className="flex justify-between items-center my-5">
            <Link to="/Event">{/* <img src={logo} /> */}</Link>
            <div className="flex items-center border w-[350px] h-[45px] pl-2 rounded-lg">
              <IoSearchOutline />
              <input
                type="search"
                placeholder="search"
                className="py-2 px-2 w-full outline-none"
              />
            </div>
            <ul className="flex items-center">
              <li className="text-[14px] font-semibold ml-5">
                <Link to="/Posts">
                  <a href="">Post Forum</a>
                </Link>
              </li>
              <li className="text-[14px] font-semibold ml-2 bg-[#003366] rounded-lg px-3 py-2 text-white">
                <a href="">Events</a>
              </li>
              <li className="text-[14px] font-semibold ml-2">
                <a href="">Communities</a>
              </li>
              <li className="text-[14px] font-semibold mx-5">
                <a href="">Job boards</a>
              </li>
            </ul>
            <div className="ml-4 flex items-center">
              <CiMail size={20} className="mr-3" />
              <IoIosNotificationsOutline size={20} className="mr-3" />
              {/* <img src={Avatar} className="w-[30px]" /> */}
              <h1 className="font-semibold">Hi! Mary</h1>
              <select>
                <option></option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
