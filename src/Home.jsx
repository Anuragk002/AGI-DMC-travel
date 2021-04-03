import React from "react";
import web from "../src/images/buildings.jpg";
import Commom from "./Commom";
import Details from "./Details";

const Home = () => {
  return (
    <>
      <Commom
        name="find amazing things to do with "
        imgsrc={web}
        visit="/places"
        btname="Get Started"
      />
      <Details />
    </>
  );
};

export default Home;
