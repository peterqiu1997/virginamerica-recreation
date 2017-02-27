import React, { Component } from 'react';

export default class Dropdown extends Component {
  render() {
    return (
      <div className="dropdown__element">
        <div className="element--wrapper">
          <div className="element__title">
            {this.props.title}
          </div>
          <div className="element__text">
            {this.props.text}
          </div>
        </div>
        <div className="dropdown__content" />
      </div>
    );
  }
}

Dropdown.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
};
