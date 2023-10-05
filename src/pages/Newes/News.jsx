import React, { useState } from "react";
import { FaBookmark, FaCodeFork, FaEye } from "react-icons/fa6";
import PropTypes from 'prop-types';
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const News = ({ news }) => {
  const [isShow, setIsShow] = useState(true)
  const {_id, title, author, image_url, details,total_view, rating  } = news;
  const all = details.slice(0, 350);

  return (
    <div className="border lg:min-h-[400px] my-3">
      <div className="flex bg-slate-200 justify-between items-center pr-3">
        <div className="flex gap-4   py-1 pl-2">
          <img className="w-9 rounded-full" src={author.img} alt="" />
          <div>
            <p>{author.name}</p>
            <small>{author.published_date}</small>
          </div>
        </div>
        <div className="flex space-x-3">
          <FaBookmark></FaBookmark>
          <FaCodeFork></FaCodeFork>
        </div>
      </div>
      <div >
        <Marquee>
        <p className="font-bold py-">{title}</p>
        </Marquee>
        <img className="hover:scale-[1.20] duration-300 relative z-50" src={image_url} alt="" />
        {
          isShow ? <p className="py-3">
          {all}...
        </p> : <p className="py-3">
          {details}
        </p>
        }
       <div className="flex justify-between">
            <button onClick={()=> setIsShow(!isShow)} className="text-red-500">Read More</button>
            <Link className="text-green-600 font-bold" to={`/newsdetails/${_id}`} >Detalis page</Link>
       </div>
          
      
      </div>
      <hr className="w-[80%] mx-auto" />
      <div className="flex items-center py-4 justify-between">
        <div className="flex items-center gap-3">
          <div className="rating rating-md pl-3">
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>{rating.number}</p>
        </div>
        <div className="flex items-center gap-3 pr-3">
            <FaEye></FaEye>
            <p>{total_view}</p>
        </div>
      </div>
    </div>
  );
};

News.propTypes = {
  news: PropTypes.object  
}



export default News;
