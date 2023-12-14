import {
  HiMiniArrowRightOnRectangle,
  HiMiniLink,
  HiOutlineExclamationCircle,
  HiPencil,
} from "react-icons/hi2";
import Avatar from "../../images/Avatars.png";
import CommunityBanner from "../../images/community-banner.png";
import Menus from "../community-features/Menu";

//each card should have a unique id

//eslint-disable-next-line
function Card({ id }) {
  return (
    <Menus>
      <div className="rounded-[8px] border-[#C4C4C4] border-[1px] space-y-[16px] py-[16px] px-[15px] w-[381px]">
        <div className="flex justify-between">
          <div className="flex gap-[10px]">
            <img
              src={CommunityBanner}
              className="w-[80px] h-[80px] rounded-[10px] object-cover"
              alt="a community banner"
            />
            <div className="space-y-[4px]">
              <p>Design Comrade</p>
              <div>
                <div className="text-[#656565] text-[14px]">200 Members</div>
                <div className="flex">
                  <img
                    className="ml-[6px] w-[24px] h-[24px]"
                    src={Avatar}
                    alt="a community member"
                  />
                  <img
                    className="ml-[-6px] w-[24px] h-[24px]"
                    src={Avatar}
                    alt="a community member"
                  />
                  <img
                    className="ml-[-6px] w-[24px] h-[24px]"
                    src={Avatar}
                    alt="a community member"
                  />
                </div>
              </div>
            </div>
          </div>
          <Menus.Menu>
            <Menus.Toggle id={id}>
              <div className="w-[24px] cursor-pointer grid place-items-center h-[24px] rounded-full bg-[#E6EBF0] ">
                <div className="absolute top-[2px]">...</div>
              </div>
            </Menus.Toggle>

            <Menus.List id={id}>
              <Menus.Button icon={<HiMiniLink />}>
                Copy community link
              </Menus.Button>

              <Menus.Button icon={<HiPencil />}>Pin community</Menus.Button>

              <Menus.Button icon={<HiOutlineExclamationCircle />}>
                Report community
              </Menus.Button>

              <Menus.Button icon={<HiMiniArrowRightOnRectangle />}>
                Leave community
              </Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </div>
        <button className="px-[16px] w-full py-[8px] text-[#003366] rounded-[8px] bg-[#E6EBF0] ">
          View Community
        </button>
      </div>
    </Menus>
  );
}

export default Card;
