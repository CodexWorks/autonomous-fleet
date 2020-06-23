import React, { Fragment } from 'react';
import axios from 'axios';

class MainContent extends React.Component {
  state = {
    text: [],
  };

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/1').then((res) => {
      this.setState({
        text: res.data,
      });
      console.log(res.data);
    });
  }

  render() {
    return (
      <Fragment>
        <h2>{this.state.text.headline}</h2>
        <div className='line'></div>
        <p>{this.state.text.body_text}</p>
        <span>{this.state.text.pub_date}</span>
      </Fragment>
    );
  }
}

export default MainContent;
