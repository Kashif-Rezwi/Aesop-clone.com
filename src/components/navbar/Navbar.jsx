import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoHeartOutline } from "react-icons/io5";
import navbarStyles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <>
      <section className={navbarStyles.navbar}>
        <div>
          <div>
            <a href="#">Skin Care</a>
            <a href="#">Body & Hand</a>
            <a href="#">Hair</a>
            <a href="#">Fragrance</a>
            <a href="#">Home</a>
            <a href="#">Kits & Travel</a>
          </div>
          <div>
            <a href="#">Shop</a>
            <a href="#">Read</a>
            <a href="#">Stores</a>
            <a href="#">
              <IoSearchOutline />
            </a>
          </div>
        </div>
        <div>
          <a href="#">Log in</a>
          <a href="#">Cabinet</a>
          <a href="#">Cart</a>
        </div>
      </section>

      <section className={navbarStyles.smallNavbar}>
        <img src="./Images/Aesop_logo.svg" />

        <div>
          <a href="#">
            <IoSearchOutline />
          </a>
          <a href="#">
            <IoHeartOutline />
          </a>
          <a href="#">Cart</a>
          <a href="#">
            <RxHamburgerMenu />
          </a>
        </div>
      </section>
    </>
  );
};
