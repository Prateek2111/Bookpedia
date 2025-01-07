import React from "react";

const Cards = ({item}) => {
  return (
    <div className="mt-10 p-3 my-3 hover:scale-105 transition-transform duration-300">
      <div className="card bg-white-200 md:w-80 shadow-2xl mx-auto">
        <figure>
          <img
            src={item.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline text-white">Rs. {item.price}</div>
            <div className="badge badge-outline hover:bg-blue-500 duration-200 hover:text-white">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
