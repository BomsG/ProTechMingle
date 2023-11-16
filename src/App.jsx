import { useState } from "react";
import Login from "./Components/Login";
import ResetPassword from "./Components/ResetPassword";
import Confirm from "./Components/Confirm";
import Event from "./Components/Event";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Reset" element={<ResetPassword />} />
          <Route path="/Confirm" element={<Confirm />} />
          <Route path="Event" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
