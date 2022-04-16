import React from "react";
import Icon from "@mdi/react";
import { mdiDelete, mdiPlus, mdiReload } from "@mdi/js";

// Stateless Functional Component
const NavBar = ({ totalCounters, onReset, onDeleteAll, onAddCounter }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Counters <span className="badge bg-secondary">{totalCounters}</span>
        </span>
        <ul className="nav nav-pills">
          <li className="nav-item px-2">
            <button href="#" className="btn btn-primary" onClick={onAddCounter}>
              <Icon
                path={mdiPlus}
                title="Add Counter"
                size={1}
                horizontal
                vertical
                color="white"
              />
            </button>
          </li>
          <li className="nav-item px-2">
            <button href="#" className="btn btn-warning" onClick={onReset}>
              <Icon
                path={mdiReload}
                title="Reset Counters"
                size={1}
                horizontal
                vertical
                color="white"
              />
            </button>
          </li>
          <li className="nav-item px-2">
            <button href="#" className="btn btn-danger" onClick={onDeleteAll}>
              <Icon
                path={mdiDelete}
                title="Delete all Counters"
                size={1}
                horizontal
                vertical
                rotate={180}
                color="white"
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
