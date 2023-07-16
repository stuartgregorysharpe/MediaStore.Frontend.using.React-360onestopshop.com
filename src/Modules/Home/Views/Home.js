import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TopBar from "../../ShareWidgets/TopBar";



const View = () => {
  const dispatch = useDispatch();
  return (
    <div className='bg-violet-900'>
      <TopBar />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm py-5">
        <div className="relative flex">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-full border-0 py-1.5 pl-7 pr-10 bg-violet-950 text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search"
          />
          <div className="bg-red-600 rounded-full absolute inset-y-0 right-0 flex items-center pr-2 mt-1 mb-1 mr-1">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 19l-3.85-3.85"
              />
            </svg>
          </div>
        </div>
      </div>

      <div>
      <iframe width="640" height="360" frameborder="0" src="https://mega.nz/embed/B3UHFRab#yj_l2exzDt0XxNklCHxwUwJVOVYLCTu8gg_dWiIGDTI" allowfullscreen ></iframe>
    <video src='https://mega.nz/embed/B3UHFRab#yj_l2exzDt0XxNklCHxwUwJVOVYLCTu8gg_dWiIGDTI'></video>

      </div>

    </div>
  );
};

export default View;

