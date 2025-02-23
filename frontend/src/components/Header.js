import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">MyService</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#tvshows">TV Shows</a>
        <a href="#movies">Movies</a>
        <a href="#new">New & Popular</a>
        <a href="#mylist">My List</a>
      </nav>
      <div className="profile">
        <img src="/path/to/profile/icon" alt="Profile" />
      </div>
    </header>
  );
}

export default Header;