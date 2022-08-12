import React from "react";
import amazon from "../asset/Amazonwhite.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { authenticate } from "../firebase";

function Header() {
  const [{ basket, user }, dipatch] = useStateValue();

  const signOut = () => {
    if (user) {
      authenticate.signOut();
      alert("User Successfully Logged Out");
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img className="nav-img" src={amazon} alt="amazon" />
      </Link>

      <div className="nav-search">
        <input className="sea-tex" type="text" placeholder="Search" />
        <SearchIcon className="sea-icon" />
      </div>
      <div className="nav-link">
        <Link to={!user && "/login"}>
          <div className="nav-opt" onClick={signOut}>
            <span className="op1">Hello {!user ? "Guest" : user.email}</span>
            <span className="op2">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <div className="nav-opt">
          <span className="op1">Returns </span>
          <span className="op2">& Order</span>
        </div>
        <div className="nav-opt">
          <span className="op1">Your</span>
          <span className="op2">Prime</span>
        </div>

        <Link to={"/checkout"}>
          <div className="nav-opt">
            <span className="op3 head-bascount ">
              <strong>{basket.length}</strong>
            </span>
            <ShoppingCartIcon className="cart" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
