import React from "react";
import down from '../../Media/down.webp'

const Subscribers = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold my-10 text-center">Over 3 million subscribers use<br />Xero</h2>
      <p className="text-center text-lg">Small businesses, accountants and bookkeepers locally and across the world trust<br />Xero with their numbers.</p>
      <div><img className="md:w-6/12 w-10/12 mx-auto" src={down} alt="" /></div>
    </div>
  );
};

export default Subscribers;
