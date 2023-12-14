import { Link } from "react-router-dom";
import Image from "../../assets/Image.png";

//eslint-disable-next-line
function Card({ label, quantity, right, square, moderatorCard, name, field, members }) {
  return (
    <Link
      className="px-[15px] flex justify-between rounded-[10px] cursor-pointer
    " to='/communities/one-community'
    >
      {/* for my communities */}
      {square && (
        <div className="w-[80px] h-[80px] rounded-[10px] bg-[#D9D9D9]"></div>
      )}

      {/* moderator card */}
      {moderatorCard && (
        <div>
          <img src={Image} alt="moderator" />
        </div>
      )}

      <div className="flex flex-col ">
        <p className="text-[16px]  text-[#252525]">{label ?? name}</p>
        <p className="text-[14px] text-[#656565]">
          {quantity && `${quantity} 'Members`}
          {field && field}
        </p>
        {label ? (
          <div className="flex items-start  gap-[-6px]">
            <div>
              <img src={Image} alt="user" className="w-[24px]  h-[24px]" />
            </div>

            <div className="ml-[-6px] ">
              <img src={Image} alt="user" className="w-[24px] h-[24px]" />
            </div>
            <div className="ml-[-6px]">
              <img src={Image} alt="user" className="w-[24px]  h-[24px]" />
            </div>
          </div>
        ) : (
          <div>{!members && '1st mod'}</div>
        )}
      </div>
      <div className="flex items-center">
        <button
          className={`text-white leading-[20px] text-[14px] rounded-[8px] px-[16px] py-[8px] ${
            !square && "bg-[#003366]"
          }`}
        >
          {square && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.0832 13.3707C16.808 12.6006 16.808 11.3994 16.0832 10.6293L8.7282 2.81464C8.34969 2.41246 7.71681 2.39329 7.31464 2.7718C6.91246 3.15032 6.89329 3.78319 7.2718 4.18537L14.6268 12L7.2718 19.8146C6.89329 20.2168 6.91247 20.8497 7.31464 21.2282C7.71681 21.6067 8.34969 21.5875 8.7282 21.1854L16.0832 13.3707Z"
                fill="#363636"
              />
            </svg>
          )}
          {!square && right}
        </button>
      </div>
    </Link>
  );
}

export default Card;
