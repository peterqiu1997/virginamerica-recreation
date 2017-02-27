import React, { Component } from 'react';

export default class Panel extends Component {

  render() {
    return (
      <div className="panel">
        <div className="panel__title">
          {this.props.title}
        </div>
        <div className="panel__image--wrapper">
          <img className="panel__image" src={this.props.img} alt={this.props.img} />
        </div>
        <div className="panel__text">
          {this.props.text}
        </div>
        <div className="panel__button">
          {this.props.button_text}
        </div>
      </div>
    );
  }
}

Panel.propTypes = {
  img: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  button_text: React.PropTypes.string.isRequired,
};
