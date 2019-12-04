import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navlink.css';

function Navlink() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <NavLink exact to='/' activeClassName="active-red">Home</NavLink>
        </li>
        <li>
          <NavLink to='/our-history' activeClassName="active-red">History</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navlink;