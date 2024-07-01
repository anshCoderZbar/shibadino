import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { ASSETS } from "assets";
import "styles/layout.css";
import { useEffect } from "react";

export const Header = () => {
  const [active, setActive] = useState(false);
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
        defaultLanguage: "en",
        disableLanguageSelector: true,
      },
      "google_translate_element",
    );
  };

  useEffect(() => {
    // Check if the script has already been added
    if (!window.googleTranslateElementInit) {
      // Create a script element
      const addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",
      );

      // Check if there's already a script element with the same src
      const existingScript = document.querySelector(
        `script[src="${addScript.src}"]`,
      );
      if (existingScript) {
        // If a script with the same src exists, remove it
        existingScript.remove();
      }

      // Append the script to the body
      document.body.appendChild(addScript);

      // Assign the function to the window object
      window.googleTranslateElementInit = googleTranslateElementInit;

      // Clean up function to remove the script when component unmounts
      return () => {
        document.body.removeChild(addScript);
        delete window.googleTranslateElementInit;
      };
    }
  }, []);

  return (
    <>
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
              <div id="google_translate_element"></div>
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
    </>
  );
};
