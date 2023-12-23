import React, {useState} from "react";
import Frame from "../images/Frame.png";
// import Avatars from "../images/Avatars.png";
import {MdMail} from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
// import { FaYoutube, FaInstagram, FaLinkedin, } from "react-icons/fa";

const Navbar = () =>{
    const [toggleNav, setToggleNav] = useState(false);
    const handleNavToggle = () =>{
        setToggleNav(!toggleNav);
        console.log("toggle nav", toggleNav)
    }
    return(
        <>
            <div className="flex items-center justify-between py-[8px] px-[30px] h-[80px] shadow-md">
                <div className="flex justify-between gap-[24px]">
                    <img src={Frame} alt="" className=" shrink-0"/>
                    <form action="" className="hidden lg:flex space-x-2">
                        <input type="text" placeholder="Search" className="h-[56px] p-[16px] border border-inputBorder border-solid w-[350px] rounded-md focus:outline-none" />
                        <button  className="bg-[#003366] text-white rounded-md hover:bg[#87acec] h-[56px] p-[16px]">Post</button>
                    </form>
                </div>

                <div className="hidden md:flex space-x-10">
                    <span className="p-[16px]">Events</span>
                    <span className="p-[16px]">Communities</span>
                    <span className="p-[16px]">Jobs</span>
                    <span className="p-[16px]">Posts</span>
                </div>

                <div className="hidden lg:flex items-center gap-[24px]">
                    <span className="text-lg">
                        <MdMail />
                    </span>
                    <span> <IoMdNotificationsOutline /></span>
                    <span>Mr Hayor</span>
                </div>

                <div className="md:hidden">
                    <button onClick={handleNavToggle}>X</button>  
                </div>
            </div>
            {
                    toggleNav ? (
                        <div className="bg-teal-50 shadow-md p-4 z-45">
                            <ul className="flex flex-col items-start justify-center gap-4">
                                <li>Events</li>
                                <li>Communities</li>
                                <li>Jobs</li>
                            </ul>
                            {/* <div className="flex-col items-center judtify-start space-x-4 mt-4">
                                <span className="text-lg">
                                <MdMail />
                                </span>
                                <span className="text-lg">
                                    <IoMdNotificationsOutline />
                                </span>
                                <span className="text-lg">
                                    <FaLinkedin />
                                </span>
                            </div> */}
                        </div>
                    ): null
                }
        </>
    )
}

export default Navbar