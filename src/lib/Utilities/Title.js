import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {
  render() {
    const { text } = this.props;
    return (
      <div>
        <h1>{text}</h1>
      </div>
    );
  }
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
