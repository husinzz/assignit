import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

render() {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">Assign It</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Assignment List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/add">Add Assignment</Link>
        </li>
      </ul>
    </div>
  </nav>
  );
}





}