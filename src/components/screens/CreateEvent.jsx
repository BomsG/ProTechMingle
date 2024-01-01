import Nav from "../Pages/Nav";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CreateEvent = () => {
  return (
    <>
      <div className="mx-[80px]">
        <div>
          <Nav />
        </div>
        <div className="h-[100vh] flex justify-center items-center my-20">
          <div className=" shadow-2xl w-[50%] py-10 px-2">
            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 flex justify-between items-center">
              <span class="bg-blue-800 w-[20%] h-2 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"></span>
              <span>20%</span>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold">Create new Events</h1>
              <p className="text-[#8C94A6] text-[16px]">
                Fill out these details to upload your event
              </p>
            </div>
            <div className="mx-3">
              <h2 className="mt-10 mb-2 font-bold text-sm">Event Name</h2>
              <input
                type="text"
                placeholder="Enter the name of the event"
                className="w-[100%] py-3  px-2 text-sm border rounded-md"
              />
            </div>

            <div className="border-dotted border-2 border-[#F1F1F1] rounded-md w-[100%] flex justify-center text-center py-10 my-5">
              <div>
                <p className="mt-5 mb-2 mx-[auto] flex justify-center bg-slate-200 rounded-full w-10 h-10 items-center">
                  <IoCloudUploadOutline size={20} color="#B0C0D0" />
                </p>
                <h1 className="text-[14px] font-bold text-[#29415a]">
                  Click to upload cover picture{" "}
                  <span className="text-[10px] text-[#B0C0D0]">
                    or drag and drop
                  </span>
                </h1>
                <p className="text-[12px] text-[#C4C4C4]">
                  PNG or JPEG (max. 800x400px)
                </p>
                <h3 className="py-5 text-[14px] text-[#C4C4C4]">OR</h3>

                <label
                  for="file"
                  className="bg-blue-800 text-white font-semibold text-[12px]  py-2 px-3 rounded-md"
                >
                  Browse Files
                </label>
                <input
                  type="file"
                  placeholder="Browse Files"
                  className="bg-blue-500  py-2 px-2 hidden  "
                  id="file"
                />
              </div>
            </div>
            <div className="flex justify-around ">
              <button className="border-2 border-blue-900 text-blue-900 text-md py-2 px-3 w-[40%]  rounded-md">
                Save Draft
              </button>

              <button className="w-[40%] bg-blue-800 text-white font-semibold text-[12px]  py-2 px-3 rounded-md">
                <Link to="/Physical"> Next </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
