import React from "react";
import Page1 from "./Bison/Page1";
import Page2 from "./Bison/Page2";
import Page3 from "./Bison/Page3";
import Page4 from "./Bison/Page4";
import Page5 from "./Bison/Page5";
import Page6 from "./Bison/Page6";
import Page7 from "./Bison/Page7";

const BisonCaseStudy = () => {
  return (
    <div className="grid grid-cols-1 gap-10">
      {/* { first page } */}
      <Page1 />
      {/* { second page } */}
      <Page2 />
      {/* { Third page } */}
      <Page3 />
      {/* { Fourth page } */}
      <Page4 />
      {/* { Fifth page } */}
      <Page5 />
      {/* { sixth page } */}
      <Page6 />
      {/* { seventh page } */}
      <Page7 />
    </div>
  );
};

export default BisonCaseStudy;
