import React, { Fragment } from 'react';
import axios from 'axios';

/* This component was used for example purposes, not part of AFM functionality */

// ############### Constructor ###############
class TextBox extends React.Component {
  state = {
    headline: '',
    body_text: '',
    pub_date: '',
    orders: [],
  };

  // ############### Event Handlers ###############

  /** Headline field */
  handleHeadlineChange = (event) => {
    this.setState({
      headline: event.target.value,
    });
  };

  /** Body text field */
  handleBodyTextChange = (event) => {
    this.setState({
      body_text: event.target.value,
    });
  };

  /** Author field */
  handleAuthorChange = (event) => {
    this.setState({
      pub_date: event.target.value,
    });
  };

  /** POST Headline, Body, and Author to DB */
  onClickSendToServer = () => {
    let payload = {
      headline: this.state.headline,
      body_text: this.state.body_text,
      pub_date: this.state.pub_date,
    };
    axios
      .post('http://127.0.0.1:8000/api/', payload)
      .then((res) => {
        alert('Updated');
        console.log(res);
      })
      .catch((error) => {
        console.log('onClickSendToServer err ' + error);
        console.log(payload);
      });
  };

  onClickShowOrders = () =>{
    axios
      .get('http://127.0.0.1:8000/api/')
      .then((res) => {
        this.setState({
          orders: res.data
        });
      })
  }

  // ############# RENDER ###########
  render() {
    return (
      <Fragment>
        <br />
        <h2>Create an article:</h2>
        <div className='textBoxContainer'>
          <textarea
            name='title'
            value={this.state.headline}
            onChange={this.handleHeadlineChange}
            cols={40}
            rows={1}
            placeholder='Insert headline here..'
          ></textarea>
          <textarea
            name='body_text'
            value={this.state.body_text}
            onChange={this.handleBodyTextChange}
            cols={40}
            rows={10}
            placeholder='Insert text body here..'
          ></textarea>
          <textarea
            name='pub_date'
            value={this.state.pub_date}
            onChange={this.handleAuthorChange}
            cols={20}
            rows={1}
            placeholder='Insert date here..'
          ></textarea>
          <button type='submit' onClick={this.onClickSendToServer}>
            Submit to DB
          </button>
          <button onClick={() => {
              this.onClickShowOrders();
              
          }}>
            Show orders
          </button>
        </div>
      </Fragment>
    );
  }
}

export default TextBox;
