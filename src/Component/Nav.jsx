import React from "react";
import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <nav className="navSec">
      <Link to="/">
        {" "}
        <img className="logo" src="https://img.favpng.com/21/3/25/logo-symbol-graphic-design-png-favpng-sphXDsdhAQSvnRLYPLzdASPRK.jpg"></img>
      </Link>
      <ul className="Nav-item">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/addDevs">Create a new devs</Link>
        </li>
      </ul>
    </nav>
  );
};
