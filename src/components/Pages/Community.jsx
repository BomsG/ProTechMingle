import Header from "./Header";
import { Outlet } from "react-router-dom";

function Community() {
  return (
    <div className="bg-[#F9F9F9]">
      <Header />

      <Outlet />
    </div>
  );
}

export default Community;
