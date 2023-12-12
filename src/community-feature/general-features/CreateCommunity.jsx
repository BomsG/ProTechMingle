import { HiGlobeEuropeAfrica, HiOutlineLockClosed } from "react-icons/hi2";
import Image from "../../images/community-banner.png";
import Menus from "./Menu";

function CreateCommunity() {
  return (
    <Menus>
      <div className="bg-white">
        <div className="w-full h-[273.306px]">
          <img src={Image} className="w-full" alt="" />
        </div>
        <div className="py-[24px] px-[16px]">
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="">Community Name</label>
            <input
              type="text"
              className="border-[1px] border-[#656565] p-[10px] rounded-[8px]"
              placeholder="UI/UX Soldier"
            />
          </div>

          <div className="flex gap-[8px] flex-col py-[24px]">
            <label htmlFor="">Community Type</label>

            <Menus.Menu>
              <Menus.Toggle>
                <button className="border-[1px] text-[#65656] text-left boder-[#656565] bg-transparent  p-[10px] rounded-[8px] w-full">
                  Choose Type
                </button>
              </Menus.Toggle>
              <Menus.List communityType="false">
                <Menus.Button className="flex align-top gap-[8px]">
                  <div className="text-[24px]">
                    <HiGlobeEuropeAfrica />
                  </div>
                  <div>
                    <div className="text-left">Public</div>
                    <p className="text-[14px] text-[#656565] text-left">
                      Anyone can join the community and see all content posted
                      on the community
                    </p>
                  </div>
                </Menus.Button>

                <Menus.Button className="flex align-top gap-[8px]">
                  <div className="text-[24px]">
                    <HiOutlineLockClosed />
                  </div>
                  <div>
                    <div className="text-left">Private</div>
                    <p className="text-[14px] text-[#656565] text-left">
                      Only members can see content posted and people in the
                      library
                    </p>
                  </div>
                </Menus.Button>
              </Menus.List>
            </Menus.Menu>
          </div>

          <div className="flex flex-col gap-[8px]">
            <label htmlFor="">About Community</label>
            <textarea
              className="border-[1px] border-[#656565]  p-[12px] rounded-[8px]"
              name=""
              placeholder="Add description"
              id=""
              cols="20"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div className="py-[12px] px-[24px] flex justify-end">
          <button className="bg-[#036] rounded-[4px] text-white [ py-[13px] px-[19px]">
            Create
          </button>
        </div>
      </div>
    </Menus>
  );
}

//community typw
//about community

export default CreateCommunity;
