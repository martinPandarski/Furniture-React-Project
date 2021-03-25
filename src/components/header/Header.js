import React from 'react'
import style from "./Header.module.css";
import {Link} from 'react-router-dom'
import api from "../../services/api";


function Header({history}) {
    const isLogged = localStorage.getItem("tokens")
    // const [isLoggedOut, setLoggedOut] = useState(false);

    const logout = () => {
    fetch(api.logout,{
      method: "GET",
     headers: {
       'user-token': localStorage.getItem("tokens")
     }
   })
   .then(res => {
    if(res.status === 200){
      localStorage.removeItem("tokens"); 
      history.push('/')
    }
  })
  .catch(err => console.log(err))
}
    
  return (
    <div>
    <header className={style.header}>
     <h2 className={style.headerH1}><Link to="/">Not Ikea</Link> </h2>
      <nav className={style.navigation}>
        <p className={style.navP}>For more information contact us at: something@gmail.com</p>
        <ul className={style.ulNavigation}>
          <li className={style.navLi}><Link to="/catalog">CATALOG</Link></li>
          <li className={style.navLi}>{isLogged ? <button onClick={logout}>LOG OUT</button> : <Link to="/login">LOGIN</Link> }</li>
          <li className={style.navLi}>{isLogged ? <Link to="/logout"><i className="fas fa-shopping-cart">Cart</i></Link> : <Link to="/register">REGISTER</Link> }</li>
        </ul>
      </nav>
      </header>
    </div>
  );
}

export default Header;
