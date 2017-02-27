import React, { Component } from 'react';

export default class Section extends Component {

  render() {
    return (
      <div className="section">
        <div className="section__image--wrapper">
          <img className="section__image" src={this.props.img} alt={this.props.img} />
        </div>
        <div className="section__title">
          {this.props.title}
        </div>
        <div className="section__text">
          {this.props.text}
        </div>
        <div className="section__text--sub">
          {this.props.subtext}
        </div>
        <div className="section__button">
          {this.props.button_text}
        </div>
      </div>
    );
  }
}

Section.propTypes = {
  img: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  subtext: React.PropTypes.string.isRequired,
  button_text: React.PropTypes.string.isRequired,
};
