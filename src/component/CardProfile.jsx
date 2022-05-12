import React from "react";

const CardProfile = ({ name, image, cargo, cita }) => {
  return (
    <div className="w-330 bg-card-profile card-profile">
      <div>
        <p className="card-profile-text">{cita}</p>
      </div>
      <div className="d-flex">
        <div>
          <img
            className="img-round"
            src={image}
            alt={name}
            width="30px"
            height="30px"
          />
        </div>
        <div className="profile">
          <h1>{name}</h1>
          <p>{cargo}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
