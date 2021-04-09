import React, {useState, useContext} from 'react'
import style from "./Header.module.css";
import {Link, useHistory} from 'react-router-dom'
import {useAuth} from '../../context/auth'
import {CartContext} from '../../context/CartContext';
import {Alert} from 'react-bootstrap'


function Header() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  async function handleLogout() {
    setError("")
    try {
      await logout()
      history.push("/")
    } catch {
      setError("Failed to log out")
    }
  }
  const {itemCount} = useContext(CartContext);
  
    
  return (
    <div>
    <header className={style.header}>
     <h2 className={style.headerH1}><Link to="/">Not Ikea</Link> </h2>
     {error && <Alert variant="danger">{error}</Alert>}
      <nav className={style.navigation}>
        <p className={style.navP}>For more information contact us at: something@gmail.com</p>
        <ul className={style.ulNavigation}>
          <li className={style.navLi}><Link to="/catalog">CATALOG</Link></li>
          <li className={style.navLi}>{currentUser ? <Link onClick={handleLogout} to="/">LOG OUT</Link> : <Link to="/login">LOGIN</Link> }</li>
          <li className={style.navLi}>{currentUser ? <Link to="/cart"><i className="fas fa-shopping-cart"> Cart({itemCount})</i></Link> : <Link to="/register">REGISTER</Link> }</li>
          <li className={style.navLi}>{currentUser ? <Link to="/user/profile"><i className="fas fa-user">   Profile</i></Link> :'' }</li>
          <li className={style.navLi}>{currentUser && currentUser.email == 'marto65481@gmail.com' ? <Link to='/admin'><i class="fas fa-user-cog"> Administration</i></Link> : ''}</li>
        </ul>
      </nav>
      </header>
    </div>
  );
}

export default Header;
