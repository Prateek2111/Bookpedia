import React from "react";
import Cards from "./Cards";
import axios from "axios";
import { useState, useEffect } from "react";

const Course = () => {
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

  const handleScroll = () => {
    // Scroll to the element with ID "target-section"
    const targetElement = document.getElementById("target-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-10 items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-white">
          We' re dedicated to providing the best courses for{" "}
          <span className="text-blue-500">you! :)</span>
        </h1>
        <p className="text-gray-500 text-md mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, modi
          eaque soluta eveniet dignissimos ullam! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Omnis adipisci, quis blanditiis rerum
          velit magni reiciendis delectus explicabo sunt praesentium excepturi
          exercitationem deleniti quos dignissimos!
        </p>
        <button
          onClick={handleScroll}
          className="btn bg-blue-500 text-white mt-5"
        >
          View All Courses
        </button>
      </div>
      <div
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10"
        id="target-section"
      >
        {book.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Course;
