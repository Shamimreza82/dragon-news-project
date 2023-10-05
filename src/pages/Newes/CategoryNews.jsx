import React from "react";

const CategoryNews = ({ findCateNews }) => {
  console.log(findCateNews);
  return (
    <div className="card card-compact bg-base-100 shadow-xl mt-6">
      <figure>
        <img
          src={findCateNews.image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{findCateNews.title}</h2>
        <div className="card-actions justify-end">
        <p>{findCateNews.published_date }</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryNews;
