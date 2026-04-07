import React, { use } from 'react';
import DataCardShow from './DataCardShow';
const dataFromis = fetch("/booksData.json").then((res) => res.json());

const HomeDataLode = () => {
    const book=use(dataFromis)
    // console.log(book,"im data lode")  data promis 


    return (
      <div className="my-12 container mx-auto max-sm:mt-30">
        <h2 className="font-bold text-4xl text-center">Books</h2>
        <div className="grid sm:grid-cols-2 gap-6 md:grid-cols-3 mt-20 ">
         {book.map((book,i) => <DataCardShow key={i} book={book}></DataCardShow>)}
        </div>
      </div>
    );
};

export default HomeDataLode;