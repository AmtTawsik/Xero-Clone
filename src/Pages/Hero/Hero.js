import React from "react";
import { Link } from "react-router-dom";
import img from "../../Media/hero-left.webp";

const Hero = () => {
  return (
    <section class="bg-orange-100 dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="hidden md:block mr-auto place-self-center lg:col-span-6">
          <h1 class="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-5xl dark:text-white md:pr-52">
            Payroll software that doesn’t put you to work
          </h1>
          <p class="max-w-2xl mb-6 text-gray-500 lg:mb-8 text-2xl font-semibold dark:text-gray-400 md:pr-36">
            Payroll software that pays staff on time, every time. Set up payees
            once to make every pay run a walk in the park.
          </p>
          <a
            href="#"
            class="inline-flex items-center mr-3 justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Try Xero for free
          </a>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3  text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            View pricing plans
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div class="lg:mt-0 lg:col-span-6 lg:flex">
          <img src={img} alt="mockup" />
        </div>

        <div class="block md:hidden mr-auto place-self-center lg:col-span-6 mt-5">
          <h1 class="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-5xl dark:text-white md:pr-52">
            Payroll software that doesn’t put you to work
          </h1>
          <p class="max-w-2xl mb-6 text-gray-500 lg:mb-8 text-2xl font-semibold dark:text-gray-400 md:pr-36">
            Payroll software that pays staff on time, every time. Set up payees
            once to make every pay run a walk in the park.
          </p>
          <a
            href="#"
            class="inline-flex items-center mr-3 justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Try Xero for free
          </a>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3  text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            View pricing plans
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="md:flex w-11/12 md:w-10/12 mx-auto">
        <div className="md:w-5/12 mb-10">
          <h3 className="font-bold text-xl">Everything in one place</h3>
          <p className="text-lg text-gray-700">
            Store documents online for quick access. Capture bills and receipts
            via email, or scan files from your mobile.
          </p>
        </div>
        <div className="md:w-5/12 mb-10">
          <h3 className="font-bold text-xl">Everything in one place</h3>
          <p className="text-lg text-gray-700">
            Store documents online for quick access. Capture bills and receipts
            via email, or scan files from your mobile.
          </p>
        </div>
        <div className="md:w-5/12 mb-10">
          <h3 className="font-bold text-xl">Everything in one place</h3>
          <p className="text-lg text-gray-700">
            Store documents online for quick access. Capture bills and receipts
            via email, or scan files from your mobile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
