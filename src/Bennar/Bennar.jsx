import React from 'react';
import Book from './../assets/Bennar.jpg'

const Bennar = () => {
    return (
        <div className="hero bg-base-200 my-6 min-h-screen">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <img
            src={Book}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
            <br />
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Bennar;