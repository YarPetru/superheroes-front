import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { BsTrash, BsPencil, BsInfoLg } from 'react-icons/bs';
import { HeroForm, Modal, RoundedButton, Button } from 'components/common';
import { removeHero } from 'store/heroes';
import { useThunk } from 'hooks/use-thunk';

const HeroCard = ({ hero }) => {
  const [doRemoveHero, isLoading, error] = useThunk(removeHero);

  const dispatch = useDispatch();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const onDeleteConfirmClick = () => {
    doRemoveHero(hero);
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <div className="group relative w-64 h-96 bg-grey-main rounded-2xl overflow-hidden ">
        <img
          src={
            !!hero.images
              ? hero.images
              : 'https://static.tvtropes.org/pmwiki/pub/images/superman_5.png'
          }
          alt="#"
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

      {isEditModalOpen && (
        <Modal onClose={() => setIsEditModalOpen(false)}>
          <HeroForm />
          {/* <div className="mt-6 flex items-center gap-10">
            <Button btnText="Add New" type="redBtn" />
            <Button btnText="Cancel" type="blueBtn" onClick={() => setIsEditModalOpen(false)} />
          </div> */}
        </Modal>
      )}

      {isDeleteModalOpen && (
        <Modal onClose={() => setIsDeleteModalOpen(false)}>
          <h2>are you shure?</h2>
          <div className="mt-6 flex items-center gap-10">
            <Button btnText="Yes" option="redBtn" onClick={onDeleteConfirmClick} />
            <Button btnText="Cancel" option="blueBtn" onClick={() => setIsDeleteModalOpen(false)} />
          </div>
        </Modal>
      )}
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
  // onDelete: PropTypes.func.isRequired,
};

export default HeroCard;
