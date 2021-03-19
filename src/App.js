import { Component } from "react";
import {Route, Switch } from 'react-router-dom';



import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Catalog from './components/Catalog/Catalog';
import Register from './components/Register/Register'
import * as furnitureService from './services/furnitureService';
import * as reviewsService from './services/reviewsService';
import * as cardsService from './services/cardsService'

import NotFound from "./components/NotFound/NotFound";
import Reviews from "./components/Reviews/Reviews";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      furniture: [],
      reviews: [],
      cards: []
    };
  }
  componentDidMount(){
     furnitureService.getAll()
      .then(furniture => {
        this.setState({furniture})
      })
      reviewsService.getReviews()
      .then(reviews => {
        this.setState({reviews})
      })
      cardsService.getHomeCards()
      .then(cards => {
        this.setState({cards})
    })
    
  }
  getFurniture(){
    return this.state.furniture
  }
  getReviews(){
    return this.state.reviews
  }
  getCards(){
    return this.state.cards
  }
  render() {
    return (
      <div className="App">
        <Header />
        
        <Switch>
        <Route path="/" exact><Home furniture={this.getFurniture()} cards={this.getCards()}/></Route>
        <Route path="/register" component={Register}/>
        <Route path="/reviews"><Reviews reviews={this.getReviews()}/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/catalog"><Catalog furniture={this.getFurniture()}/></Route>
        <Route component={NotFound}/>
        </Switch>
        
        <Footer />
      </div>
    );
  }
}

export default App;
