import React from "react";
import Page1 from "./Music/Page1";
import Page2 from "./Music/Page2";
import Page3 from "./Music/Page3";
import Page4 from "./Music/Page4";
import Footer from "./Footer";

const MusicCaseStudy = () => {
  return (
    <div className="grid grid-cols-1 gap-10">
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Footer />
    </div>
  );
};

export default MusicCaseStudy;
