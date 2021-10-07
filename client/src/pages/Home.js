import React from "react";

import HomeBaner from "../components/HomeBanner";
import MiddleContent from "../components/MiddleContent";
import StartContent from "../components/StartContent";
import CarouselBox from "../components/CarouselBox";
const Home = () => {
  return (
    <div>
      <HomeBaner />
      <StartContent />
      <MiddleContent />
      <CarouselBox />
    </div>
  );
};

export default Home;
