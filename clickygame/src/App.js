/* eslint-disable react/jsx-no-undef */
//import dependencies
import React, {
  Component
} from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Wrapper";
import Footer from "./components/Footer";
import cartoon from "./cartoon.json";
import "./App.css";

//Set state
class App extends Component {
  state = {
    cartoon,
    clickedCartoon: [],
    score: 0
  };

  imageClick = event => {
    const currentImage = event.target.alt;
    const imageClicked = this.state.clickedCartoon.indexOf(currentImage) > -1;

    if (imageClicked) {
      this.setState({
        cartoon: this.state.fish.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedCartoon: [],
        score: 0
      });
      alert("You lose !! Play Again?");
    } else {
      this.setState({
        cartoon: this.state.cartoon.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedCartoon: this.state.clickedCartoon.concat(
          currentImage
        ),
        score: this.state.score + 1
      }, () => {
        if (this.state.score === 12) {
          alert("Winner !!! ");
          this.setState({
            cartoon: this.state.cartoon.sort(function (a, b) {
              return 0.5 - Math.random();
            }),
            clickedCartoon: [],
            score: 0
          });
        }
      });
    }
  };

  render() {
    return ( 
      <div>
      <Navbar score = {
        this.state.score}
      /> 
      <Header / >
      <div className = "container-fluid" > 
      {this.state.cartoon.map(cartoon => ( 
        <cartoon 
        cartoonImageClick = {this.imageClick}
          id = {cartoon.id}
          image = {cartoon.image}
          />
        ))} 
        </div> 
        <Footer / >
      </div>
    );
  }
}

export default App;