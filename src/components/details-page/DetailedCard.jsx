import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { BsPencil } from 'react-icons/bs';

import { RoundedButton } from 'components/common';

const DetailedCard = ({ hero }) => {
  const definitionWrapper = classNames('flex justify-between items-center');
  const nameClasses = classNames('text-xl');
  const termClasses = classNames('text-accent-shady mt-4 first-of-type:mt-0');
  const descrClasses = classNames(
    'text-md w-[80%] leading-tight flex justify-between items-center'
  );

  return (
    <section className="px-10">
      <div className="w-full min-h-[600px] bg-grey-90 shadow-test-card flex gap-6">
        <img src={hero.images} alt={`${hero.nickname}`} className="w-1/3 object-cover" />
        <div className="p-14">
          <dl className="h-full">
            <dt className={termClasses}>Nickname</dt>
            <div className={definitionWrapper}>
              <dd className={nameClasses}>{hero.nickname}</dd>
              <RoundedButton>
                <BsPencil />
              </RoundedButton>
            </div>

            <dt className={termClasses}>Real name</dt>
            <div className={definitionWrapper}>
              <dd className={descrClasses}>{hero.real_name}</dd>
              <RoundedButton>
                <BsPencil />
              </RoundedButton>
            </div>

            <dt className={termClasses}>Description</dt>
            <div className={definitionWrapper}>
              <dd className={descrClasses}>{hero.origin_description}</dd>
              <RoundedButton>
                <BsPencil />
              </RoundedButton>
            </div>

            <dt className={termClasses}>Catch phrase</dt>
            <div className={definitionWrapper}>
              <dd className={descrClasses}>{hero.catch_phrase}</dd>
              <RoundedButton>
                <BsPencil />
              </RoundedButton>
            </div>
          </dl>
        </div>
      </div>
      ;
    </section>
  );
};

const heroObj = {
  id: PropTypes.string,
  nickname: PropTypes.string,
  real_name: PropTypes.string,
  origin_description: PropTypes.string,
  superpowers: PropTypes.string,
  catch_phrase: PropTypes.string,
  images: PropTypes.string,
};

DetailedCard.propTypes = {
  hero: PropTypes.shape(heroObj).isRequired,
};

export default DetailedCard;
