import React from 'react';
import Bennar from '../Bennar/Bennar';
import Books from '../Routes/Error/Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const loadData = useLoaderData()
    return (
        <div>
            <Bennar></Bennar> 
          <Books loadData={loadData}></Books>  
        </div>
    );
};

export default Home;