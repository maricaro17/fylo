import React from "react";

const Card = ({ image, title, parrafo }) => {
  return (
    <div className="col-md-6 my-4">
      <div className="text-center">
        <div className="mb-4">
          <img src={image} alt={title} />
        </div>
        <div className="w-60 px-6 m-auto">
          <h1 className="mb-4 fs-5 fw-bold ">{title}</h1>
          <p className="fs-6">{parrafo}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
