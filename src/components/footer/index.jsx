import { ASSETS } from "assets";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTelegram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer_border">
        <img src={ASSETS.FOOTER_BORDER} alt="border" />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-12 footer_text">
            <img src={ASSETS.LOGO} alt="logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
              ipsum dolor sit amet,
            </p>
          </div>
          <div className="col-lg-3 col-6">
            <h6 className="footer-heading">Navigate</h6>
            <ul className="footer_list">
              <li>
                <a href="#!">About Us</a>
              </li>
              <li>
                <a href="#!">Features</a>
              </li>
              <li>
                <a href="#!">Roadmap</a>
              </li>
              <li>
                <a href="#!">Community</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-3">
            <h6 className="footer-heading">Contact</h6>
            <ul className="footer_list">
              <li>
                <a href="#!">
                  <FaFacebookF /> Facebook
                </a>
              </li>
              <li>
                <a href="#!">
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a href="#!">
                  <BsTwitter />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#!">
                  <FaTelegram />
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright text-center">
          <p>
            Copyright© {new Date().getFullYear()}: All Rights Reserved by
            Shibadino
          </p>
        </div>
      </div>
    </footer>
  );
};
