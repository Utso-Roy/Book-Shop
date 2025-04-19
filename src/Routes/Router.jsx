import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../Components/Root/Root';
import Error from './Error/Error';
import Home from '../Home/Home';
import About from './About/About';
import BookDetails from '../BookDetails/BookDetails';
  
export const router = createBrowserRouter([
  {
        path: "/",
        Component: Root,
        errorElement: <Error></Error>,
        children: [
        
            {
                index: true,
                loader : ()=> fetch("booksData.json"),
                Component: Home,
                path : "/",
            },
            
            {
                path: "about",
                Component : About

            },

            {
                path: "bookDetails/:id",
                loader : ()=> fetch("booksData.json"),
                Component : BookDetails,

            },
    ]
  },
]);