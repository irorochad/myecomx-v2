import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../context/user.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

import { ReactComponent as NavLogo } from "../../assets/logo.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="nav-container">
        <Link to="/" className="logo-container">
          <NavLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          {
            // If the current user is set, show a logout link, else show the login page
            currentUser ? (
              <Link to="/auth" className="nav-link" onClick={SignOutUser}>
                LOGOUT
              </Link>
            ) : (
              <Link to="/auth" className="nav-link">
                LOGIN
              </Link>
            )
          }
          <CartIcon />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
