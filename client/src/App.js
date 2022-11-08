import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UpdateUser from "./components/UpdateEmployeer";
import Login from "./components/Login";
import Signup from "./components/Signup";

import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import PrivateRouter from "./components/PrivateRouter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
    <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/:id" element={<UpdateUser />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
