import React from "react";
import RecentWorks from "./Recent";
import Archive from "./Archive";
import Navbar from "./Navbar";

const Artworks = () => {
  return (
    <div className="artworks-page">
      <h1>Artworks</h1>
      <Navbar />
      <RecentWorks />
      <Archive />
    </div>
  );
};

export default Artworks;
