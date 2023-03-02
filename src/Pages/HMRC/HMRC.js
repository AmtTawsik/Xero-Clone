import React from "react";
import img from "../../Media/hrmc-left.svg";

const HMRC = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="hidden md:block mr-auto place-self-center lg:col-span-6">
          <h1 class="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-4xl text-gray-700 md:pr-52">
            HMRC requirements sorted
          </h1>
          <p class="max-w-2xl mb-6 text-gray-500 lg:mb-8 text-2xl font-semibold dark:text-gray-400 md:pr-36">
            Xero payroll software is HMRC-recognised. Simplify compliance with
            HMRC reporting requirements.
          </p>
          
          <div className="flex">
            <div className="text-primary-700 mr-3">
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
            <p>Keep accurate digital records about pay</p>
          </div>
          <div className="flex">
            <div className="text-primary-700 mr-3">
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
            <p>Submit payment and deduction details to HMRC each payday</p>
          </div>
        </div>
        <div class="lg:mt-0 lg:col-span-6 lg:flex">
          <img src={img} alt="mockup" />
        </div>

        <div class="block md:hidden mr-auto place-self-center lg:col-span-6 mt-5">
          <h1 class="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-4xl text-gray-700 md:pr-52">
            HMRC requirements sorted
          </h1>
          <p class="max-w-2xl mb-6 text-gray-500 lg:mb-8 text-2xl font-semibold dark:text-gray-400 md:pr-36">
            Xero payroll software is HMRC-recognised. Simplify compliance with
            HMRC reporting requirements.
          </p>
          
          <div className="flex">
            <div className="text-primary-700 mr-3">
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
            <p>Keep accurate digital records about pay</p>
          </div>
          <div className="flex">
            <div className="text-primary-700 mr-3">
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
            <p>Submit payment and deduction details to HMRC each payday</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HMRC;
