import React from 'react';
import PropTypes from 'prop-types';
import { BsPlusLg } from 'react-icons/bs';

const AddButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="circle-icon-wrapper w-24 h-24 bg-grey-80 text-blue-main hover:bg-grey-main transition-all"
      onClick={onClick}
    >
      <BsPlusLg size="48" />
    </button>
  );
};

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddButton;
