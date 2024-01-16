import React from "react";
import { SlPicture } from "react-icons/sl";
import { GoSmiley } from "react-icons/go";
import { FaRegFileAlt } from "react-icons/fa";
import { BiMicrophone } from "react-icons/bi";
import { BsSend } from "react-icons/bs";

export default function Messaged() {

    return (
        <>
            <div className="w-full flex flex-col justify-between h-full border-l pl-[5px] border-solid mt-[3%] mb-[10px] sm-auto">
                <header className="h-[9%]"><div>Messaged</div></header>
                <span className="chats h-[100%]"></span>
   
                <div className="w-full flex justify-between space-x-5">
                    <span className="h-[56px] py-[20px] top-0 text-1xl"><SlPicture/></span>
                    <span className="h-[56px] py-[20px] top-0 text-1xl"><GoSmiley/></span>
                    <span className="h-[56px] py-[20px] top-0 text-1xl"><FaRegFileAlt/></span>
                    <div className="w-full overflow-hidden"> 
                    <form className="flex mb-[2px] space-x-2">
                                <input type="text" placeholder="Search Messages" className="flex flex-col gap-[8px] h-[56px] p-[16px] pr-[60px] border border-inputBorder border-solid w-[505px] rounded-md focus:outline-none" />
                                <button  className="flex flex-col h-[56px] py-[8px] px-[18px] justify-center items-center gap-[10px] bg-[#003366] text-white rounded-md hover:bg[#87acec]"><BsSend /></button>
                            </form>
                    </div>
                    <span className="h-[56px] py-[20px] top-0 text-1xl"><BiMicrophone/></span>
                </div>
            </div>
      </>
    )

}

