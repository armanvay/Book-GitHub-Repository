import React, { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext()



const GlobalProvider = ({ children }) => {
  const [redBook, setRedBook] = useState([]);
  const [wishBook, setWishBook] = useState([]);

  const handelredBook = (seletedBook) => {
    // console.log("seleted book",seletedBook)


    // chck korsi jy a card ta ki wishList asa ki na 
        const isExidtBookReadList = wishBook.find(
          (book) => book.bookId == seletedBook.bookId,
        );

        if (isExidtBookReadList) {
          alert("Thsi book is already In Wish  List ");
          return;
        }


    const isExidtBook=redBook.find(book =>book.bookId ==seletedBook.bookId);

    if(isExidtBook){
        alert('This Book Exid')
        return
    }
    else{
        setRedBook([...redBook,seletedBook]);
        alert("This book add ")
    }
    // console.log(redBook,setRedBook)

  };




  const handelwishlist = (seletedBook) => {
    // console.log("seleted book",seletedBook)

    // chck korsi jy a card ta ki wishList asa ki na 
    const isExidtBookReadList=redBook.find(book =>book.bookId ==seletedBook.bookId)
    if(isExidtBookReadList){
        alert("Thsi book is already In Read List ")
        return
    }





    const isExidtBook = wishBook.find(
      (book) => book.bookId == seletedBook.bookId,
    );

    if (isExidtBook) {
      alert("This Book Exid");
      return;
    } 
    
    
    else {
      setWishBook([...wishBook, seletedBook]);
      alert("This book add ");
    }
    // console.log(wishBook, seletedBook);
  };



  const data = {
    handelredBook,
    redBook,
    setRedBook,
    // wish List golo 
    wishBook,
    setWishBook,
    handelwishlist,
  };

  return (
  <GlobalContext.Provider value={data}>
    {children}
  </GlobalContext.Provider>
    
  )
};

export default GlobalProvider;