import React from "react";
import {Redirect} from 'react-router-dom'
import { useAuth } from "../../context/auth";

function Admin(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    return localStorage.clear()
     
  }

  return (
    <div>
      <div>Admin Page</div>
      <button onClick={logOut}>Log out</button>
    </div>
  );
}

export default Admin;