import React, { Component } from "react";
import "../css/recipe_card.css";

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false
    };
  }

  toggleFavorited = () => {
    this.setState({ favorited: !this.state.favorited });
  };
  render() {
    return (
      <div className="recipe_card">
        <div className="recipe_card_top">
          <div className="recipe_card_profile_container">
            <i className="material-icons">account_circle</i>
            <span className="recipe_card_name">Guy Fieri</span>
          </div>
          <div className="recipe_card_title">apple recipe</div>
          <i className="material-icons">more_horiz</i>
        </div>
        <div className="recipe_card_middle">
          <img src="http://noteablemusictherapy.com/wp-content/uploads/2017/09/apple.jpg" />
        </div>
        <div className="recipe_card_bottom">
          <div className="recipe_card_like_container">
            <i className="material-icons">thumb_up</i>
            <span className="recipe_card_likes">15 likes</span>
          </div>
          {!this.state.favorited && (
            <i
              className="material-icons favorite_button"
              style={{ cursor: "pointer" }}
              onClick={this.toggleFavorited}
            >
              favorite_border
            </i>
          )}
          {this.state.favorited && (
            <i
              className="material-icons favorite_button"
              style={{ color: "red", cursor: "pointer" }}
              onClick={this.toggleFavorited}
            >
              favorite
            </i>
          )}

          <div className="recipe_card_rating_container">
            <i className="material-icons">star</i>
            <i className="material-icons">star</i>
            <i className="material-icons">star</i>
            <i className="material-icons">star</i>
            <i className="material-icons">star_border</i>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
