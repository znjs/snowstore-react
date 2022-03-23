import React from "react";
import { NavBar, Hero, Categories } from "../../components";
import "./home.css";
document.title = "SnowStore-react";
function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Categories />
    </>
  );
}

export { Home };
