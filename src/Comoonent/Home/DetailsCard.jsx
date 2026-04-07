import React, { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { GlobalContext } from "../CustomApiHook/CustomApiHook";

const DetailsCard = () => {
  // This is destasaring
  const { Id } = useParams();

  const lodeData = useLoaderData();

  const acceptData = lodeData.find((card) => card.bookId == Id);
//   console.log(acceptData);

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = acceptData;


// Golbal api 
const { handelredBook, handelwishlist } = useContext(GlobalContext);



  return (
    <div className="flex justify-center items-center p-10 bg-white">
      <div className="flex flex-col md:flex-row border-2 border-blue-400 rounded-lg overflow-hidden max-w-5xl w-full">
        <div className="bg-gray-100 p-12 flex justify-center items-center md:w-1/2">
          <img
            src={image}
            alt={bookName}
            className="shadow-2xl h-96 object-contain"
          />
        </div>

        <div className="p-8 md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {bookName}
            </h1>
            <p className="text-gray-600 font-medium mb-4">{author}</p>

            <hr className="my-4" />
            <p className="text-gray-600 font-medium italic">{category}</p>
            <hr className="my-4" />

            <p className="text-gray-700 leading-relaxed text-sm mb-6">
              <span className="font-bold">Review :</span>
              {review}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <span className="font-bold text-gray-800">Tag</span>
              {tags.map((tag, i) => {
                return (
                  <span
                    key={i}
                    className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {tag}
                  </span>
                );
              })}
            </div>

            <hr className="my-4" />

            <div className="space-y-2 text-sm">
              <div className="flex">
                <p className="w-40 text-gray-500">Number of Pages:</p>
                <p className="font-bold">{totalPages}</p>
              </div>
              <div className="flex">
                <p className="w-40 text-gray-500">Publisher:</p>
                <p className="font-bold">{publisher}</p>
              </div>
              <div className="flex">
                <p className="w-40 text-gray-500">Year of Publishing:</p>
                <p className="font-bold">{yearOfPublishing}</p>
              </div>
              <div className="flex">
                <p className="w-40 text-gray-500">Rating:</p>
                <p className="font-bold">{rating}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button onClick={()=>handelredBook(acceptData)} className="px-8 py-2 border border-gray-300 rounded-lg cursor-pointer font-semibold hover:bg-gray-50 transition-colors">
              Read
            </button>
            <button onClick={()=>handelwishlist(acceptData)}  className="px-8 py-2 bg-cyan-500 text-white rounded-lg cursor-pointer font-semibold hover:bg-cyan-600 transition-colors">
              Wishlist
            </button>
            <Link
              to={"/"}
              className="px-8 py-2 bg-black rounded-2xl text-white cursor-pointer transition-colors"
            >
              Back Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
