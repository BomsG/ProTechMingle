import Image from "../../images/Avatars.png";

//eslint-disable-next-line
function MemberCard({ isMod }) {
  return (
    <div className="flex justify-between py-[10px] px-[15px] bg-white">
      <div className="flex items-center gap-[8px]">
        <img src={Image} alt="member" />
        <div className="space-y-[5px">
          <h4>Malik Mustapha</h4>
          <div className="text-[12px] text-[#525252]">Project Manager</div>
          {isMod && (
            <div className="text-[12px] text-[#003366] p-[5px] bg-[$#e6ebf0] rounded-[5px] h-[15px] ">
              1st Mod
            </div>
          )}
        </div>
      </div>
      <button className="text-white bg-[#003366] py-[8px] px-[16px] rounded-[8px] ">
        Connect
      </button>
    </div>
  );
}

export default MemberCard;
