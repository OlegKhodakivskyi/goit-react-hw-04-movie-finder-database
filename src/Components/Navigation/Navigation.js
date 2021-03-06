import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <header>
      <nav>
        <ul className={styles.navigation}>
          <li>
            <NavLink
              to={{
                pathname: "/"
              }}
              className={styles.navigationItem}
              activeClassName={styles.navigationItemActive}
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: "/movies",
              }}
              className={styles.navigationItem}
              activeClassName={styles.navigationItemActive}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default withRouter(Navigation);
