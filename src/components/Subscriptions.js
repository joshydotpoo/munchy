import React, { Component } from "react";
import TopNavigation from "../components/TopNavigation";
import SideNavigation from "../components/SideNavigation";

import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Switch } from "react-router-dom";
import MetaTags from "react-meta-tags";

class Subscriptions extends Component {
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
      <div id="SubscriptonContainer">
        <TopNavigation toggleSideNavigation={this.toggleSideNavigation} />
        {this.state.sideNavOpen && <SideNavigation />}
      </div>
    );
  }
}

export default Subscriptions;
