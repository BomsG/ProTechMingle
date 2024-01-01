import { cloneElement, createContext, useContext, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
import useTouchOutside from "../../contexts/useTouchOutside";

// const Button = styled.button`
//   &:hover {
//     background-color: var(--color-grey-100);
//   }

//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//     /* Sometimes we need both */
//     /* fill: var(--color-grey-500);
//     stroke: var(--color-grey-500); */
//     color: var(--color-grey-500);
//   }
// `;

const ModalContext = createContext();

//eslint-disable-next-line
function Modal({ children }) {
  const [openName, setIsOpenName] = useState("");

  return createPortal(
    <ModalContext.Provider value={{ openName, setIsOpenName }}>
      {children}
    </ModalContext.Provider>,
    document.body
  );
  // ,
  // document.body
  // );
}

function Open({ children, opens }) {
  const { setIsOpenName } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => setIsOpenName(opens) });
}

//eslint-disable-next-line
function Window({ children, name, header }) {
  const { openName, setIsOpenName } = useContext(ModalContext);

  const ref = useTouchOutside(setIsOpenName);

  if (openName !== name) return null;
  return (
    <div className="fixed top-0 left-0 w-screen bg-[#ffffff1a] z-[1000] transition-all h-screen backdrop-blur-sm">
      <div
        className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white  rounded-[8px]  transition-all shadow-sm "
        ref={ref}
      >
        <div className="flex justify-between py-[15px] px-[24px]">
          {header && <div>{header}</div>}
          <button
            className=" border-none p-[0.4rem] translate-x-[0.8rem] transition-all  bg-green-100  rounded-full"
            onClick={() => setIsOpenName("")}
          >
            <HiXMark />
          </button>
        </div>
        {cloneElement(children, { onCloseModal: () => setIsOpenName("") })}
      </div>
    </div>
  );
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
