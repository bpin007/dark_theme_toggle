import { useContext, useState } from "react";
import "./App.css";
import Home from "./components/home";
import Profile from "./components/profile";
import About from "./components/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { Theme, ThemeProvider, useTheme } from "./themeContext";

function App() {
  const { toggleTheme, theme } = useTheme();
  console.log({ toggleTheme, theme });
  // const theme = useContext(Theme);
  // console.log(theme);
  return (
    <>
      {/* <h1>Haii Iam Bipin</h1> */}
      {/* <Home />
      <Profile />
      <About /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
