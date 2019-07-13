import React from "react";
import "./App.css";
import Banner from "./BannerComponent";
import NavBar from "./NavBar.js";
import ServicesContainer from "./ServiceComponent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ServicesContainer />
    </div>
  );
}

export default App;
