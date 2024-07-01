import React, { useEffect, useRef } from "react";
import { Converter } from "app/home/Converter";
import { ASSETS } from "assets";
import { BsShieldFillCheck } from "react-icons/bs";

import "styles/home.css";

export default function Home() {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <main>
      <section className="converter">
        <Converter />
      </section>

      {/* about */}
      <section className="about_crypto">
        <div className="container-fluid">
          <div className="row about_dog_fl">
            <div className="col-lg-6 about_dog">
              <img src={ASSETS.ABOUT_DOG} alt="dog" className="" />
            </div>
            <div className="col-lg-6 about_content">
              <h2 className="main_top_heading">Wichtiges zum Projekt</h2>
              <p className="main_para para_margin">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.Lorem ipsum dolor sit amet, pulvinar dapibus leo.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis, pulvinar dapibus. Ut elit tellus,
                luctus nec ullamcorper mattis.
              </p>
              <p className="main_para para_margin">
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="grass">
          <img src={ASSETS.GRASS} alt="grass" />
        </div>
      </section>

      {/* roadmap */}
      <section className="roadmap section_padding">
        <div className="container-fluid">
          <h2 className="main_top_heading mx-auto text-center">Roadmap</h2>
          <p className="main_para roadmap_para">
            We are driven by a vision and goals to expand our project as much as
            possible in line with market demands, leveraging the best of
            memecoins
          </p>
          <div className="roadmap_details">
            <div className="roadmap_layout">
              {new Array(5).fill(true).map((elm, i) => {
                return (
                  <div key={i} className="roadmap_inner">
                    <img src={ASSETS.ROADMAP_BOARD} alt="board" />
                    <div className="roadmap_content">
                      <h3>Q1 2024</h3>
                      <ul>
                        <li>We are driven by</li>
                        <li>We are driven by</li>
                        <li>We are driven by</li>
                        <li>We are driven by</li>
                        <li>We are driven by</li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="wood_border">
            <img src={ASSETS.WOOD_BORDER} alt="border" />
          </div>
        </div>
      </section>

      {/* tokenomics */}
      <section className="tokenomics section_padding">
        <div className="container-fluid">
          <h2 className="main_top_heading mx-auto text-center">Tokenomics</h2>
          {/* <div className="tokenomics_section">
            <div className="polygon">
              <img
                src={ASSETS.POLYGON}
                alt="polygon"
                className="polygon_design"
              />
              <div className="tokenomics_text">
                <p className="tokenomics_para">total supply</p>
                <h3 className="main_top_heading tokenomics_heading">
                  4 billion
                </h3>
              </div>
              <div className="polygon_dog">
                <img src={ASSETS.SMALL_DOG} alt="small_dog" />
              </div>
            </div>
            <div className="rectangle_1 rectangle_design">
              <img src={ASSETS.RECTANGLE_1} alt="polygon" />
              <div className="rectangle_text">
                <p className="tokenomics_para">Presale</p>
                <h3 className="main_top_heading tokenomics_heading">50%</h3>
              </div>
            </div>
            <div className="rectangle_2 rectangle_design">
              <img src={ASSETS.RECTANGLE_2} alt="polygon" />
              <div className="rectangle_text">
                <p className="tokenomics_para">community</p>
                <h3 className="main_top_heading tokenomics_heading">20%</h3>
              </div>
            </div>
            <div className="rectangle_3 rectangle_design">
              <img src={ASSETS.RECTANGLE_3} alt="polygon" />
              <div className="rectangle_text">
                <p className="tokenomics_para">team</p>
                <h3 className="main_top_heading tokenomics_heading">15%</h3>
              </div>
            </div>
            <div className="rectangle_4 rectangle_design">
              <img src={ASSETS.RECTANGLE_4} alt="polygon" />
              <div className="rectangle_text">
                <p className="tokenomics_para">liquidity</p>
                <h3 className="main_top_heading tokenomics_heading">15%</h3>
              </div>
            </div>
          </div> */}

          <div className="tokenomics_section">
            <img src={ASSETS.TOKENOMICS_SECTION} alt="tokenomics" />
          </div>
          <div className="wood_border">
            <img src={ASSETS.WOOD_BORDER} alt="border" />
          </div>
        </div>
      </section>

      {/* rewards */}
      <section className="rewards  section_padding">
        <div className="container-fluid">
          <div className="rewards_layout">
            <h2 className="main_top_heading mx-auto">get Rewards</h2>
            <div className="reward_lists">
              <ul>
                <li className="d-flex gap-3">
                  <span>
                    <BsShieldFillCheck />
                  </span>
                  <p>
                    <strong>Earn Points by Playing :</strong> Gamers earn
                    CryptoRewards Points (CRP) by playing supported games within
                    the app. Points are awarded based on game performance,
                    achievements, and milestones.
                  </p>
                </li>
                <li className="d-flex gap-3">
                  <span>
                    <BsShieldFillCheck />
                  </span>
                  <p>
                    <strong>Earn Points by Playing :</strong> Gamers earn
                    CryptoRewards Points (CRP) by playing supported games within
                    the app. Points are awarded based on game performance,
                    achievements, and milestones.
                  </p>
                </li>
                <li className="d-flex gap-3">
                  <span>
                    <BsShieldFillCheck />
                  </span>
                  <p>
                    <strong>Earn Points by Playing :</strong> Gamers earn
                    CryptoRewards Points (CRP) by playing supported games within
                    the app. Points are awarded based on game performance,
                    achievements, and milestones.
                  </p>
                </li>
              </ul>
            </div>
            <div className="dog_gifs">
              <video src={ASSETS.DOG_GIF_1} loop autoPlay muted ref={vidRef} />
              <video src={ASSETS.DOG_GIF_2} loop autoPlay muted ref={vidRef} />
              <video src={ASSETS.DOG_GIF_3} loop autoPlay muted ref={vidRef} />
              <video src={ASSETS.DOG_GIF_4} loop autoPlay muted ref={vidRef} />
              <video src={ASSETS.DOG_GIF_5} loop autoPlay muted ref={vidRef} />
            </div>
          </div>
        </div>
      </section>

      {/* questions */}
      <section className="questions  section_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 mobile_img">
              <img src={ASSETS.SMALL_DOG} alt="smalldog" />
            </div>
            <div className="col-md-7">
              <div className="questions_section">
                <h2 className="main_top_heading">Frequently Asked Questions</h2>
              </div>
              <div className="accordion acc_sec" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      How do I Buy and Sell $SHIBADINO
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Start by choosing a reputable cryptocurrency exchange
                        that supports the trading of "$SHIBADINO." Popular
                        exchanges include Coinbase, Binance, Kraken, and
                        Bitfinex.
                      </p>
                      <p>
                        Make sure The exchange you choose is reliable, has good
                        security measures, and supports the specific
                        cryptocurrency you want to trade.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How do I Buy and Sell $SHIBADINO
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Start by choosing a reputable cryptocurrency exchange
                        that supports the trading of "$SHIBADINO." Popular
                        exchanges include Coinbase, Binance, Kraken, and
                        Bitfinex.
                      </p>
                      <p>
                        Make sure The exchange you choose is reliable, has good
                        security measures, and supports the specific
                        cryptocurrency you want to trade.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How do I Buy and Sell $SHIBADINO
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Start by choosing a reputable cryptocurrency exchange
                        that supports the trading of "$SHIBADINO." Popular
                        exchanges include Coinbase, Binance, Kraken, and
                        Bitfinex.
                      </p>
                      <p>
                        Make sure The exchange you choose is reliable, has good
                        security measures, and supports the specific
                        cryptocurrency you want to trade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
