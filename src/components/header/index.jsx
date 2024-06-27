import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { ASSETS } from "assets";
import "styles/layout.css";

export const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <header className="header_top">
      <div className="header_cloudes">
        <img src={ASSETS.CLOUDES} alt="clouds" />
      </div>
      <div className="container-fluid ">
        <div className="header_layout ">
          <div className="header_logo">
            <img src={ASSETS.LOGO} alt="logo" />
          </div>
          <div className={`header_menu ${active ? "menu_active" : ""}`}>
            <ul className="">
              <li>
                <a style={{ "--i": "0" }} href="/">
                  Header
                </a>
              </li>
              <li>
                <a style={{ "--i": "1" }} href="/">
                  About Us
                </a>
              </li>
              <li>
                <a style={{ "--i": "2" }} href="/">
                  Roadmap
                </a>
              </li>
              <li>
                <a style={{ "--i": "3" }} href="/">
                  Tokenomics
                </a>
              </li>
              <li>
                <a style={{ "--i": "4" }} href="/">
                  Whitepaper
                </a>
              </li>
              <li>
                <a style={{ "--i": "5" }} href="/">
                  Buy
                </a>
              </li>
            </ul>
          </div>
          <div className="header_icons">
            <ul>
              <li>
                <BsTwitterX />
              </li>
              <li>
                <FaTelegramPlane />
              </li>
              <li className="head_menubar" onClick={() => setActive(!active)}>
                <GiHamburgerMenu />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
