import style from "./Footer.module.css";
function Footer() {
  return (
   
    <div className={style.footerWrapper}>
      <div className={style.footerContent}>
        <div className={style.moreInfo}>
          <p>Contact Info:</p>
          <ul>
            <li>Sofia 1000</li>
            <li>T: +35982348312</li>
          </ul>
        </div>
        <div className={style.moreInfo}>
          <p>Quick Navigation</p>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/reviews">Reviews</a>
            </li>
            <li>
              <a href="/register">Leave a Review</a>
            </li>
          </ul>
        </div>
        <div className={style.moreInfo}>
          <p>Find us on Social Media!</p>
          <ul>
            <li>
              <i class="fab fa-facebook fa-2x"></i>
            </li>
            <li>
              <i class="fab fa-instagram fa-2x"></i>
            </li>
            <li>
              <i class="fab fa-twitter fa-2x"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
 
  );
}

export default Footer;
