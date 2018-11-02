import React, { Component } from "react";
import RecipeCard from "../components/RecipeCard";
import TopNavigation from "../components/TopNavigation";
import SideNavigation from "../components/SideNavigation";

import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Switch, Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

import "../css/recipe.css";

class Recipe extends Component {
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
      <div
        className="RecipeContainer"
        style={{
          width: "100vw",
          height: "100vh",
          margin: "0",
          padding: "0",
          position: "absolute"
        }}
      >
        <TopNavigation toggleSideNavigation={this.toggleSideNavigation} />
        {this.state.sideNavOpen && <SideNavigation />}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <i className="material-icons" style={{ fontSize: "75px" }}>
                account_circle
              </i>
              <strong>Pasta_Lover62</strong>
              <a className="float-right btn btn-outline-primary">
                {" "}
                <i className="Subscribe" /> Subscribe
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1" />
            <div className="col-sm-5">
              <h2> Recipe Name </h2>
              <i className="material-icons" style={{ fontSize: "250px" }}>
                image
              </i>
            </div>

            <div className="col-sm-4">
              <h4>Ingredients</h4>
              <ol>
                {" "}
                <li>item 1 </li> <li>item 2 </li> <li>item 3 </li>{" "}
                <li>item 4 </li> <li>item 5 </li> <li>item 6 </li>
              </ol>
            </div>
          </div>
          <div className="row">
            <ul className="list-unstyled">
              <li className="media">
                <i className="material-icons" style={{ fontSize: "100px" }}>
                  play_circle_outline
                </i>
                <div className="media-body">
                  <h4 className="mt-0 mb-1">step 1</h4>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis.
                </div>
              </li>
              <li className="media my-4">
                <i className="material-icons" style={{ fontSize: "100px" }}>
                  play_circle_outline
                </i>
                <div className="media-body">
                  <h4 className="mt-0 mb-1">step 2</h4>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis.
                </div>
              </li>
              <li className="media">
                <i className="material-icons" style={{ fontSize: "100px" }}>
                  play_circle_outline
                </i>
                <div className="media-body">
                  <h4 className="mt-0 mb-1">step 3</h4>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis.
                </div>
              </li>
              <li className="media my-4">
                <i className="material-icons" style={{ fontSize: "100px" }}>
                  play_circle_outline
                </i>
                <div className="media-body">
                  <h4 className="mt-0 mb-1">step 4</h4>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis.
                </div>
              </li>
            </ul>
          </div>

          <div className="row, text-center">
            <div className="text-center">
              <h3> Full Recipe Video </h3>
              <i className="material-icons" style={{ fontSize: "250px" }}>
                play_circle_outline
              </i>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <h3>
                {" "}
                User Reviews
                <a className="float-right btn btn-outline-primary ml-3">
                  {" "}
                  Write a Review{" "}
                </a>
              </h3>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-2">
                  <i className="material-icons" style={{ fontSize: "50px" }}>
                    account_circle
                  </i>
                </div>
                <div className="col-md-10">
                  <p>
                    <a className="float-left">
                      <strong>Anna_Banana</strong>
                    </a>
                    <span className="float-right">
                      <i className="text-warning fa fa-star" />
                    </span>
                    <span className="float-right">
                      <i className="text-warning fa fa-star" />
                    </span>
                    <span className="float-right">
                      <i className="text-warning fa fa-star" />
                    </span>
                    <span className="float-right">
                      <i className="text-warning fa fa-star" />
                    </span>
                  </p>
                  <div className="clearfix" />
                  <p>
                    Lorem Ipsum is simply dummy text of the pr make but also the
                    leap into electronic typesetting, remaining essentially
                    unchanged.
                  </p>
                  <p>
                    <a className="float-right btn btn-outline-primary ml-2">
                      {" "}
                      <i className="fa fa-reply" /> Reply
                    </a>
                    <a className="float-right btn text-white btn-danger">
                      {" "}
                      <i className="fa fa-heart" /> Like
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
