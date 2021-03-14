import style from "./Header.module.css";

function Header() {
  return (
    <div>
    <header className={style.header}>
      <h2 className={style.headerH1}>Furniture Solutions For Your Home!</h2>
      <nav className={style.navigation}>
        <p className={style.navP}>For more information contact us at: something@gmail.com</p>
        <ul className={style.ulNavigation}>
          <li className={style.navLi}><a href="/catalogue">CATALOGUE</a></li>
          <li className={style.navLi}><a href="/login">LOGIN</a></li>
          <li className={style.navLi}><a href="/register">REGISTER</a></li>
          <li className={style.navLi}><a href="/logout">LOG OUT</a></li>
        </ul>
      </nav>
      </header>
    </div>
  );
}

export default Header;
