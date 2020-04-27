import React, { Component } from 'react'

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5" style={{backgroundColor:'rgba(49, 69, 88, 0.71)'}}>
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center" style={{color:'rgb(243, 156, 18)'}}>WELCOME</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
