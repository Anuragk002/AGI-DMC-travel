import React from "react";
import "./Details.css";
import singapore from "./images/singapore.jpg";
import manali from "./images/manali.jpg";
import paris from "./images/paris.jpg";
import newyork from "./images/newyork.jpg";

function Details(props) {
  return (
    <>
      <div id="cards_landscape_wrap-2">
        <div className="container">
          <div className="row">
            <div className="my-2">
              <h1 className="text-left">
                {" "}
                <strong>Explore</strong>{" "}
              </h1>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="/places">
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src={singapore} alt />
                    </div>
                    <div className="text-container">
                      <h6>Singapore </h6>
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
                      <img src={manali} alt />
                    </div>
                    <div className="text-container">
                      <h6>Manali</h6>
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
                      <img src={paris} alt />
                    </div>
                    <div className="text-container">
                      <h6>Paris</h6>
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
                      <img src={newyork} alt />
                    </div>
                    <div className="text-container">
                      <h6>New York</h6>
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
