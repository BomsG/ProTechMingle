import Nav from "../Pages/Nav";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Physical = () => {
  return (
    <>
      <div className="mx-[80px]">
        <div>
          <Nav />
        </div>
        <div className="h-[100vh] flex justify-center items-center my-20">
          <div className=" shadow-2xl w-[50%] py-10 px-10">
            <div class="w-full bg-gray-20 rounded-full dark:bg-gray-700 flex justify-between items-center">
              <span class="bg-blue-800 w-[40%] h-2 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"></span>
              <span>40%</span>
            </div>
            <div className="">
              <h2 className="mt-10 mb-2 font-bold text-sm">Event Type</h2>

              <input type="radio" name="radio" className="mr-2" checked />

              <label for="radio">Physical</label>
              <Link to="/Virtual">
                <input type="radio" name="radio" className="ml-20 mr-2" />
              </Link>

              <label for="radio">Virtual</label>
            </div>
            <div className="">
              <h2 className="mt-10 mb-2 font-bold text-sm">Event Location</h2>
              <div className="flex w-[100%] py-3  px-2 text-sm border rounded-md items-center">
                <IoLocationOutline />
                <input
                  type="text"
                  placeholder="Enter event location"
                  className="w-full outline-none mx-3"
                />
              </div>
            </div>
            <div className="">
              <h2 className="mt-10 mb-2 font-bold text-sm">
                Event Description
              </h2>
              <textarea
                rows="3"
                className="w-full border p-3 text-sm rounded-md"
                placeholder="Tell us about the event"
              ></textarea>
            </div>
            <div className="flex justify-between my-3">
              <div>
                <label className="block font-bold text-sm">Start Date</label>
                <input type="date" className="border py-2 px-3 rounded-md" />
              </div>
              <div>
                <label className="block font-bold text-sm">Start Time</label>
                <input type="time" className="border py-2 px-3 rounded-md" />
              </div>
            </div>
            <div className="mb-3">
              <input type="checkbox" name="date" className="mr-2" />
              <label for="date" className=" font-bold text-sm">
                End date and time
              </label>
            </div>

            <div className="flex justify-between ">
              <button className="border-2 border-blue-900 text-blue-900 text-md py-2 px-3 w-[40%]  rounded-md">
                Save Draft
              </button>

              <button className="w-[40%] bg-blue-900 text-white font-semibold text-[12px]  py-2 px-3 rounded-md">
                <Link to="/Category"> Next</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Physical;
