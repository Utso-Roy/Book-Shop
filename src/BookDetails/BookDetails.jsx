import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { setStorage } from '../Utility/Utility';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal)



const BookDetails = () => {
  const { id } = useParams()
    const parseConvertData = parseInt(id)
  const loaderData = useLoaderData() || [];
  const findData = loaderData.find(matchData => matchData.bookId === parseConvertData)
    const {  bookName, bookId, author,publisher,totalPages ,image, tags,review, rating, category, yearOfPublishing} = findData
  const handelmarkAsRead = (id) => {
    toast("Wow so easy!")

    MySwal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
       setStorage(id)

        }
    return (
        <div>

<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
                        <h1 className="text-4xl font-bold">{bookName}</h1>
                        <h3 className='my-2'>By : {author}</h3>
                        <h2 className='font-semibold border-t-1 border-dashed p-2'> {category}</h2>
                      <p className='border-t-1 border-dashed p-1 my-3'>  <span className='  font-bold'> Review </span> {review} </p>

                        <div >
                           <p className='font-semibold mr-5'> Tag : {
                                tags.map(tag => <button className=' text-[#28ca28] btn mr-10'> {tag}</button> )
                            }</p>
                        </div>
                        <ToastContainer />
                        <div className='my-5'>
                            <p>Number of Pages : <span className='font-semibold'> {totalPages} </span>  </p>
                            <p>Publisher : <span className='font-semibold'> {publisher}</span> </p>
                            <p> Year of Publishing : <span className='font-semibold'>{yearOfPublishing}</span> </p>
                            <p>Rating : <span className='font-semibold'>  {rating }</span></p>



                        </div>

                        <div className='flex gap-4'>

                        <button onClick={()=> handelmarkAsRead(bookId)} className="btn btn-outline btn-success">Mark As Read</button>
                        <button className="btn btn-outline btn-success">Wishlist</button>

                        </div>
     
    </div>
  </div>
</div>
            
        </div>
    );
};

export default BookDetails;