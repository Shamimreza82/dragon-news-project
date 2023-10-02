import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrakingNews = () => {
  return (
    <div className="flex bg-slate-200 p-2 my-3 rounded-md">
      <button className="btn btn-secondary">Breackin News</button>
      <Marquee pauseOnHover ={true} speed={100}>
        <Link> I can be a React component, multiple React components, or just some
        text....</Link>
        <Link> I can be a React component, multiple React components, or just some
        text.....</Link>
      </Marquee>
    </div>
  );
};

export default BrakingNews;
