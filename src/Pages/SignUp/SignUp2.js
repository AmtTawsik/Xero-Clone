import React from "react";
import { Link } from "react-router-dom";

const SignUp2 = () => {
  return (
    <div className="w-8/12 mx-auto my-10 md:mt-12 md:mb-12">
      <Link to="/signup" className="flex items-center">
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
      <h2 className="text-2xl md:text-5xl font-bold lg:pr-40 md:pr-10 my-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
          />
        </svg>
        Have you received your P45?
      </h2>
      <p className="text-lg lg:pr-40 md:pr-10 my-5">
        Your P45 shows how much you have been paid and how much tax you have
        paid so far in the tax year (6 April to 5 April). <br />
        <br /> You get a P45 from your employer when you stop working for them
      </p>
      <div className="flex">
        <div className="mr-5 flex items-center">
          <input
            type="radio"
            name="radio1"
            value="value"
            style={{ height: "40px", width: "40px" }}
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
      </div>
      <div className="mt-5">
        <Link to="/signup/2">
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

export default SignUp2;
