// import React from "react";
import Login from "./components/Pages/Login";
import ResetPassword from "./components/Pages/ResetPassword";
import Confirm from "./components/Pages/Confirm";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SetNewPassword from "./components/Pages/SetNewPassword";
import SignUp from "./components/Pages/SignUp";
import ResetSuccessful from "./components/Pages/ResetSuccessful";
import Community from "./components/Pages/Community";
import OneCommunity from "./components/Pages/OneCommunity";
import AllCommunities from "./components/Pages/AllCommunities";
import CommunityList from "./components/Pages/CommunityList";
import YourCommunites from "./components/Pages/YourCommunites";
import About from "./components/Pages/About";
import { DataContext } from "./contexts/DataContext";

function App() {
  return (
    <>
      <DataContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Reset" element={<ResetPassword />} />
            <Route path="/Confirm" element={<Confirm />} />
            <Route path="communities" element={<Community />}>
              <Route
                index
                element={<Navigate replace to="all-communities" />}
              />
              <Route path="all-communities" element={<AllCommunities />} />
              <Route path="one-community" element={<OneCommunity />}>
                <Route path="about" element={<About />} />
              </Route>
              <Route path="communities-list" element={<CommunityList />} />
              <Route path="your-communities" element={<YourCommunites />} />

              {/* <Route path="post" element={}
            </Route> */}
            </Route>

            <Route path="/set-new-password" element={<SetNewPassword />} />
            <Route path="/reset-successful" element={<ResetSuccessful />} />
          </Routes>
        </BrowserRouter>
      </DataContext>
    </>
  );
}

export default App;
