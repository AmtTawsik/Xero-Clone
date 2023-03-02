import { Button, Table } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-center text-gray-50 text-4xl font-bold">
        Buy crypto at true cost
      </h2>
      <p className="text-center text-gray-200 text-xl md:px-24 my-5">
        Buy and sell 250+ cryptocurrencies with 20+ fiat currencies using bank
        transfers or your credit/debit card.
      </p>
      <Table className="my-10">
        <div className="flex items-center justify-between mx-5 mx-auto my-2">
          <h3 className="text-gray-100 font-bold text-2xl">
            Bitcoin <span className="text-gray-500">BTC</span>
          </h3>
          <p className="text-gray-100 font-bold text-2xl">$38,716.43</p>
          <p className="text-red-600 text-lg">-10.82%</p>
          <p className="text-gray-100 text-lg">$729,729,745,340.82</p>
          <div>
            <Button size="sm">Trade</Button>
          </div>
        </div>
        <hr />

        <div className="flex items-center justify-between mx-5 mx-auto my-2">
          <h3 className="text-gray-100 font-bold text-2xl">
            Ethereum <span className="text-gray-500">ETH</span>
          </h3>
          <p className="text-gray-100 font-bold text-2xl">$2,818.15</p>
          <p className="text-red-600 text-lg">-13.88%</p>
          <p className="text-gray-100 text-lg">$333,396,739,452.23</p>
          <div>
            <Button size="sm">Trade</Button>
          </div>
        </div>
        <hr />

        <div className="flex items-center justify-between mx-5 mx-auto my-2">
          <h3 className="text-gray-100 font-bold text-2xl">
            Cardano <span className="text-gray-500">ADA</span>
          </h3>
          <p className="text-gray-100 font-bold text-2xl"> $1.22</p>
          <p className="text-green-600 text-lg">+3.76%</p>
          <p className="text-gray-100 text-lg">$40,465,663,783.16</p>
          <div>
            <Button size="sm">Trade</Button>
          </div>
        </div>
        <hr />

        <div className="flex items-center justify-between mx-5 mx-auto my-2">
          <h3 className="text-gray-100 font-bold text-2xl">
            Dogecoin <span className="text-gray-500">DOGE</span>
          </h3>
          <p className="text-gray-100 font-bold text-2xl">$0.153765</p>
          <p className="text-green-600 text-lg">+8.39%</p>
          <p className="text-gray-100 text-lg">$729,729,745,340.82</p>
          <div>
            <Button size="sm">Trade</Button>
          </div>
        </div>
        <hr />

        <div className="flex items-center justify-between mx-5 mx-auto my-2">
          <h3 className="text-gray-100 font-bold text-2xl">
            Polkadot <span className="text-gray-500">DOT</span>
          </h3>
          <p className="text-gray-100 font-bold text-2xl">$22.24</p>
          <p className="text-red-600 text-lg">-13.17%</p>
          <p className="text-gray-100 text-lg">$21,710,483,995.43</p>
          <div>
            <Button size="sm">Trade</Button>
          </div>
        </div>
        <hr />
      </Table>
      <h4 className="text-gray-300 text-2xl text-center">
        Sign up now to build your own portfolio for free!
      </h4>
      <Link to='/signup' className="flex justify-center mt-4">
        <Button size="sm">Sign Up Now</Button>
      </Link>
    </div>
  );
};

export default CTA;
