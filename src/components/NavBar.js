
import '/home/mitushi/Documents/Manjaro_docs/React_js/NewsApp/src/Nav.css'


import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar =()=> {
 
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand fs-4" to="/">
              NewsApp
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      borderBottomStyle: 'solid',
                      borderBottomColor: 'blue',
                      borderBottomWidth: 2,
                    }}
                    className="nav-link mx-3 fs-5"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      borderBottomStyle: 'solid',
                      borderBottomColor: 'blue',
                      borderBottomWidth: 2,
                    }}
                    className="nav-link mx-3 fs-5"
                    to="/business"
                  >
                    Business
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      borderBottomStyle: 'solid',
                      borderBottomColor: 'blue',
                      borderBottomWidth: 2,
                    }}
                    className="nav-link mx-3 fs-5"
                    to="/entertainment"
                  >
                    Entertainment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      borderBottomStyle: 'solid',
                      borderBottomColor: 'blue',
                      borderBottomWidth: 2,
                    }}
                    className="nav-link mx-3 fs-5"
                    to="/general"
                  >
                    General
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      borderBottomStyle: 'solid',
                      borderBottomColor: 'blue',
                      borderBottomWidth: 2,
                    }}
                    className="nav-link mx-3 fs-5"
                    to="/health"
                  >
                    Health
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      borderBottomStyle: 'solid',
                      borderBottomColor: 'blue',
                      borderBottomWidth: 2,
                    }}
                    className="nav-link mx-3 fs-5"
                    to="/science"
                  >
                    Science
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      borderBottomStyle: 'solid',
                      borderBottomColor: 'blue',
                      borderBottomWidth: 2,
                    }}
                    className="nav-link mx-3 fs-5"
                    to="/sports"
                  >
                    Sports
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      borderBottomStyle: 'solid',
                      borderBottomColor: 'blue',
                      borderBottomWidth: 2,
                    }}
                    className="nav-link mx-3 fs-5"
                    to="/technology"
                  >
                    Technology
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }


export default NavBar
