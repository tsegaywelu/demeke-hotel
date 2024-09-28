import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Signin } from "./pages/Signin";
import Signout from "./pages/Signout";
import { Profle } from "./pages/Profle";
import Signup from "./pages/Signup";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signout" element={<Signout />} />
        <Route path="profile" element={<Profle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
