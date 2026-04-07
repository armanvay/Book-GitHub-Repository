import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const DataCardShow = ({book}) => {
    
    return (
      <Link to={`/Details/${book.bookId}`} className=" card bg-base-100 mb-10 shadow-sm">
        <figure className="p-7 flex justify-center bg-base-200">
          <img
            className="rounded-2xl h-70"
            src={book.image}
            alt={book.bookName}
          />
        </figure>
        <div className="card-body ">
          <div className="flex gap-3">
            {book.tags.map((tag, i) => (
              <div
                key={i}
                className="badge text-[#23BE0A] bg-green-50 font-bold border border-green-500"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="card-title">
            <h2 className="font-bold text-xl">{book.bookName}</h2>
          </div>
          <p className="font-bold ">{book.author}</p>
          <div className="card-actions justify-between  border-t border-dashed pt-4 border-gray-300">
            <div className="badge font-semibold ">{book.category}</div>
            <div className="badge font-semibold ">
              {book.rating} <CiStar></CiStar>
            </div>
          </div>
        </div>
      </Link>
    );
};

export default DataCardShow;