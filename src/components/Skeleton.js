import React from "react";
import "./skeleton.css";
function Skeleton({ type }) {
  const counter = 20;
  const headcounter = 1;
  const RowSkeleton = () => {
    return (
      <div className="Skeleton">
        <div className="back"></div>
      </div>
    );
  };
  const LargeRowSkeleton = () => {
    return (
      <div className="LargeSkeleton">
        <div className="Largeback"></div>
      </div>
    );
  };
  const HeadingSkeleton = () => {
    return (
      <div className="HeadingSkeleton">
        <div className="Headingback"></div>
      </div>
    );
  };
  const BannerHeadings = () => {
    return (
      <div className="BannerHeading">
        <div className="bannerhead"></div>
        <div className="bannerbuttons">
          <div className="bannerbutton"></div>
          <div className="bannerbutton"></div>
        </div>
        <div className="description"></div>
      </div>
    );
  };
  if (type === "row") return Array(counter).fill(<RowSkeleton />);
  else if (type === "largeRow")
    return Array(counter).fill(<LargeRowSkeleton />);
  else if (type === "heading")
    return Array(headcounter).fill(<HeadingSkeleton />);
  else if (type === "bannerHeading")
    return Array(headcounter).fill(<BannerHeadings />);
}

export default Skeleton;
