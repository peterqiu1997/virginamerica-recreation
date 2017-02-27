import React, { Component } from 'react';
import RadioButtons from './RadioButtons';
import Dropdown from './Dropdown';

export default class Booking extends Component {
  render() {
    return (
      <div className="booking">
        <RadioButtons />
        <div className="dropdown__title">Where would you like to go?</div>
        <div className="dropdown__wrapper">
          <Dropdown title={'Guests'} text={'1 Adult'} />
          <Dropdown title={'From'} text={'San Francisco'} />
          <Dropdown title={'To'} text={'Los Angeles'} />
        </div>
        <div className="dropdown__search--wrapper">
          <div className="dropdown__search">
            Search Flights
          </div>
        </div>
      </div>
    );
  }
}
