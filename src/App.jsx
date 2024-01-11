// import React from "react";
import Login from "./components/screens/Login";
import ResetPassword from "./components/screens/ResetPassword";
import Confirm from "./components/Pages/Confirm";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SetNewPassword from "./components/screens/SetNewPassword";
import SignUp from "./components/screens/SignUp";
import ResetSuccessful from "./components/screens/ResetSuccessful";
import Community from "./components/Pages/Community";
import OneCommunity from "./components/Pages/OneCommunity";
import AllCommunities from "./components/Pages/AllCommunities";
import CommunityList from "./components/Pages/CommunityList";
import YourCommunites from "./components/Pages/YourCommunites";
import About from "./components/Pages/About";
import { DataContext } from "./contexts/DataContext";
import Event from "./components/screens/Event";
import CreateEvent from "./components/screens/CreateEvent";
import Physical from "./components/screens/EventPhysical";
import Virtual from "./components/screens/Virtual";
import Category from "./components/screens/Category";
import Ticket from "./components/screens/Ticket";
import Posts from "./components/screens/Posts";
import EventDetails from "./components/screens/EventDetails";

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
            <Route path="/Event" element={<Event />} />
            <Route path="/EventD" element={<EventDetails />} />
            <Route path="/CreateEvent" element={<CreateEvent />} />
            <Route path="/Physical" element={<Physical />} />
            <Route path="/Virtual" element={<Virtual />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/Ticket" element={<Ticket />} />
            <Route path="/Posts" element={<Posts />} />
          </Routes>
        </BrowserRouter>
      </DataContext>
    </>
  );
}

export default App;
