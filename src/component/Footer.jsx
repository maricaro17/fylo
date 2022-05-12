import React from "react";
import MenuFooterList from "./MenuFooterList";
import RedesList from "./RedesList";
import { columnUno, columnDos } from "../helpers/menuData";
import FooterText from "./FooterText";
import Addres from "./Addres";
import Logo from "./Logo";


const Footer = () => {
  return (
    <div className="d-flex footer flex-column">
      <Logo />
      <div className="row justify-content-between">
        <div className="col-md-4">
          <FooterText />
        </div>
        <div className="col-md-2">
          <Addres />
        </div>
        <div className="col-md-2">
          <MenuFooterList items={columnUno} />
        </div>
        <div className="col-md-2">
          <MenuFooterList items={columnDos} />
        </div>
        <div className="col-md-2">
          <RedesList />
        </div>
      </div>
    </div>
  );
};

export default Footer;
