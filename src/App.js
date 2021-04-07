import React from "react";
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
import NotFound from "./components/NotFound/NotFound";
import Reviews from "./components/Reviews/Reviews";
import Login from "./components/Login/Login";
import {AuthProvider} from './context/auth';
import PostReview from "./components/Reviews/postReview/postReview";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";
import CartProvider from './context/CartContext'
import CreateItems from "./components/Admin/CreateItems/CreateItems";
import AdminRoute from "./adminRoute";
import Profile from "./components/Profile/Profile";
import EditProfile from "./components/Profile/EditProfile/EditProfile";
import UserOrders from "./components/Profile/UserOrders/UserOrders";


function App() {
    return (
      <div className="App">
      <Router>
        <AuthProvider>
        <CartProvider>
        <Header/>
        <Switch>
        <PrivateRoute path="/cart" component={Cart}/>
        <Route path="/" exact component={Home}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/reviews" exact component={Reviews}></Route>
        <PrivateRoute path="/user/profile" exact component={Profile}></PrivateRoute>
        <PrivateRoute exact path="/user/orders"  component={UserOrders}></PrivateRoute>
        <PrivateRoute exact path="/user/edit-profile" component={EditProfile}></PrivateRoute>
        <AdminRoute exact path="/admin/create" component={CreateItems}></AdminRoute>
        <AdminRoute path="/admin" component={Admin}></AdminRoute>
        <PrivateRoute path="/reviews/new" component={PostReview}></PrivateRoute>
        <Route path="/about" component={About}></Route>
        <Route path="/catalog" component={Catalog}></Route>
        <Route path="/details/:id" component={Details}></Route>
        <Route component={NotFound}/>
      
      </Switch>
        <Footer />
      </CartProvider>
      </AuthProvider>
        </Router>
      </div>
    );
  }


export default App;
