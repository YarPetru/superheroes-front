import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ btnText, className, option, disabled, onClick }) => {
  const classes = classNames(
    `px-8 py-3 w-48 rounded-md border-2 border-grey-main bangers-font bordered-font tracking-widest text-md shadow-cta text-grey-main hover:text-white transition-all ${className}`,
    {
      'bg-blue-light hover:bg-blue-main': option === 'redBtn',
      'bg-accent hover:bg-accent-shady': option === 'blueBtn',
      'bg-grey-80 hover:bg-grey-80 text-grey-80 hover:text-grey-80': disabled,
    }
  );

  return (
    <button type="button" disabled={disabled} className={classes} onClick={onClick}>
      {btnText}
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['redBtn', 'blueBtn']).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
