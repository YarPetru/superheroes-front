import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { RoundedButton } from 'components/common';
import { CAROUSEL_WINDOW_WIDTH, DETAILED_CARD_HEIGHT } from 'ustils/constants';

const Carousel = ({ images }) => {
  const [offset, setOffset] = useState(0);
  const maxOffset = -(CAROUSEL_WINDOW_WIDTH * (images.length - 1));

  const carouselWrapperClasses = classNames(`relative`);
  const carouselWindowClasses = classNames('w-full h-full overflow-hidden');
  const carouselContainerClasses = classNames(`h-full flex transition-all`);
  const imgClasses = classNames('max-w-full min-w-full h-full object-cover');
  const buttonsWrapperClasses = classNames(
    'flex gap-6 absolute left-1/2 bottom-6 -translate-x-1/2'
  );
  const arrowClasses = classNames('');

  const onLeftArrowClick = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset + CAROUSEL_WINDOW_WIDTH;

      return Math.min(newOffset, 0);
    });
  };

  const onRightArrowClick = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset - CAROUSEL_WINDOW_WIDTH;

      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div
      className={carouselWrapperClasses}
      style={{ height: `${DETAILED_CARD_HEIGHT}px`, width: `${CAROUSEL_WINDOW_WIDTH}px` }}
    >
      <div className={carouselWindowClasses}>
        <div className={carouselContainerClasses} style={{ transform: `translateX(${offset}px)` }}>
          {images?.map(img => (
            <img key={img} src={img} alt={`superhero`} className={imgClasses} />
          ))}
        </div>
      </div>

      <div className={buttonsWrapperClasses}>
        <RoundedButton className={arrowClasses} onClick={onLeftArrowClick} isLight>
          <BsChevronLeft />
        </RoundedButton>
        <RoundedButton className={arrowClasses} onClick={onRightArrowClick} isLight>
          <BsChevronRight />
        </RoundedButton>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
