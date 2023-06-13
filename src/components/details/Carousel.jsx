import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  BsChevronLeft,
  BsChevronRight,
  BsChevronCompactDown,
  BsChevronCompactUp,
  BsTrash,
  BsStar,
} from 'react-icons/bs';
import { useThunk } from 'hooks';
import { RoundedButton } from 'components/common';
import { CAROUSEL_WINDOW_WIDTH, DETAILED_CARD_HEIGHT } from 'utils/constants';
import { getCurrentHero, editHero } from 'store/heroes';

const Carousel = ({ images }) => {
  const [offset, setOffset] = useState(0);
  const [backdrop, setBackdrop] = useState(false);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [doEditHero] = useThunk(editHero);

  const currentHero = useSelector(getCurrentHero);
  const maxOffset = -(CAROUSEL_WINDOW_WIDTH * (images.length - 1));

  const onLeftArrowClick = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset + CAROUSEL_WINDOW_WIDTH;

      return Math.min(newOffset, 0);
    });

    setCurrentImgIdx(current => {
      if (current === 0) {
        return current;
      }
      if (current > 0) {
        return current - 1;
      }
    });
  };

  const onRightArrowClick = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset - CAROUSEL_WINDOW_WIDTH;

      return Math.max(newOffset, maxOffset);
    });
    setCurrentImgIdx(current => {
      if (current === images.length - 1) {
        return current;
      }
      if (current < images.length - 1) {
        return current + 1;
      }
    });
  };

  const backdropToggle = () => {
    setBackdrop(!backdrop);
  };

  const onSetImageAsMain = async imgIdx => {
    const mainImg = currentHero.images[imgIdx];
    const remainingImages = currentHero.images.filter((_, index) => index !== imgIdx);
    const updatedImages = [mainImg, ...remainingImages];
    const updatedHeroData = { ...currentHero, images: updatedImages };
    delete updatedHeroData._id;
    await doEditHero({ hero: currentHero, updatedHero: updatedHeroData });
    backdropToggle();
  };

  const onDeleteImage = async imgIdx => {
    const remainingImages = [...currentHero.images];
    remainingImages.splice(imgIdx, 1);

    const updatedHeroData = { ...currentHero, images: remainingImages };
    delete updatedHeroData._id;
    await doEditHero({ hero: currentHero, updatedHero: updatedHeroData });
    backdropToggle();
  };

  const carouselWrapperClasses = classNames(`relative overflow-hidden`);
  const carouselWindowClasses = classNames('w-full h-full overflow-hidden');
  const carouselContainerClasses = classNames(`h-full flex transition-all`);
  const imgClasses = classNames('max-w-full min-w-full h-full object-cover');
  const buttonsWrapperClasses = classNames(
    'flex gap-6 absolute left-1/2 bottom-6 -translate-x-1/2'
  );
  const backdropClasses = classNames(
    'absolute inset-0 z-40 backdrop-blur-md bg-blue-main-50 transition-all flex items-center justify-evenly ',
    { '-translate-y-full': !backdrop, 'translate-y-0': backdrop }
  );
  const backdropIconWrapperClasses = classNames(
    'absolute z-50 left-1/2 -top-[28px] -translate-x-1/2 w-12 h-12 rounded-md bg-grey-90 cursor-pointer hover:bg-grey-main transition-all'
  );
  const backdropIconClasses = classNames('absolute -bottom-1 left-1/2 -translate-x-1/2');

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

      <div className={backdropClasses}>
        {images.length > 1 && (
          <div className="flex flex-col items-center">
            <RoundedButton onClick={() => onSetImageAsMain(currentImgIdx)} isLight>
              <BsStar />
            </RoundedButton>
            <p className="text-grey-light mt-2">Set as main picture</p>
          </div>
        )}
        <div className="flex flex-col items-center">
          <RoundedButton onClick={() => onDeleteImage(currentImgIdx)} isLight>
            <BsTrash />
          </RoundedButton>
          <p className="text-grey-light mt-2">Remove the picture</p>
        </div>
      </div>

      <div className={backdropIconWrapperClasses} onClick={backdropToggle}>
        {backdrop ? (
          <BsChevronCompactUp className={backdropIconClasses} />
        ) : (
          <BsChevronCompactDown className={backdropIconClasses} />
        )}
      </div>

      {images.length !== 1 && (
        <div className={buttonsWrapperClasses}>
          <RoundedButton onClick={onLeftArrowClick} isLight>
            <BsChevronLeft />
          </RoundedButton>
          <RoundedButton onClick={onRightArrowClick} isLight>
            <BsChevronRight />
          </RoundedButton>
        </div>
      )}
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
