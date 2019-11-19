import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import lotus from '../images/lotus.png';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar  navbar-expand-lg ">
        <div className="container">
      <a className="navbar-brand" href="./" >Lotus</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
         
         </ul>
         </div>
         </div>
       </div>
       </nav>
    )
    }
  }

export default Navbar;