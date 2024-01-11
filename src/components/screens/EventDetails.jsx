import Nav from "../Pages/Nav";
// import DummyImage from "../images/dummy.png";
import { IoMdTime } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
// import { MapContainer, TileLayer, useMap } from "react-leaflet";
// import Avatar2 from "../images/Avatar(2).png";
// import Group from "../images/AvatarGroups.png";
import { MdOutlineEmail } from "react-icons/md";

const EventDetails = () => {
  const position = [51.505, -0.09];
  return (
    <>
      <div className="mx-[80px]">
        <Nav />
        <div>
          <img
            // src={DummyImage}
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <div className="flex justify-between mt-10">
            <div className=" w-full">
              <h1 className="font-inter font-bold text-[32px] mb-10">
                Name of the event
              </h1>
              <div className="flex ">
                <div className="mr-20">
                  <h2 className="font-inter font-bold text-[20px]">
                    Date and Time
                  </h2>
                  <p className="flex items-center text-[13px] mb-2">
                    <CiCalendar size={12} className="mr-2" /> Sunday, 08 October
                  </p>
                  <p className="flex items-center text-[13px] mb-2">
                    <IoMdTime size={12} className="mr-2" /> 10 am
                  </p>
                </div>
                <div>
                  <h2 className="font-inter font-bold text-[20px]">Location</h2>
                  <p className="flex items-center text-[13px] mb-2">
                    <FaLocationDot size={12} className="mr-2" /> Zone tech yaba{" "}
                    <br />
                    12, Gbagada, shomolu
                  </p>
                </div>
              </div>
              <h1 className="mt-10 mb-4 font-bold font-inter text-[32px]">
                Event Description
              </h1>
              <p>
                As an early-stage startup in the design tools space, we're
                excited to learn from the SF design & creative community about
                your biggest obstacles with incorporating the Voice of Customer
                into your product development journey, and how you approach
                organizing UX research findings from qualitative interviews.
              </p>
              <h1 className="text-[25px] font-bold mt-10 mb-3">Host</h1>
              <div className="flex items-center ">
                {/* <img src={Avatar2} className="w-[50px]" /> */}
                <h2 className="font-semibold">Boma Pearl </h2>
              </div>
              <h1 className="text-[32px] font-bold mt-10">Registered</h1>
              {/* <img src={Group} /> */}
              <p className="text-sm mt-2">
                Ojo Joseph, Malik Mustapha, and 12 others
              </p>
              <div>
                <h2 className="my-10 font-inter text-[25px] font-semibold">
                  Get notified about future events?
                </h2>
                <label for="inbox" className="font-semibold ">
                  Email Address
                </label>
                <div className="flex items-center">
                  <div className="w-[50%] mr-4 border flex items-center px-2 rounded-lg">
                    <input
                      type="email"
                      className="py-2 w-full outline-none"
                      placeholder="Enter email address"
                    />
                    <MdOutlineEmail />
                  </div>
                  <button className="bg-[#003366] text-white font-bold rounded-md py-2 px-2">
                    Subcribe
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full ">
              <div className="flex justify-end">
                <button className="mr-3 text-white font-bold bg-[#003366] py-4 px-5 rounded-[6px] text-sm">
                  Register for event
                </button>
                <button className="flex item-center  font-bold border border-[#003366] py-4 px-5 rounded-[6px] text-sm">
                  <FaShareAlt size={20} color="[#003366] " className="mr-2 " />{" "}
                  Share event
                </button>
              </div>
              <div id="map" className="h-[100vh] w-full mt-10">
                <MapContainer
                  center={[51.505, -0.09]}
                  zoom={13}
                  scrollWheelZoom={true}
                  className="w-full"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
