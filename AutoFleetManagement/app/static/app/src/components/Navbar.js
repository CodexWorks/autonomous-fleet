import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button } from 'reactstrap'
import '../index.css'
import logo from "../assets/logo_afm_3d.png"

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }
  render() {
    const loginRegLink = (
        <div

          id="navbarsExample10">
          <div >
           <button className="login_button" >
           <Link to="/login" className="nav-link">
            LOGIN
          </Link>

        </button>
        <button className="register_button" >
        <Link to="/register" className="nav-link">
            REGISTER
          </Link>

        </button>
          </div>


        </div>



    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg rounded p-0" style={{height:129, backgroundColor: '#7DBBD8', justifyContent :'space-between'}}>
        <div className = "navbar-brand logo-container">
            <a href="#!" className="logo-wrapper waves-effect ">
                <img alt="Logo" className="logo-img" src={logo}/>
            </a>
        </div>

        {localStorage.usertoken ? userLink : loginRegLink}

      </nav>
    )
  }
}

export default withRouter(Landing)
