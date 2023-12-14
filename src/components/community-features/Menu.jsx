import { createContext, useContext, useState } from "react";
import useTouchOutside from "../../contexts/useTouchOutside";

const MenuContext = createContext();

//eslint-disable-next-line
function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;
  return (
    <MenuContext.Provider
      value={{ close, open, openId, position, setPosition }}
    >
      {children}
    </MenuContext.Provider>
  );
}

//eslint-disable-next-line
function Menu({ children }) {
  return <div className="flex items-center justify-end">{children}</div>;
}

//eslint-disable-next-line
function Toggle({ id, children }) {
  const { openId, open, close, setPosition } = useContext(MenuContext);

  function handleClick(e) {
    e.stopPropagation();

    const rect = e.target.closest("div").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });
    console.log(e);

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <div
      className="bg-transparent border-none p-[0.4rem] rouded-[8px] translate-x-[0.8rem] transition-all "
      onClick={handleClick}
    >
      {children}
    </div>
  );
}

// position: fixed;

//   background-color: var(--color-grey-0);
//   box-shadow: var(--shadow-md);
//   border-radius: var(--border-radius-md);

//   right: ${(props) => props.position.x}px;
//   top: ${(props) => props.position.y}px;

//eslint-disable-next-line
function List({ children, id, communityType }) {
  const { open } = useContext(MenuContext);
  const ref = useTouchOutside(open);
  const { openId, position } = useContext(MenuContext);
  if (id !== openId) return null;
  return (
    <ul
      className={`fixed bg-white w-[301px] shadow-sm rounded-[8px] ${
        !communityType && "p-[15px]"
      } right-[${position.x}px] top-[${position.y + 70}px] rounded-[10px] `}
      ref={ref}
    >
      {/* position={position} */}
      {children}
    </ul>
  );
}

//eslint-disable-next-line
function Button({ children, onClick, icon, className }) {
  function handleClick() {
    onClick?.();
  }
  return (
    <li className="p-[10px] border-b-[1px] border-[#DBDBDB]">
      <button
        className={`${
          !className &&
          "w-full text-[14px] text-left bg-transparent border-none   transition-all flex items-center  "
        } ${className && className}`}
        onClick={handleClick}
      >
        <span className="mx-[15px] text-[24px]">{icon}</span>
        {children}
      </button>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
