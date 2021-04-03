import React, { Component } from "react";
import TagInput from "./TagInput";

class Ideas extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <h1>ideas Page</h1>
              <TagInput />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ideas;
