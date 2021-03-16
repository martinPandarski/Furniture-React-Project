import style from "./Header.module.css";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
    <header className={style.header}>
     <h2 className={style.headerH1}><Link to="/">Furniture Solutions For Your Home!</Link> </h2>
      <nav className={style.navigation}>
        <p className={style.navP}>For more information contact us at: something@gmail.com</p>
        <ul className={style.ulNavigation}>
          <li className={style.navLi}><Link to="/catalogue">CATALOGUE</Link> </li>
          <li className={style.navLi}><Link to="/login">LOGIN</Link></li>
          <li className={style.navLi}><Link to="/register">REGISTER</Link></li>
          <li className={style.navLi}><Link to="/logout">LOG OUT</Link></li>
        </ul>
      </nav>
      </header>
    </div>
  );
}

export default Header;
