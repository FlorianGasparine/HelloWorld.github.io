import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            /* Operation terrenaire, si className est actif ? Si oui alors on applique la classe si c'est non on applique une chaine vide  */
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Homepage</li>
          </NavLink>

          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>About</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
