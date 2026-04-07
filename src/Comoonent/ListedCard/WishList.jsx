import React, { useContext } from 'react';
import { GlobalContext } from '../CustomApiHook/CustomApiHook';
import DesignWishList from './DesignReadListOrWishList/DesignWishList';
import { HiOutlineInbox } from 'react-icons/hi';
import { Link } from 'react-router';

const WishList = () => {
   const { wishBook } = useContext(GlobalContext);
    // console.log(wishBook);


    return (
      <div>
        {wishBook.length == 0 ? (
          <div className="flex flex-col items-center justify-center min-h-100 border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50 text-center p-10">
            <div className="bg-white p-6 rounded-full shadow-sm mb-4">
              <HiOutlineInbox className="text-6xl text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              No Data Found
            </h2>
            <p className="text-gray-500 max-w-xs">
              Oops! It looks like there are no books in this list at the moment.
            </p>
            <Link
              to={"/"}
              className="mt-6 text-green-600 font-semibold hover:underline"
            >
              Go To Home
            </Link>
          </div>
        ) : (
          <>
            {wishBook.map((card, i) => (
              <DesignWishList key={i} card={card}></DesignWishList>
            ))}
          </>
        )}
      </div>
    );
};

export default WishList;