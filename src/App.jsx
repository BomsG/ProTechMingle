import React from "react";
import Login from "./Components/Login";
import ResetPassword from "./Components/ResetPassword";
import Confirm from "./Components/Confirm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetNewPassword from "./components/SetNewPassword";
import SignUp from "./components/SignUp";
import ResetSuccessful from "./components/ResetSuccessful";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Reset" element={<ResetPassword />} />
          <Route path="/Confirm" element={<Confirm />} />

          <Route path="/set-new-password" element={<SetNewPassword />} />
          <Route path="/reset-successful" element={<ResetSuccessful />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
