import React, { useState } from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Catalog from './components/Catalog/Catalog';
import Register from './components/Register/Register';
import Admin from './components/Admin/Admin';
import PrivateRoute from './privateRoute';
import {AuthContext} from './context/auth'


import NotFound from "./components/NotFound/NotFound";
import Reviews from "./components/Reviews/Reviews";
import Login from "./components/Login/Login";


function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  let loggedIn
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data)
   loggedIn = true
    
  } 
    return (
      <div className="App">
      <Router>
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Header />
        <Switch>
        
        <Route path="/" exact component={Home}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/reviews" component={Reviews}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/catalog" component={Catalog}></Route>
        <PrivateRoute path="/admin" component={Admin}></PrivateRoute>
        <Route component={NotFound}/>
      
      </Switch>
      </AuthContext.Provider>
        </Router>
        <Footer />
      </div>
    );
  }


export default App;
