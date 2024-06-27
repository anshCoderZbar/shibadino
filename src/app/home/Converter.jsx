import React from "react";

import { Bs1Circle, Bs2Square, BsCoin } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import { PiWalletBold } from "react-icons/pi";
import Select from "react-select";

export const Converter = () => {
  const options = [
    {
      value: "chocolate",
      label: (
        <span>
          <BsCoin /> Chocolate
        </span>
      ),
    },
    {
      value: "strawberry",
      label: (
        <span>
          <Bs1Circle /> Strawberry
        </span>
      ),
    },
    {
      value: "vanilla",
      label: (
        <span>
          <Bs2Square /> Vanilla
        </span>
      ),
    },
  ];
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8 col-xl-7 col-xxl-6">
          <div className="converter_heading">
            <h1 className="main_top_heading">SHIBADINO</h1>
            <h1 className="main_top_heading">
              Unleash the roar, Embrace the Paws!
            </h1>
          </div>
          <div className="coin_converter">
            <div className="coin_inner">
              <div className="input_convert">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="text-white">From</h2>
                  <div className="d-flex gap-2 gap-sm-3">
                    <div className="d-flex align-items-center wallet_icon">
                      <span>
                        <PiWalletBold />
                      </span>
                      <span className="text-decoration-underline">0</span>
                    </div>
                    <div className="coin_vkj">
                      <p>Max</p>
                    </div>
                    <div className="coin_vkj">
                      <p>50%</p>
                    </div>
                  </div>
                </div>
                <div className="inputs_select">
                  <div className="converted_data">
                    <input type="text" placeholder="0.00" />
                    <p>~0.00</p>
                  </div>
                  <Select
                    defaultValue={options[0]}
                    name="coins"
                    isSearchable={false}
                    options={options}
                    className="basic-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>
              <div className="swap_coins">
                <FaArrowDown />
              </div>
              <div className="input_convert">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="text-white">From</h2>
                  <div className="d-flex gap-2 gap-sm-3">
                    <div className="d-flex align-items-center wallet_icon">
                      <span>
                        <PiWalletBold />
                      </span>
                      <span className="text-decoration-underline">0</span>
                    </div>
                    <div className="coin_vkj">
                      <p>Max</p>
                    </div>
                    <div className="coin_vkj">
                      <p>50%</p>
                    </div>
                  </div>
                </div>
                <div className="inputs_select">
                  <div className="converted_data">
                    <input type="text" placeholder="0.00" />
                    <p>~0.00</p>
                  </div>
                  <Select
                    defaultValue={options[0]}
                    name="coins"
                    options={options}
                    isSearchable={false}
                    className="basic-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>
            </div>

            <button className="connect_button">Connect Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
};
