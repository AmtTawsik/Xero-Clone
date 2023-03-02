import React from "react";
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <div className="bg-orange-100 px-10 py-20 rounded-md mt-5">
        <div className=" md:flex md:w-10/12 mx-auto">
      <div className="md:w-8/12 mr-5">
        <h2 className="text-5xl  my-5 font-bold">Start using Xero for free</h2>
        <p className=" mb-2 text-3xl text-gray-600">
          Access all Xero features for 30 days, then decide which plan best
          suits your business.
        </p>

        <form className="md:w-6/12 w-full mt-20">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <input
              type="search"
              id="default-search"
              class="block w-full  p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your Email"
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Subscribe
            </button>
          </div>
        </form>
        <p className="text-lg mt-5">Or <Link href="#" class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">compare plans from $25 per month</Link></p>
      </div>
      <div>
      <div className="flex text-lg my-2">
          <div className="text-green-700 mr-3">
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
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <p>Safe and secure</p>
        </div>
      <div className="flex text-lg my-2">
          <div className="text-green-700 mr-3">
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
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <p>Cancel any time</p>
        </div>
      <div className="flex text-lg my-2">
          <div className="text-green-700 mr-3">
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
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <p>24/7 online support</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Subscribe;
