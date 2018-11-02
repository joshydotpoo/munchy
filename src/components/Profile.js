import React, { Component } from "react";
import TopNavigation from "./TopNavigation";
import SideNavigation from "./SideNavigation";

import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Switch } from "react-router-dom";
import MetaTags from "react-meta-tags";
import "../css/bootstrap.min.css";
import "../css/profile.css";

class Profile extends Component {
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
      <div id="ProfileContainer" style={{ width: "100vw", height: "100vh" }}>
        <MetaTags>
          <title>Recipe Name</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </MetaTags>

        <TopNavigation toggleSideNavigation={this.toggleSideNavigation} />
        {this.state.sideNavOpen && <SideNavigation />}

        <div className="container" style={{ width: "100vw", height: "100vh" }}>
          <div className="row">
            <div className="col-sm-3">
              <a className="float-right btn btn-outline-dark"> edit</a>
              <p className="float-left">
                <i className="material-icons" style={{ width: "125px" }}>
                  account
                </i>
                <a style={{ fontSize: "8vw" }}>
                  {" "}
                  <strong>Guy Fieri </strong>{" "}
                </a>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <h4>
                <strong>About Me</strong>
              </h4>
              <p>
                {" "}
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis.{" "}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <br />
              <h4>
                <strong>My Recipes</strong>
                <a className="m-3">
                  <button
                    type="button"
                    className="btn btn-secondary, btn btn-outline-dark"
                  >
                    {" "}
                    Add Recipe{" "}
                  </button>
                </a>
              </h4>
              <br />
              <h5> Recipe Name </h5>
              <i className="material-icons" style={{ width: "250px" }}>
                image
              </i>
              <p>
                {" "}
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <br />
              <h4>
                <strong>My Subscriptions</strong>
              </h4>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <br />
              <h4>
                <strong>My Favorites</strong>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
