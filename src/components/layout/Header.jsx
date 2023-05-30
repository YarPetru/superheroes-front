import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-8 text-center border-b border-grey-main">
      <NavLink to="/superheroes">
        <h1>Superheroes</h1>
      </NavLink>
    </header>
  );
};

export default Header;
