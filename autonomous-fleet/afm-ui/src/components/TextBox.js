import React from 'react';

class TextBox extends React.Component {
  state = {
    headline: '',
    body_text: '',
    pub_date: '',
  };

  handleHeadlineChange = (event) => {
    this.setState({
      headline: event.target.value,
    });
  };
  handleBodyTextChange = (event) => {
    this.setState({
      body_text: event.target.value,
    });
  };
  handleAuthorChange = (event) => {
    this.setState({
      pub_date: event.target.value,
    });
  };

  render() {
    return (
      <div className='textBoxContainer'>
        <textarea
          value={this.state.headline}
          onChange={this.handleHeadlineChange}
          cols={40}
          rows={1}
          placeholder='Insert headline here..'
        ></textarea>
        <textarea
          value={this.state.body_text}
          onChange={this.handleBodyTextChange}
          cols={40}
          rows={10}
          placeholder='Insert text body here..'
        ></textarea>
        <textarea
          value={this.state.pub_date}
          onChange={this.handleAuthorChange}
          cols={20}
          rows={1}
          placeholder='Insert author name here..'
        ></textarea>
        <button onClick={this.onClickSendToServer}>Send to DB</button>
      </div>
    );
  }
}

export default TextBox;
