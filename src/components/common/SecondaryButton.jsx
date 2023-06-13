import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SecondaryButton = ({ children, className, onClick, isLight = false }) => {
  const btnClasses = classNames('circle-icon-wrapper transition-all', {
    'bg-blue-main  text-grey-main hover:bg-accent hover:text-white': !isLight,
    'bg-grey-80 text-blue-main hover:bg-grey-main': isLight,
  });
  return (
    <button type="button" className={`${btnClasses} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isLight: PropTypes.bool,
};

export default SecondaryButton;
