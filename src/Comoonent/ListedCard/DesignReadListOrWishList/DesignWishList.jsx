import React from 'react';
import { HiOutlineLocationMarker, HiOutlineUsers } from "react-icons/hi";
import { RiFileList2Line } from "react-icons/ri";

const DesignWishList = ({card}) => {
     const {
       bookName,
       author,
       image,
       tags,
       yearOfPublishing,
       publisher,
       totalPages,
       category,
       rating,
     } = card;
    return (
         <div className="flex flex-col md:flex-row items-center gap-6 p-6 border rounded-2xl bg-white shadow-sm mb-6 mt-10">
               <div className="w-full md:w-60 h-60 bg-gray-100 rounded-2xl flex items-center justify-center p-8">
                 <img src={image} alt={bookName} className="h-full object-contain" />
               </div>
       
               <div className="flex-1 w-full">
                 <h2 className="text-2xl font-bold text-gray-900 mb-2">{bookName}</h2>
                 <p className="text-gray-700 font-medium mb-4">By : {author}</p>
       
                 <div className="flex flex-wrap items-center gap-4 mb-4">
                   <div className="flex items-center gap-3">
                     <span className="font-bold text-gray-900">Tag</span>
                     {tags.map((tag, index) => (
                       <span
                         key={index}
                         className="text-green-500 bg-green-50 px-3 py-1 rounded-full text-sm font-semibold"
                       >
                         #{tag}
                       </span>
                     ))}
                   </div>
                   <div className="flex items-center gap-2 text-gray-600">
                     <HiOutlineLocationMarker className="text-xl" />
                     <span>Year of Publishing: {yearOfPublishing}</span>
                   </div>
                 </div>
       
                 <div className="flex flex-wrap items-center gap-6 mb-4 text-gray-500 border-b pb-4">
                   <div className="flex items-center gap-2">
                     <HiOutlineUsers className="text-xl" />
                     <span>Publisher: {publisher}</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <RiFileList2Line className="text-xl" />
                     <span>Page {totalPages}</span>
                   </div>
                 </div>
       
                 <div className="flex flex-wrap items-center gap-3">
                   <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                     Category: {category}
                   </span>
                   <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                     Rating: {rating}
                   </span>
                   <button className="bg-green-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors">
                     View Details
                   </button>
                 </div>
               </div>
             </div>
    );
};

export default DesignWishList;