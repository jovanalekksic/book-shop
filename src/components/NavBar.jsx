import React from "react";
import { HiShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavBar = ({ cartNum }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Bookstore
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse show"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ">
              <Link className="nav-link active" aria-current="page" to="/cart">
                Cart
              </Link>
              <Link className="nav-link" to="/feedback">
                Feedback
              </Link>
              <Link to="/cart" className="cart-items me-auto mb-2">
                <HiShoppingBag size={26} />
                <div className="cart-num">{cartNum}</div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
