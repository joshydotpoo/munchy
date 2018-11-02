import React, { Component } from "react";
import TopNavigation from "./TopNavigation";
import SideNavigation from "./SideNavigation";

import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Switch } from "react-router-dom";
import MetaTags from "react-meta-tags";
import "../css/bootstrap.min.css";
import "../css/profile.css";

class AddRecipe extends Component {
  constructor() {
    super();
    this.state = {
      sideNavOpen: false
    };
  }
  toggleSideNavigation = () => {
    this.setState({ sideNavOpen: !this.state.sideNavOpen });
  };
  render() {
    return (
      <div id="AddRecipeContainer" style={{ width: "100vw", height: "100vh" }}>
        <MetaTags>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </MetaTags>

        <TopNavigation toggleSideNavigation={this.toggleSideNavigation} />
        {this.state.sideNavOpen && <SideNavigation />}
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <p className="float-left">
                <i className="material-icons" style={{ width: "50px" }}>
                  account
                </i>
                <a>
                  <strong>Pasta_Lover62</strong>
                </a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="text-center">
                <textarea> Recipe Name</textarea>
                <button className="btn">Insert Image/Video</button>
                <i className="material-icons" style={{ width: "250px" }}>
                  image
                </i>
              </div>
              <h5 className="pl-3">Ingredients</h5>
              <p>
                <textarea> Enter Ingredients </textarea>
              </p>
              <ul className="list-unstyled">
                <li className="media">
                  <button className="btn">Insert Image/Video</button>
                  <div className="media-body">
                    <h5 className="mt-0 mb-1">step 1</h5>
                    <textarea> Enter Steps </textarea>
                  </div>
                </li>
                <li className="media my-4">
                  <button className="btn">Insert Image/Video</button>
                  <div className="media-body">
                    <h5 className="mt-0 mb-1">step 2</h5>
                    <textarea> Enter Steps </textarea>
                  </div>
                </li>
                <li className="media">
                  <button className="btn">Insert Image/Video</button>
                  <div className="media-body">
                    <h5 className="mt-0 mb-1">step 3</h5>
                    <textarea> Enter Steps </textarea>
                  </div>
                </li>
                <li className="media my-4">
                  <button className="btn">Insert Image/Video</button>
                  <div className="media-body">
                    <h5 className="mt-0 mb-1">step 4</h5>
                    <textarea> Enter Steps </textarea>
                  </div>
                </li>
              </ul>
              <button className="btn">Add Step</button>
              <button className="btn">Delete Step</button>
              <div className="text-center">
                <i className="material-icons" style={{ width: "250px" }}>
                  play
                </i>
                <button className="btn">Insert Image/Video</button>
              </div>
              <div className="text-right">
                <button type="button" className="btn btn-success">
                  Submit Recipe
                </button>
                <button type="button" className="btn btn-danger">
                  Cancel Recipe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddRecipe;
