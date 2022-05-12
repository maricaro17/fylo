import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Redes = ({ iconSocial }) => {
  return (
    <div className="redes d-flex">
      <FontAwesomeIcon icon={iconSocial} />
    </div>
  );
};

export default Redes;
