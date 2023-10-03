import React from "react";
import { FaBookmark, FaCodeFork, FaEye } from "react-icons/fa6";
import PropTypes from 'prop-types';

const News = ({ news }) => {
    console.log(news);
  const { title, author, image_url, details,total_view, rating  } = news;
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
      <div className="">
        <p className="font-bold py-2">{title}</p>
        <img src={image_url} alt="" />
        <p className="py-3">
          {all}...
          <button className="text-red-400 ml-3">Read More</button>
        </p>
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
