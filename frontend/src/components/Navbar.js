import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/register" className="text-white">Register</Link></li>
        <li><Link to="/login" className="text-white">Login</Link></li>
        {/* Add more links for Dashboard, Project List, etc. */}
      </ul>
    </nav>
  );
}

export default Navbar;