import { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import * as furnitureService from './services/furnitureService';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      furniture: [],
    };
  }
  componentDidMount(){
     furnitureService.getAll()
      .then(furniture => {
        console.log(furniture)
        this.setState({furniture})
      })
    
  }
  getFurniture(){
    return this.state.furniture
  }
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
        <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/">
        <Home furniture={this.getFurniture()}/>
        </Route>
        </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
