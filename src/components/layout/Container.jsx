import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Container = ({ children, className }) => {
  const classes = classNames(`my-0 mx-auto container ${className}`);

  return <div className={classes}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
