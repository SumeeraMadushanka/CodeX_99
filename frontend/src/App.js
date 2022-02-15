import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Team from "./Components/Team/Teams";
import Services from "./Components/Services/Services";
import Price from "./Components/Price/Price";
import Technologies from "./Components/Technologies/Technologies";
// import About from "./Components/About/About";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      {/* <About/> */}
      <Services/>
      <Price/>
      <Technologies/>
      <Team />
      
    </>
  );
}

export default App;
