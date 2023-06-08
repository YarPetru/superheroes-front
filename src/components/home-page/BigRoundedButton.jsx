import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BigRoundedButton = ({ children, onClick, isAddBtn = false }) => {
  const btnClasses = classNames(
    'circle-icon-wrapper bg-grey-80 text-blue-main hover:bg-grey-main transition-all disabled:text-grey-80',
    {
      'w-40 h-24 text-md bangers-font leading-none flex items-center': !isAddBtn,
      'w-24 h-24': isAddBtn,
    }
  );
  return (
    <button type="button" className={btnClasses} onClick={onClick}>
      {children}
    </button>
  );
};

BigRoundedButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isAddBtn: PropTypes.bool,
};

export default BigRoundedButton;
