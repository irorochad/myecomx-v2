import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { UserContext } from "../../context/user.context";
import { CartModalContext } from "../../context/cart.context";

import { SignOutUser } from "../../utils/firebase/firebase.utils";

// styled-componenets imports
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

import { ReactComponent as NavLogo } from "../../assets/logo.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.components";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartModalContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <NavLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {
            // If the current user is set, show a logout link, else show the login page
            currentUser ? (
              <NavLink to="/auth" onClick={SignOutUser}>
                LOGOUT
              </NavLink>
            ) : (
              <NavLink to="/auth">LOGIN</NavLink>
            )
          }
          <CartIcon />
        </NavLinks>
        {/* If this isCartOpen is true, show the cartDropDown */}
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
