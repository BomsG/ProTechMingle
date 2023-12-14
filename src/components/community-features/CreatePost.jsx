//tracking the content in the text area input field

import { useState } from "react";

function CreatePost() {
  //simulating a controlled input field
  const [content, setContent] = useState("");

  function handleChange(e) {
    setContent(e.target.value);
    // if (e.target.value.length > 0) { //if the input field is not empty, set content to true
    // }cl
    console.log(content);
  }

  return (
    <div className="bg-white rounded-[8px] flex flex-col p-[15px] gap-[20px]">
      <div className="text-[20px]">Create post</div>
      <div>
        <textarea
          name="create-post"
          id=""
          placeholder="What's up, Jonathan"
          cols="15"
          rows="8"
          className="border-[1px] w-full border-[#E6EBF0] rounded-[10px] p-[15px]"
          onChange={handleChange}
          value={content}
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-[14px]">
          <label htmlFor="image" className="flex gap-[10px] cursor-pointer">
            <div>
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
            </div>
            <div>Image</div>
          </label>
          <input type="file" id="image" style={{ display: "none" }} />

          <label htmlFor="video" className="flex gap-[10px] cursor-pointer">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2.25 5.625H14.25C15.0456 5.625 15.8087 5.94107 16.3713 6.50368C16.9339 7.06629 17.25 7.82935 17.25 8.625V17.625C17.25 17.8239 17.171 18.0147 17.0303 18.1553C16.8897 18.296 16.6989 18.375 16.5 18.375H4.5C3.70435 18.375 2.94129 18.0589 2.37868 17.4963C1.81607 16.9337 1.5 16.1706 1.5 15.375V6.375C1.5 6.17609 1.57902 5.98532 1.71967 5.84467C1.86032 5.70402 2.05109 5.625 2.25 5.625V5.625Z"
                  stroke="#061C3D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.25 10.5L22.5 7.5V16.5L17.25 13.5"
                  stroke="#061C3D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>Video</div>
          </label>
          <input type="file" id="video" style={{ display: "none" }} />
        </div>
        <button
          disabled={content.length === 0}
          className={`${
            content.length === 0 ? "bg-[#B0C0D0]" : "bg-[#036]"
          } flex gap-[10px] py-[8px] px-[12px] rounded-[8px]`}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.96071 13.3696C5.77403 12.717 5.89477 12.0326 6.25797 11.4934C5.60934 11.5383 4.95627 11.3006 4.48444 10.8127L2.13413 8.38193C0.827724 7.03081 1.65548 4.76835 3.52537 4.57933L16.3806 3.27984C18.3105 3.08475 19.5663 5.25989 18.4324 6.8337L10.8794 17.3169C9.78076 18.8417 7.40753 18.4274 6.89063 16.6204L5.96071 13.3696ZM7.98526 12.5428L15.4302 7.5793L9.2567 16.1477C9.13463 16.3172 8.87094 16.2711 8.81351 16.0704L7.88358 12.8196C7.85367 12.715 7.89478 12.6031 7.98526 12.5428ZM3.72652 6.56919L14.2337 5.50705L6.21276 9.47276C6.11528 9.52096 5.99783 9.50061 5.92224 9.42243L3.57193 6.9917L2.97236 7.57143L3.57193 6.9917C3.42678 6.84158 3.51875 6.59019 3.72652 6.56919L3.63832 5.69672L3.72652 6.56919Z"
                fill="#FEFEFE"
              />
            </svg>
          </div>
          <div className={`leading-[20px] text-[14px] text-[#FEFEFE]`}>
            Post
          </div>
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
