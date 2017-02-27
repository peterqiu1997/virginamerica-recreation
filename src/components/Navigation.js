import React, { Component } from 'react';
import classNames from 'classnames';

export default class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e) {
    e.preventDefault();
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <div className="nav">
        <div className="nav__topbar">
          <span className="nav__topbar--text">Travel Advisories: Merger Close with Alaska Airlines <a href="">More</a></span>
        </div>
        <div
          className={classNames('nav__menu', { 'nav__menu--open': this.state.open,
          })}
        >
          <div className="nav__logo--wrapper border">
            <img className="nav__logo" src={'src/components/logo.png'} alt="logo" />
          </div>
          <div className="menuIcon">
            <a href="" onClick={this._handleClick}>MENU</a>
          </div>
          <div className="nav__links">
            <div className="nav__link big">
              <a href="" onClick={this._handleClick}>BOOK</a>
            </div>
            <div className="nav__link big">
              <a href="" onClick={this._handleClick}>CHECK IN</a>
            </div>
            <div className="nav__link big border">
              <a href="" onClick={this._handleClick}>MANAGE</a>
            </div>
            <div className="nav__link small">
              <a href="" onClick={this._handleClick}>Deals</a>
            </div>
            <div className="nav__link small">
              <a href="" onClick={this._handleClick}>Flying With Us</a>
            </div>
            <div className="nav__link small">
              <a href="" onClick={this._handleClick}>Where We Fly</a>
            </div>
            <div className="nav__link small">
              <a href="" onClick={this._handleClick}>Fees</a>
            </div>
            <div className="nav__link small">
              <a href="" onClick={this._handleClick}>Flight Status</a>
            </div>
            <div className="nav__link small border">
              <a href="" onClick={this._handleClick}>Flight Alerts</a>
            </div>
          </div>
          <div className="nav__sign">
            <div className="signin">
              <b>Sign In</b>
            </div>
            <div className="signup">
              <b>Sign Up</b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
