import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ btnText, className, option, type = 'button', disabled, onClick }) => {
  const classes = classNames(
    `px-8 py-3 w-48 rounded-md border-2 border-grey-main bangers-font bordered-font tracking-widest text-md shadow-cta text-grey-main hover:text-white transition-all
    disabled:text-grey-80 disabled:bg-grey-80 ${className}`,
    {
      'bg-blue-light hover:bg-blue-main': option === 'blueBtn',
      'bg-accent hover:bg-accent-shady': option === 'redBtn',
    }
  );

  return (
    <button type={type} disabled={disabled} className={classes} onClick={onClick}>
      {btnText}
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  option: PropTypes.oneOf(['redBtn', 'blueBtn']).isRequired,
  type: PropTypes.oneOf(['submit', 'button']).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
