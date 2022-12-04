import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../context/user.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

import { ReactComponent as NavLogo } from "../../assets/logo.svg";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const logoutHandler = async () => {
    await SignOutUser;
    setCurrentUser(null);
  };

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
              <Link to="/auth" className="nav-link" onClick={logoutHandler}>
                LOGOUT
              </Link>
            ) : (
              <Link to="/auth" className="nav-link">
                LOGIN
              </Link>
            )
          }
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
