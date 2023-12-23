import React from "react";
import {useState} from "react";
import Navbar from './NavBar.jsx'
import Avatars from "../images/Avatars.png";
import Messaged from "./Messaged.jsx"
import { IoIosSearch } from "react-icons/io";
import { HiOutlineFilter } from "react-icons/hi";


export default function Messages() {
    const [isDisplay, setIsDisplay] = useState(true);
    const [inputData, setInputData] = useState("")
    const [startConversation, setStartConversation] = useState(true)
    console.log(inputData);
   
   
    return(
        <>
         {<Navbar/>}
            <div className='lg:flex px-[80px]'>
                <div className='lg:block lg:h-full lg:w-1/2 mt-[30px]'>
                     <div className="flex flex-col gap-[24px] scroll-py-[0.5px]">
                        <div className="flex justify-between">
                            <h1 className="h1 text-black font-bold">Messages</h1>
                            <button className="flex flex-col h-[56px] py-[8px] px-[18px] justify-center items-center gap-[10px] bg-[#003366] text-white rounded-md hover:bg[#87acec]">New Messages</button>
                        </div>
                        <div className="">
                            <form className="flex gap-[8px]">
                                <button className="absolute h-[56px]  p-[16px] border-0 text-sm/[18px]"><IoIosSearch color="#656565" size={25}/></button>
                                <input type="text" placeholder="Search Messages" onChange={e => setInputData(e.target.value)} className="flex flex-col gap-[8px] h-[56px] p-[16px] pl-[60px] border border-inputBorder border-solid w-[505px] rounded-md focus:outline-none" />
                                <button  className="flex flex-col h-[56px] py-[8px] px-[18px] justify-center items-center gap-[10px] bg-[#003366] text-white rounded-md hover:bg[#87acec]"><HiOutlineFilter /></button>
                            </form>
                        </div>
                    </div>
                </div>
        
                <section className="flex-grow lg:w-1/2">
                <div className="flex h-[620px] justify-center items-center lg:pl-[5%] py-6 lg:py-0">
                    {
                        isDisplay ?
                        <div className=" flex p-[40px] flex-col gap-[40px] justify-center items-center text-center border-2 border-slate-300 rounded-md">
                            <p>In the dynamic lanscape of professional growth, networking <br />
                                opens doors, and messaging forges connections, creating a <br />
                                path way to shared success.
                            </p>
                            <button onClick={()=>setIsDisplay(false)}className="p-3 bg-[#003366] text-white rounded-md">Start New Conversation</button>
                        </div>
                        : startConversation ?<div className="h-[100%] w-[100%] border border-inputBorder border-solid overflow-auto">
                            <header className="p-[10px] transition ease-in-out delay-500 text-center border-b border-solid">Get Friends Here!</header>
                            <div>
                                <ul>
                                    <li className="flex gap-[20px] transition ease-in-out delay-500 hover:bg-[#f4f4f5] p-[10px] border-b border-solid">
                                        <label>
                                            <img src={Avatars} alt="#" />
                                        </label>
                                        
                                        <dl>
                                            <header className="font-bold">Jonathan jay</header>
                                            <span>Hello there am a ui/ux designer</span>
                                        </dl>
                                    </li>
                                    <li className="flex gap-[20px] transition ease-in-out delay-500 hover:bg-[#f4f4f5] p-[10px] border-b border-solid">
                                        <label>
                                            <img src={Avatars} alt="#" />
                                        </label>

                                        <dl>
                                            <header className="font-bold">Boma Pearl</header>
                                            <span>Hello there am a ui/ux designer</span>
                                        </dl>
                                    </li>
                                    <li className="flex gap-[20px] transition ease-in-out delay-500 hover:bg-[#f4f4f5] p-[10px] border-b border-solid">
                                         <label>
                                            <img src={Avatars} alt="#" />
                                        </label>

                                        <dl>
                                            <header className="font-bold">Ojo Joseph</header>
                                            <span>Hello there am a ui/ux designer</span>
                                        </dl>
                                    </li>
                                    <li className="flex gap-[20px] transition ease-in-out delay-500 hover:bg-[#f4f4f5] p-[10px] border-b border-solid">
                                        <label>
                                            <img src={Avatars} alt="#" />
                                        </label>

                                        <dl>
                                            <header className="font-bold">Malik Mustaph</header>
                                            <span>Hello there am a ui/ux designer</span>
                                        </dl>
                                    </li>
                                    <li className="flex gap-[20px] transition ease-in-out delay-500 hover:bg-[#f4f4f5] p-[10px] border-b border-solid">
                                        <label>
                                            <img src={Avatars} alt="#" />
                                        </label>

                                        <dl>
                                            <header className="font-bold">Malik Mustaph</header>
                                            <span>Hello there am a ui/ux designer</span>
                                        </dl>
                                    </li>
                                    <li className="flex gap-[20px] transition ease-in-out delay-500 hover:bg-[#f4f4f5] p-[10px] border-b border-solid">
                                        <label>
                                            <img src={Avatars} alt="#" />
                                        </label>

                                        <dl>
                                            <header className="font-bold">Malik Mustaph</header>
                                            <span>Hello there am a ui/ux designer</span>
                                        </dl>
                                    </li>
                                    <li className="flex gap-[20px] transition ease-in-out delay-500 hover:bg-[#f4f4f5] p-[10px] border-b border-solid">
                                        <label>
                                            <img src={Avatars} alt="#" />
                                        </label>

                                        <dl>
                                            <header className="font-bold">Malik Mustaph</header>
                                            <span>Hello there am a ui/ux designer</span>
                                        </dl>
                                    </li>
                                    <li className="flex gap-[20px] transition ease-in-out delay-500 hover:bg-[#f4f4f5] p-[10px] border-b border-solid">
                                        <label>
                                            <img src={Avatars} alt="#" />
                                        </label>

                                        <dl>
                                            <header className="font-bold">Malik Mustaph</header>
                                            <span>Hello there am a ui/ux designer</span>
                                        </dl>
                                    </li>
                                    <li className="flex gap-[20px] transition ease-in-out delay-500 hover:bg-[#f4f4f5] p-[10px] border-b border-solid">
                                        <label>
                                            <img src={Avatars} alt="#" />
                                        </label>

                                        <dl>
                                            <header className="font-bold">Malik Mustaph</header>
                                            <span>Hello there am a ui/ux designer</span>
                                        </dl>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-5">
                                <button onClick={()=>setStartConversation(false)}className="p-3 bg-[#003366] text-white rounded-md">Start Conversation</button>
                            </div>
                        </div> : <Messaged />
                        
                    }
                </div>  
            </section>
          </div>
    
        </>
    )
}