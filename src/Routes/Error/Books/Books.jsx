import React, { Suspense } from 'react';
import Book from '../../../Book/Book';

const Books = ({loadData }) => {
      const newBooksData = loadData
    return (
        <div >

            <Suspense fallback={<span className="loading loading-bars loading-lg"></span>}>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2  lg:gap-6  sm:gap-4  my-8  '>

                {
                newBooksData.map(book => <Book  book={book} key = {book.bookId} > </Book>)
                 }
                    
                </div>
               


            </Suspense>
            
            
        </div>
    );
};

export default Books;