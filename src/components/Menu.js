import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ changeMenuMarker, page }) => (
  <div className="navbar-options">
    <Link to='/' onClick={() => changeMenuMarker('início')}>
      <span style={{ borderColor: page === 'início' ? '#B8130D' : null }}>Início</span>
    </Link>
    <Link to='/favorites' onClick={() => changeMenuMarker('lista')}>
      <span style={{ borderColor: page === 'lista' ? '#B8130D' : null }}>Minha Lista</span>
    </Link>
  </div>
);

export { Menu };
