// import Center from "./Center";
// import Suggestions from "./Suggestions";

//eslint-disable-next-line
function Body({ children }) {
  return (
    <div className="grid gap-[24px] mt-[23px] mx-[80px] grid-cols-[302px_1fr_302px] pt-[110px] ">
      {children}
    </div>
  );
}

//eslint-disable-next-line
function Left({ children }) {
  return <div className="space-y-[20px]">{children}</div>;
}

//eslint-disable-next-line
function CenterContent({ children }) {
  return <div className="flex flex-col gap-[20px] h-[800px] overflow-auto">{children}</div>;
}

//eslint-disable-next-line
function Right({ children }) {
  return <div className="space-y-[20px]">{children}</div>;
}

Body.CenterContent = CenterContent;
Body.Left = Left;
Body.Right = Right;

export default Body;
