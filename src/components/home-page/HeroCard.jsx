import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { BsTrash, BsPencil, BsInfoLg } from 'react-icons/bs';

const HeroCard = ({ hero }) => {
  const btnClasses = classNames(
    'circle-icon-wrapper bg-blue-main border-blue-main text-grey-main hover:bg-accent hover:text-white transition-all'
  );
  return (
    <div className="group relative w-64 h-96 bg-grey-main rounded-2xl overflow-hidden ">
      <img
        src={
          hero.images ? hero.images : 'https://static.tvtropes.org/pmwiki/pub/images/superman_5.png'
        }
        alt="#"
        // className=" w-full h-[300px] object-cover"
      />
      <div className="absolute top-0 w-full h-full p-6 flex flex-col justify-between items-center bg-grey-80 translate-y-[300px] text-center group-hover:translate-y-0 group-hover:bg-grey-90 transition-all">
        <h3 className="bangers-font text-md group-hover:scale-150 group-hover:text-accent transition-all">
          {hero.nickname}
        </h3>
        <div className=" h-64 flex flex-col justify-around items-center">
          <Link to={`/superheroes/${hero._id}`} className={btnClasses}>
            <BsInfoLg />
          </Link>
          <button type="button" className={btnClasses}>
            <BsPencil />
          </button>
          <button type="button" className={btnClasses}>
            <BsTrash />
          </button>
        </div>
      </div>
    </div>
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

HeroCard.propTypes = {
  hero: PropTypes.shape(heroObj).isRequired,
};

export default HeroCard;
