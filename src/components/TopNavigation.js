import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/top_navigation.css";

class TopNavigation extends Component {
  render() {
    return (
      <div id="top_nav_container">
        <i
          className="material-icons"
          id="top_nav_menu_button"
          onClick={this.props.toggleSideNavigation}
        >
          menu
        </i>
        <div id="top_nav_search_container">
          <i className="material-icons">search</i>
          <input
            id="top_nav_search"
            type="text"
            placeholder="Search a recipe..."
          />
          <i className="material-icons">filter_list</i>
        </div>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <i className="material-icons" id="top_nav_account_button">
            account_circle
          </i>
        </Link>
      </div>
    );
  }
}

export default TopNavigation;
