import React, {
  Component
} from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cartoon.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({
        highscore: this.state.score
      }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({
      score: 0
    });
    return true;
  }

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({
            score: this.state.score + 1
          }, function () {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return ( 
      <Wrapper>
        <Header score = {this.state.score} highscore = {this.state.highscore}>Clicky Game</Header> 
        {this.state.cards.map(card => ( 
          <Card clickCount = {this.clickCount}
          id = {card.id}
          key = {card.id}
          image = {card.image}
          />
        ))} 
        </Wrapper>
  );
}
}

export default App;








//import dependencies
// import React, { Component } from "react";
// import CartoonCard from "./components/CartoonCard"; 
// import Navbar from "./components/Navbar";
// import Header from "./components/Wrapper";
// import Footer from "./components/Footer";
// import cartoon from "./cartoon.json";

//Set state
// class App extends Component {
//   state = {
//     cartoon,
//     clickedCartoon: [],
//     score: 0
//   };

//   imageClick = event => {
//     const currentImage = event.target.alt;
//     const imageClicked = this.state.clickedCartoon.indexOf(currentImage) > -1;

//     if (imageClicked) {
//       this.setState({
//         cartoon: this.state.fish.sort(function (a, b) {
//           return 0.5 - Math.random();
//         }),
//         clickedCartoon: [],
//         score: 0
//       });
//       alert("You lose !! Play Again?");
//     } else {
//       this.setState({
//         cartoon: this.state.cartoon.sort(function (a, b) {
//           return 0.5 - Math.random();
//         }),
//         clickedCartoon: this.state.clickedCartoon.concat(
//           currentImage
//         ),
//         score: this.state.score + 1
//       }, () => {
//         if (this.state.score === 12) {
//           alert("Winner !!! ");
//           this.setState({
//             cartoon: this.state.cartoon.sort(function (a, b) {
//               return 0.5 - Math.random();
//             }),
//             clickedCartoon: [],
//             score: 0
//           });
//         }
//       });
//     }
//   };

//  render() {
//  return ( 
//  <h1>Hello</h1>
// <div>
// <Navbar score = {
//   this.state.score}
// /> 
// <Header / >
// <div className = "container-fluid" > 
// {this.state.cartoon.map(cartoon => ( 
//   <cartoon 
//   cartoonImageClick = {this.imageClick}
//     id = {cartoon.id}
//     image = {cartoon.image}
//     />
//   ))} 
//   </div> 
//   <Footer / >
// </div>
//     );
//   }
// }

//export default App;