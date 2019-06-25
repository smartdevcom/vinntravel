import React from "react";
import PropTypes from 'prop-types';

const ErrorMessage = props => (
  <div>Error! {props.message}</div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorMessage;
