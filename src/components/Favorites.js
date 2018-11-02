import React, { Component } from "react";
import RecipeCard from "../components/RecipeCard";
import TopNavigation from "../components/TopNavigation";
import SideNavigation from "../components/SideNavigation";

import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Switch, Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

import "../css/home.css";

class Favorites extends Component {
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
        className="FavoritesContainer"
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
        <div id="recipe_card_container" style={{ top: "50px" }}>
          <RecipeCard favorited={true} />
        </div>
      </div>
    );
  }
}

export default Favorites;
