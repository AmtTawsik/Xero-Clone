import { Checkbox, Label } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <section class="">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-8 w-full">
          <form action="" className="w-full">
            <div class="grid gap-1 mb-6 md:grid-cols-2 mt-5">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="f-name"
                  id="f-name"
                  class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-10/12 w-full p-2.5 placeholder-gray-600"
                  placeholder="Abdullah"
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  name="l-name"
                  type="text"
                  id="l-name"
                  class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-10/12 w-full p-2.5 placeholder-gray-600"
                  placeholder="Mubin"
                />
              </div>
            </div>
            <div class="grid gap-1 mb-6 md:grid-cols-2 mt-5">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-10/12 w-full p-2.5 placeholder-gray-600"
                  placeholder="mubin@gmail.com"
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  name="number"
                  type="number"
                  id="number"
                  class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-10/12 w-full p-2.5 placeholder-gray-600"
                  placeholder="+9178454865"
                />
              </div>
            </div>
            <div>
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 md:w-11/12 w-full text-sm bg-gray-200 border border-gray-300 text-gray-600  rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <Link to="/signup/2">
              <button
                type="button"
                class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 my-11 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Send message
              </button>
            </Link>
          </form>
        </div>

        <div class="lg:mt-0 lg:col-span-4">
          <div className="text-gray-600 text-center  mb-5">
            <div className="flex justify-center text-primary-600   py-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-3xl">Company information:</h2>
            <p className="text-lg md:text-xl">Themesberg LLC</p>
            <p className="text-lg">Tax id: USXXXXXX</p>
          </div>

          <div className="text-gray-600 text-center mb-5">
            <div className="flex justify-center text-primary-600   py-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-3xl">Address:</h2>
            <p className="text-lg md:text-xl">SILVER LAKE, United States 1941 Late Avenue</p>
            <p className="text-lg">Zip Code/Postal code:03875</p>
          </div>

          <div className="text-gray-600 text-center">
            <div className="flex justify-center text-primary-600   py-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-3xl">Call us:</h2>
            <p className="text-lg md:text-xl">Call us to speak to a member of our team.</p>
            <p className="text-lg">+1 (646) 786-5060</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
