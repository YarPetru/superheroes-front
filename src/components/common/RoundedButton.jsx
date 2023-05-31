import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RoundedButton = ({ children, className, onClick }) => {
  const btnClasses = classNames(
    'circle-icon-wrapper bg-blue-main border-blue-main text-grey-main hover:bg-accent hover:text-white transition-all'
  );
  return (
    <button type="button" className={`${btnClasses} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

RoundedButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default RoundedButton;
