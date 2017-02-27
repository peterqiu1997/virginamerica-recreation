import React, { Component } from 'react';

export default class RadioButtons extends Component {
  render() {
    return (
      <div className="radiobuttons__container">
        <div className="radiobuttons">
          <div className="radiobutton"><input type="radio" name="trip" value="Round Trip" /> Round Trip</div>
          <div className="radiobutton"><input type="radio" name="trip" value="One Way" /> One Way</div>
          <div className="radiobutton"><input type="radio" name="trip" value="Multi City" /> Multi City</div>
        </div>
      </div>
    );
  }
}
