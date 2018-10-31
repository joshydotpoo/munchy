import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import logo from './logo.svg';
import './App.css';
import './css/recipe_card.css'

class App extends Component {

  render() {
    return (
      <div className="container">
        <MetaTags>
          <title>Munchy</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </MetaTags>
        <div id="recipe_card_container">
          <div className='recipe_card'><img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=food-dinner-lunch-70497.jpg&fm=jpg"/></div>
          <div className='recipe_card'><img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=food-dinner-lunch-70497.jpg&fm=jpg"/></div>
          <div className='recipe_card'><img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=food-dinner-lunch-70497.jpg&fm=jpg"/></div>
          <div className='recipe_card'><img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=food-dinner-lunch-70497.jpg&fm=jpg"/></div>
          <div className='recipe_card'><img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=food-dinner-lunch-70497.jpg&fm=jpg"/></div>
          <div className='recipe_card'><img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=food-dinner-lunch-70497.jpg&fm=jpg"/></div>
          <div className='recipe_card'><img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=food-dinner-lunch-70497.jpg&fm=jpg"/></div>
          <div className='recipe_card'><img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=food-dinner-lunch-70497.jpg&fm=jpg"/></div>
        </div>
      </div>
    );
  }
}

export default App;
