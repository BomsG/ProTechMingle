import Image from "../../images/Avatars.png";
import CommunityImage from "../../images/community-banner.png";

//eslint-disable-next-line
function CardsBody({ label }) {
  return (
    <div className=" ">
      {/* <header>{label}</header> */}
      <div>
        {/* creating a card */}
        <div className="ronded w-[411px] bg-white border-[1px] border-[#C4C4C4
        temp1234] mb-[15px] rounded-[8px]">
          <div className="w-full h-[184px]">
            <img src={CommunityImage} className="h-full rounded-tl-[8px] rounded-tr-[8px]" alt="" />
          </div>
          <div className="px-[15px]  py-[12px]">
            <p>Account Tech</p>
            <div className="flex gap-[12px]">
              <div className="text-[#656565] text-[14px]">200 Members</div>
              <div className="flex">
                <img
                  src={Image}
                  className="ml-[-6px] w-[24px] h-[24px]"
                  alt="community banner"
                />
                <img
                  src={Image}
                  className="ml-[-6px] w-[24px] h-[24px]"
                  alt="a community member"
                />
                <img
                  src={Image}
                  className="ml-[-6px] w-[24px] h-[24px]"
                  alt="a community member"
                />
              </div>
            </div>
            <button className="px-[16px] py-[8px] rounded-[8px] w-full leading-[20px] text-[14px] text-center text-white bg-[#036] mt-[12px]">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsBody;
