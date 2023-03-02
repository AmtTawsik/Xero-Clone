import React from 'react';
import right from "../../Media/right-1.svg";

const Self = () => {
    return (
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className=" place-self-center lg:col-span-6 md:hidden">
        <img className="w-[600px] h-[524px]" src={right} alt="" />
      </div>
      <div className="mr-auto place-self-center lg:col-span-6">
        <h2 className="text-5xl font-bold">Automated online payroll</h2>
        <p className="text-2xl my-5 mb-10 text-gray-400">
          Pay employees in just a few clicks using Xero's payroll software.
          Payroll data updates your accounts automatically.
        </p>
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
          <p>Automatic tax, pensions and leave calculations</p>
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
          <p>Flexible pay calendars, tax and pay rates</p>
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
          <p>Email payslips and let employees view them online</p>
        </div>
      </div>
      <div className=" place-self-center lg:col-span-6 hidden md:flex">
        <img className="w-[600px] h-[524px]" src={right} alt="" />
      </div>
    </div>
    );
};

export default Self;