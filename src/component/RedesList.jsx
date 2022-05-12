import React from "react";
import Redes from "./Redes";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
const redes = [
  {
    name: "facebook",
    icon: faFacebookF,
  },
  {
    name: "twitter",
    icon: faTwitter,
  },
  {
    name: "instagram",
    icon: faInstagram,
  },
];

const RedesList = () => {
  return (
    <div className="d-flex justify-content-space-beetwen footer-text-addres-container">
      {redes.map((item) => (
        <Redes key={item.name} iconSocial={item.icon} />
      ))}
    </div>
  );
};

export default RedesList;
