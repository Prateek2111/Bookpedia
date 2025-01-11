import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

const Freebook = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/books");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const filterData = book.filter((data) => data.category === "Free");
  
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10">
        <div>
          <h1 className="heading text-4xl text-center">Free offered Courses</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ea
            voluptatem inventore, ut quo vitae nam numquam odio omnis repellat
            perspiciatis fugit. Libero, at quibusdam.
          </p>
        </div>
        <div>
          <div>
            <Slider {...settings}>
              {filterData.map((item) => (
                <Cards key={item.id} item={item} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Freebook;
