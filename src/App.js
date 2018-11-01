import React, { Component } from "react";
import Home from "./components/Home.js";

import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Switch } from "react-router-dom";
import MetaTags from "react-meta-tags";

import "./App.css";
import "./css/recipe_card_container.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MetaTags>
          <title>Munchy</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css?family=Work+Sans:400,500,700,800,900"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
        </MetaTags>
        <Router>
          <Switch>
            <Route path="/"  exact component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
