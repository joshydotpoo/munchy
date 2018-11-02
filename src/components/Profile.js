import React, { Component } from "react";
import TopNavigation from "./TopNavigation";
import SideNavigation from "./SideNavigation";

import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Switch, Link } from "react-router-dom";
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
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </MetaTags>

        <TopNavigation toggleSideNavigation={this.toggleSideNavigation} />
        {this.state.sideNavOpen && <SideNavigation />}

        <a className="float-right btn btn-outline-dark"> edit</a>
        <div className="container">
          <div className="row">
            <p>
              <i className="material-icons" style={{ fontSize: "125px" }}>
                account_circle
              </i>
              <p>
                {" "}
                <strong style={{ fontSize: "35px" }}> Guy Fieri </strong>{" "}
              </p>
            </p>
          </div>

          <div className="row">
            <h4>
              {" "}
              <strong>About Me</strong>{" "}
            </h4>
            <p>
              {" "}
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis.{" "}
            </p>
          </div>

          <div className="row">
            <br />
            <h4>
              {" "}
              <strong>My Recipes</strong>
              <a className="m-3">
                <Link to="/addrecipe">
                  <button
                    type="button"
                    className="btn btn-secondary, btn btn-outline-dark"
                  >
                    {" "}
                    Add Recipe{" "}
                  </button>
                </Link>
              </a>
            </h4>
          </div>

          <div className="row">
            <br />
            <h5> Recipe Name </h5>
            <span>
              <p>
                <i className="material-icons" style={{ fontSize: "250px" }}>
                  image
                </i>
              </p>
              <p>
                {" "}
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin.
              </p>
            </span>
          </div>

          <div className="row">
            <br />
            <h4>
              <strong>My Subscriptions</strong>
            </h4>
            <p />
          </div>

          <div className="row">
            <br />
            <h4>
              <strong>My Favorites</strong>
            </h4>
            <p />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
