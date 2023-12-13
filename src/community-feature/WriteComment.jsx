import { useEffect, useState } from "react";

import EmojiPicker from "emoji-picker-react";

import Image from "../assets/Image.png";
import Menus from "./general-features/Menu";
import { createPortal } from "react-dom";

function WriteComment() {
  const [chosenEmoji, setChosenEmoji] = useState("");
  const [position, setPosition] = useState(null);
  const [postInput, setPostInput] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);

  const handleOpenEmoji = (e) => {
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });
    console.log(position);
    setOpenEmoji((openEmoji) => !openEmoji);
  };

 

  function handleChange(e) {
    setPostInput(e.target.value);
  }
  // const handleEmojiClick = (emoji) => {
  //   setChosenEmoji(emoji);
  //   // You can perform additional actions with the selected emoji if needed
  // };

  return (
    <div className="grid grid-cols-[80px_1fr] gap-[15px] w-full py-[12px] comment">
      <Menus>
        <div>
          <img src={Image} className="h-[50px] w-[50px]" alt="" />
        </div>
        <div className="flex bg-[#F7F7F7] justify-between p-[10px] rounded-[5px]">
          <input
            type="text"
            onChange={handleChange}
            value={postInput}
            className="bg-[#F7F7F7] w-full focus:outline-none focus:border-none"
            placeholder="Write your Comment"
          />
          <div className="flex justify-end items-center gap-[10px]">
            <button onClick={handleOpenEmoji}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8.70001 8C9.52844 8 10.2 8.67157 10.2 9.5C10.2 10.3284 9.52844 11 8.70001 11C7.87158 11 7.20001 10.3284 7.20001 9.5C7.20001 8.67157 7.87158 8 8.70001 8Z"
                  fill="#363636"
                />
                <path
                  d="M16.8 9.5C16.8 8.67157 16.1284 8 15.3 8C14.4716 8 13.8 8.67157 13.8 9.5C13.8 10.3284 14.4716 11 15.3 11C16.1284 11 16.8 10.3284 16.8 9.5Z"
                  fill="#363636"
                />
                <path
                  d="M10.7071 15.2929C10.3166 14.9024 9.68342 14.9024 9.29289 15.2929C8.90237 15.6834 8.90237 16.3166 9.29289 16.7071C10.788 18.2022 13.212 18.2022 14.7071 16.7071C15.0976 16.3166 15.0976 15.6834 14.7071 15.2929C14.3166 14.9024 13.6834 14.9024 13.2929 15.2929C12.5788 16.0069 11.4212 16.0069 10.7071 15.2929Z"
                  fill="#363636"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z"
                  fill="#363636"
                />
              </svg>
            </button>
            {/* {openEmoji && ( */}
            {/* )} */}

            <label htmlFor="comment-image" className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.18288 8.79827C5.66396 8.95863 6.04147 9.33614 6.20183 9.81722C6.36503 10.3068 7.05757 10.3068 7.22078 9.81722C7.38114 9.33614 7.75864 8.95863 8.23972 8.79827C8.72933 8.63507 8.72933 7.94253 8.23972 7.77933C7.75864 7.61897 7.38114 7.24146 7.22078 6.76038C7.05757 6.27077 6.36503 6.27077 6.20183 6.76038C6.04147 7.24146 5.66396 7.61897 5.18288 7.77933C4.69327 7.94253 4.69327 8.63507 5.18288 8.79827Z"
                  fill="#363636"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 2C2.79086 2 1 3.79086 1 6V18C1 20.2091 2.79086 22 5 22H19C21.2091 22 23 20.2091 23 18V6C23 3.79086 21.2091 2 19 2H5ZM21 13.7982V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20H5.14267C5.05007 19.7163 5 19.4135 5 19.0989C5 18.504 5.18287 17.9235 5.52383 17.4361L8.33552 13.4163C9.22169 12.1494 10.9256 11.7634 12.2712 12.5248L12.5869 12.7034L13.0596 12.0282C13.9945 10.6926 15.8249 10.3481 17.1814 11.2524L21 13.7982ZM11.4347 14.3494L11.2863 14.2655C10.8378 14.0117 10.2698 14.1403 9.9744 14.5626L7.1627 18.5824C7.0568 18.7338 7 18.9141 7 19.0989C7 19.5966 7.40344 20 7.90111 20H9.01216C8.70586 19.142 8.78063 18.141 9.38362 17.2796L11.4347 14.3494ZM11.8413 20H19C20.1046 20 21 19.1046 21 18V16.737C21 16.4027 20.8329 16.0905 20.5547 15.905L16.072 12.9165C15.6198 12.6151 15.0097 12.7299 14.6981 13.1751L11.0221 18.4265C10.5581 19.0893 11.0323 20 11.8413 20Z"
                  fill="#363636"
                />
              </svg>
            </label>
            <input type="file" id="comment-image" style={{ display: "none" }} />
          </div>
        </div>
        {openEmoji && (
          <div className={`right-[${position.x}px] top-[${position.y + 70}px]`}>
            <EmojiPicker
              onEmojiClick={(e) => {
                setChosenEmoji(e.emoji);
                setPostInput((c) => c + e.emoji);
              }}
            />
          </div>
        )}
      </Menus>
    </div>
  );
}

export default WriteComment;
