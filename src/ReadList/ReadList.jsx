import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStorage } from '../Utility/Utility';
import Book from '../Book/Book';


const ReadList = () => {
    const [data, setData] = useState([]);
    
    const [sort, setSort] = useState("");
    const loaderData = useLoaderData() || [];

    useEffect(() => {

        const getStoredData = getStorage();
        const convertedData = getStoredData.map(id => parseInt(id));
        const dataFilter = loaderData.filter(book => convertedData.includes(book.bookId))
        setData(dataFilter);

    }, []);
    
    const shortBtnHandle = (take) => {
        setSort(take)  
     
        if (take === "pages") {
            const sorted = [...data].sort((a, b) => { return a.totalPages - b.totalPages });
            setData(sorted);
            
        }

        if (take === "Ratings") {         
            const sorted = [...data].sort((a, b) => { return a.rating - b.rating });
            setData(sorted);
        }
    }

    return (
        <div>

<div className="dropdown my-4 flex justify-center dropdown-bottom">
  <div tabIndex={0} role="button" className="btn m-1">Short by : {sort? sort:" "} ⬇️</div>
  <ul tabIndex={0} className="dropdown-content menu bg-[#00a6ed] rounded-box z-1 w-52 p-2 shadow-sm">
    <li className='font-semibold text-white' onClick={()=> shortBtnHandle("Pages")}><a>Short By Pages</a></li>
    <li className='font-semibold text-white' onClick={() => shortBtnHandle("Ratings")}><a>Short By Rating </a></li>
  </ul>
</div>
  
            
    <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wishlist</Tab>
    </TabList>
    <TabPanel>
                    <h2 className='font-bold border-2 w-40 text-center p-2 text-[1rem] border-emerald-300'>Read List : {data.length}</h2>
                    <div className=' grid lg:grid-cols-3 my-6  sm:grid-cols-2 gap-4'>
                        
                         
                    {
                        data.map ((a) => <Book key= {a.bookId} book = {a} ></Book>)
                    }
                   </div>
    </TabPanel>
    <TabPanel>
      <h2>Wishlist</h2>
    </TabPanel>
  </Tabs>
            
        </div>
    );
};

export default ReadList;