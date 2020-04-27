import React, { Component } from 'react'
import { login } from './UserFunctions'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password,
      type: this.state.type
    }

    login(user).then(res => {
      if (!res.error) {
        this.props.history.push(`/profile`)
      }
    })
  }

  render() {
    return (

      <div className="container login_container">
        <div className="row login_second_container">
          <div className="col-md-6" style={{marginLeft: '0px', marginTop: '2rem'}}>
            <form noValidate onSubmit={this.onSubmit} className="login-form">

              <div className="form-group">
                <label htmlFor="email">E-mail address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"

                  value={this.state.email}
                  onChange={this.onChange}
                />

              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <span></span>
                <input
                  type="password"
                  className="form-control"
                  name="password"

                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <label>Login as
              <div className="form-control user-types">
                  <label className = "radio-label">
                    <input type="radio" value="shipper" checked={this.state.type === 'shipper'} />
                      &nbsp;&nbsp;Shipper
                  </label>
                   <label className = "radio-label">
                    <input type="radio" value="carrier" checked={this.state.type === 'carrier'} />
                      &nbsp;&nbsp;Carrier
                  </label>
                </div>
              </label>


              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block login-btn"
              >
                LOGIN >>
              </button>
                <h6 className="forgot-password">I forgot my password</h6>
                <h6 className="new-account">You don't have an account? Sign up, it's FREE!</h6>
            </form>

          </div>
        </div>
      </div>
    )
  }
}

export default Login
