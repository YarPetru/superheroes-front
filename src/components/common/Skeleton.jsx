import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Skeleton = ({ times, flexCol = false, isStatic = false, className }) => {
  const wrapperClasses = classNames('flex flex-wrap gap-5 justify-between', {
    'flex-col': flexCol,
  });
  const outerClasses = classNames(
    `relative overflow-hidden bg-grey-medium rounded-xl ${className}`
  );
  const innerClasses = classNames(
    `absolute inset-0 -translate-x-full bg-gradient-to-r from-grey-medium via-grey-light to-grey-medium z-40`,
    { 'animate-shimmer ': !isStatic }
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div className={outerClasses} key={i}>
          <div className={innerClasses} />
        </div>
      );
    });

  return <div className={wrapperClasses}>{boxes}</div>;
};

Skeleton.propTypes = {
  times: PropTypes.number.isRequired,
  flexCol: PropTypes.bool,
  isStatic: PropTypes.bool,
  className: PropTypes.string,
};

export default Skeleton;
