import React from 'react'
import PropTypes from 'prop-types'
import {Link } from 'react-router-dom'

export default function Nbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}style={{borderBottom:props.mode === 'dark'?'1px solid white':'1px solid black'}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/about">About</Link>
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
          <input className="form-check-input" onClick = {props.toggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{border:props.mode === 'dark'?'1px solid white':'1px solid black'}}/>
          <label className="form-check-label" HtmlFor="flexSwitchCheckDefault">{props.toggletext}</label>
        </div>
      </div>
    </div>
  </nav>
  )
}
Nbar.propTypes = {
    title : PropTypes.string
}