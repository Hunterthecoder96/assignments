import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const { logout, token } = props;
  return (
    <div>
      {token && <Link to="/profile">Profile</Link>}
      <Link to="/public">Public</Link>
      {token && <button onClick={logout}>Logout</button>}
    </div>
  );
}

export default Navbar;
