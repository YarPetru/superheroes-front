import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { BsTrash, BsPencil, BsInfoLg } from 'react-icons/bs';
import { HeroForm, Modal, RoundedButton, Button } from 'components/common';
import { removeHero, fetchHeroes } from 'store/heroes';
import { useThunk } from 'hooks/use-thunk';

import defaultCover from 'images/default-cover.jpg';

const HeroCard = ({ hero }) => {
  const [doRemoveHero] = useThunk(removeHero);
  const [doFetchHeroes] = useThunk(fetchHeroes);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const onDeleteConfirmClick = () => {
    doRemoveHero(hero);
    setIsDeleteModalOpen(false);
    doFetchHeroes(1);
  };

  return (
    <>
      <div className="group relative w-64 h-96 bg-grey-main rounded-2xl overflow-hidden ">
        <img
          src={!!hero.images ? hero.images : defaultCover}
          alt="#"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 w-full h-full p-6 flex flex-col justify-between items-center bg-grey-80 translate-y-[300px] text-center group-hover:translate-y-0 group-hover:bg-grey-90 transition-all">
          <h3 className="bangers-font text-md group-hover:scale-150 group-hover:text-accent transition-all">
            {hero.nickname}
          </h3>
          <div className=" h-64 flex flex-col justify-around items-center">
            <Link to={`/superheroes/${hero._id}`}>
              <RoundedButton>
                <BsInfoLg />
              </RoundedButton>
            </Link>
            <RoundedButton onClick={() => setIsEditModalOpen(true)}>
              <BsPencil />
            </RoundedButton>
            <RoundedButton onClick={() => setIsDeleteModalOpen(true)}>
              <BsTrash />
            </RoundedButton>
          </div>
        </div>
      </div>

      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        {hero && <HeroForm hero={hero} onCancelBtnClick={() => setIsEditModalOpen(false)} />}
      </Modal>

      <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}>
        <h2>are you shure?</h2>
        <div className="mt-6 flex items-center gap-10">
          <Button type="button" btnText="Yes" option="redBtn" onClick={onDeleteConfirmClick} />
          <Button
            type="button"
            btnText="Cancel"
            option="blueBtn"
            onClick={() => setIsDeleteModalOpen(false)}
          />
        </div>
      </Modal>
    </>
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
