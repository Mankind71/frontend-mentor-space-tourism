import React from "react";
import "./home.css";

const Home = () => {
  return (
    <main className="bgHome topSpace text-center d-flex flex-column align-items-center justify-content-between flex-lg-row ">
      <div className="infoCon">
        <h1 className="text-title">So, you want to travel to</h1>
        <div className="space">Space</div>
        <p className="text">
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-center mx-auto explore rounded-circle">
        <p>EXPLORE</p>
      </div>
    </main>
  );
};

export default Home;
