// import React from "react";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPassword";
import Confirm from "./Pages/Confirm";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SetNewPassword from "./components/SetNewPassword";
import SignUp from "./components/SignUp";
import ResetSuccessful from "./components/ResetSuccessful";
import Community from "./Pages/Community";
import OneCommunity from "./Pages/OneCommunity";
import AllCommunities from "./community-feature/AllCommunities";
import CommunityList from "./community-feature/CommunityList";
import YourCommunites from "./community-feature/YourCommunites";
import About from "./community-feature/A-Community-Page/About";
import {  DataContext } from "./contexts/DataContext";

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
