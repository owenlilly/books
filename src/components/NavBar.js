import React from 'react';

const NavBar = () => {
  return(
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#">AdminStrap</a>
      </div>
      <div id="navbar" className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li className="active"><a href="index.html">Dashboard</a></li>
          <li><a href="pages.html">Pages</a></li>
          <li><a href="posts.html">Posts</a></li>
          <li><a href="users.html">Users</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Welcome, Brad</a></li>
          <li><a href="login.html">Logout</a></li>
        </ul>
      </div>{/*/.nav-collapse */}
    </div>
  </nav>

  )
}
export default NavBar;
