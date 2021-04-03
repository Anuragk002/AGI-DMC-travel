import React from "react";
import "./Details.css";
import search from "./images/search.jpg";
import test from "./images/test.jpg";
import networking from "./images/networking.jpg";
import idea from "./images/idea.jpg";

function Details(props) {
  return (
    <>
      <div id="cards_landscape_wrap-2">
        <div className="container">
          <div className="row">
            <div className="my-2">
              <h1 className="text-left"> Things we do ..... </h1>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href>
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src={search} alt />
                    </div>
                    <div className="text-container">
                      <h6>Search </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href>
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src={test} alt />
                    </div>
                    <div className="text-container">
                      <h6>Behavioral Test</h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href>
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src={networking} alt />
                    </div>
                    <div className="text-container">
                      <h6>Networking</h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href>
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src={idea} alt />
                    </div>
                    <div className="text-container">
                      <h6>Validate your Idea</h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
