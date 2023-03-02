import React from 'react';
import { Link } from 'react-router-dom';

const SignUp8 = () => {
    return (
        <div className="w-8/12 mx-auto my-2">
      <Link to='/signup/6' className="flex items-center">
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
      Do you know your National Insurance number?
      </h2>
      <p className="text-lg lg:pr-40 md:pr-10 my-5">
      You have a National Insurance number to make sure your National Insurance contributions and tax are recorded against your name only. <br /><br />
      You can find your National Insurance number:
      </p>
      <ul className="list-disc text-lg my-5 ml-5">
        <li>on your payslip</li>
        <li>on your P60</li>
        <li>on letters about your tax, pension or benefits</li>
        <li>in the National Insurance section of your personal tax account</li>
      </ul>
      <p className="text-lg lg:pr-40 md:pr-10 my-5">
      It’s made up of 2 letters, followed by 6 numbers and ends with the letter A, B, C or D. For example, ‘QQ 12 34 56 C’.
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
      <Link to='/signup/8'><button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Continue</button></Link>
      </div>
    </div>
    );
};

export default SignUp8;