import React from "react";
import { NavBar, Hero, Categories } from "../../components";
import "./home.css";
import "../shared.css";
function Home() {
  document.title = "SnowStore";
  return (
    <>
      <NavBar />
      <Hero />
      <Categories />
    </>
  );
}

export { Home };
