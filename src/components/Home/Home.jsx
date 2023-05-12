import React, { useState } from "react";
import HowWeWork from "./HowWeWork";
import WhyWeAreBest from "./WhyWeAreBest";
import ServiceForHouseHold from "./ServiceForHouseHold";
import Cooperate from "./Cooperate";
import HeroBar from "./HeroBar";

function Home() {

  return (
    <>
      <div>
        <HeroBar/>
        <div>
          <HowWeWork/>
          <WhyWeAreBest/>
          {/* <ServiceForHouseHold/> */}
          <Cooperate/>
        </div>
      </div>
    </>
  );
}

export default Home;