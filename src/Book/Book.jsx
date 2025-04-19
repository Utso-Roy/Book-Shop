import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookName, author, bookId ,image, tags, rating, category, } =
    book;
    return (
        <Link to={`/bookDetails/${bookId}`}>
             <div className="">
      <div className="card bg-white p-3  shadow-sm">
        <figure className="p-4 bg-[#f3f3f3] w-[290px]  mx-auto rounded-[6px]">
          <img className="w-[140px] h-[180px] " src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className=" flex justify-between">
            {tags.map((tag) => (
              <button>{tag}</button>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <h3>By : {author}</h3>
          <div className=" justify-end">
            <div className="flex justify-between border-t-1 p-1 border-dashed">
              <h4 className="font-semibold">{category}</h4>
              <div className="flex gap-1 ">
                <p className="my-2">{rating}</p>
                <button className="btn">
                  <CiStar size={20} />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
            


        </Link>   
  );
};

export default Book;
