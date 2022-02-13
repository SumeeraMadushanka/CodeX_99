import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Team from "./Components/Team/Teams";

function App() {
  return (
    <>
     
      <div className="bg-gradient-to-r from-cyan-500 bg-emerald-500 to-blue-500 w-full h-screen">
      <NavBar />
        {" "}
        <Home />
      </div>
      <Team/>
      <br/>
      <br/>
    </>
  );
}

export default App;
