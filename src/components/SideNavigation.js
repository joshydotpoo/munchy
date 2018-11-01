import React, { Component, Fragment } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Switch } from "react-router-dom";
import MetaTags from "react-meta-tags";

import "../css/side_navigation.css";

class SideNavigation extends Component {
  render() {
    return (
      <div id="side_nav_container">
        <div id="side_nav_categories">
          <div className="side_nav_item">APPETIZERS</div>
          <div className="side_nav_item">BREAKFAST</div>
          <div className="side_nav_item">LUNCH</div>
          <div className="side_nav_item">DINNER</div>
          <div className="side_nav_item">DESERT</div>
          <div className="side_nav_item">DRINKS</div>
          <div className="side_nav_item">SNACKS</div>
        </div>
      </div>
    );
  }
}

export default SideNavigation;
