import React from "react";
import { Link } from "react-router-dom";

const SignUp1 = () => {
  return (
    <div className="w-8/12 mx-auto my-20 md:mt-16 pb-1 md:mb-16">
      <Link to="/" className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <p className="text-lg">Back</p>
      </Link>
      <h2 className="text-2xl md:text-5xl font-bold lg:pr-40 md:pr-10 my-10 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16 -mt-2 transform rotate-90"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          />
        </svg>
        Have you been sent to work temporarily in the UK by your overseas
        employer?
      </h2>
      <p className="text-lg my-5">
        This is sometimes known as being seconded to work in the UK.
      </p>
      <Link to="/signup/1" className="flex">
        <div className="mr-5 flex items-center">
          <input
            type="radio"
            name="radio1"
            value="value"
            style={{ height: "40px", width: "40px" }}
            required
          />
          <label className="text-2xl ml-2" htmlFor="radio1">
            Yes
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="radio1"
            value="value"
            style={{ height: "40px", width: "40px" }}
          />
          <label className="text-2xl ml-2" htmlFor="radio1">
            No
          </label>
        </div>
      </Link>
      <div className="mt-5">
        <Link to="/signup/1">
          <button
            type="button"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp1;
