import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

import {ReactComponent as NavLogo} from "../../assets/logo.svg";

const Navigation = () => {
  return (
    <>
      <div className="nav-container">
        <Link to="/" className="logo-container">
          <NavLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
        <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          <Link to="/auth" className="nav-link">
            LOGIN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
