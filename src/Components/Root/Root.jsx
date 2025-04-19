import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router';
import Footer from './Header/Footer/Footer';

const Root = () => {
    return (
        <div className='inter max-w-6xl mx-auto space-y-12'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;