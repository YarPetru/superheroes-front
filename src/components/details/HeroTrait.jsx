import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BsPencil } from 'react-icons/bs';
import { RoundedButton } from 'components/common';

const HeroTrait = ({ term, definition, openModal, isName = false }) => {
  const nameClasses = classNames('text-xl');
  const definitionWrapper = classNames('flex justify-between items-center gap-10');
  const termClasses = classNames('text-accent-shady mt-4 first-of-type:mt-0');
  const descrClasses = classNames(
    'text-md w-[80%] leading-tight flex justify-between items-center'
  );
  return (
    <>
      <dt className={termClasses}>{term}</dt>
      <div className={definitionWrapper}>
        <dd className={isName ? nameClasses : descrClasses}>{definition}</dd>
        <RoundedButton onClick={openModal}>
          <BsPencil />
        </RoundedButton>
      </div>
    </>
  );
};

HeroTrait.propTypes = {
  term: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  isName: PropTypes.bool,
};

export default HeroTrait;
