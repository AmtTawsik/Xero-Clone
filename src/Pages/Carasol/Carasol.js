import { Carousel } from "flowbite-react";
import React from "react";

const Carasol = () => {
  const left = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
  const right = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-8/12 mx-auto">
      <Carousel leftControl={left} rightControl={right}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Double_Decker_Victorian_Carousel_Ride_at_Paultons_Park.jpg/800px-Double_Decker_Victorian_Carousel_Ride_at_Paultons_Park.jpg"
          alt="..."
        />
        <img
          src="https://media.sproutsocial.com/uploads/2022/04/Instagram-Carousels.jpg"
          alt="..."
        />
        <img
          src="https://wowslider.com/sliders/demo-76/data1/images/purse407176_1280.jpg"
          alt="..."
        />
        <img
          src="https://wowslider.com/sliders/demo-76/data1/images/camera349948_1280.jpg"
          alt="..."
        />
        <img
          src="https://thumbs.dreamstime.com/b/scenic-nature-landscape-path-near-lake-forest-path-tunnel-trees-near-lake-scenic-nature-autumn-landscape-panorama-view-115358410.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default Carasol;
