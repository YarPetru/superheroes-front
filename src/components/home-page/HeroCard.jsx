import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsTrash, BsPencil, BsInfoLg } from 'react-icons/bs';
import { HeroForm, Modal, RoundedButton, Button } from 'components/common';
import { useThunk } from 'hooks';
import { fetchHeroes, getCurrentPage, getHeroes, removeHero } from 'store/heroes';
import defaultCover from 'images/default-cover.jpg';
import { setCurrentPage } from 'store/heroes/heroesSlice';

const HeroCard = ({ hero }) => {
  const dispatch = useDispatch();
  const [doRemoveHero] = useThunk(removeHero);
  const [doFetchHeroes] = useThunk(fetchHeroes);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { data: heroes } = useSelector(getHeroes);
  const currentPage = useSelector(getCurrentPage);

  const onDeleteConfirmClick = async () => {
    await doRemoveHero(hero);
    heroes.length === 1 && dispatch(setCurrentPage(currentPage - 1));
    setIsDeleteModalOpen(false);
    doFetchHeroes(currentPage);
  };

  const openModal = () => setIsEditModalOpen(true);
  const closeModal = () => setIsEditModalOpen(false);

  return (
    <>
      <div className="group relative w-64 h-96 bg-grey-main rounded-2xl overflow-hidden ">
        <img
          src={!!hero.images ? hero.images : defaultCover}
          alt="#"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 w-full h-full p-6 flex flex-col justify-between items-center bg-grey-80 translate-y-[300px] text-center group-hover:translate-y-0 group-hover:bg-grey-90 transition-all">
          <h3 className="bangers-font text-md overflow-hidden w-full group-hover:scale-125 group-hover:text-accent transition-all">
            {hero.nickname.length > 16 ? hero.nickname.slice(0, 12) + '...' : hero.nickname}
          </h3>
          <div className=" h-64 flex flex-col justify-around items-center">
            <Link to={`/superheroes/${hero._id}`}>
              <RoundedButton>
                <BsInfoLg />
              </RoundedButton>
            </Link>
            <RoundedButton onClick={openModal}>
              <BsPencil />
            </RoundedButton>
            <RoundedButton onClick={openModal}>
              <BsTrash />
            </RoundedButton>
          </div>
        </div>
      </div>

      <Modal isOpen={isEditModalOpen} onClose={closeModal}>
        {hero && <HeroForm hero={hero} onCancelBtnClick={closeModal} />}
      </Modal>

      <Modal isOpen={isDeleteModalOpen} onClose={closeModal}>
        <h2>Are you shure?</h2>
        <div className="mt-6 flex items-center gap-10">
          <Button type="button" btnText="Delete" option="redBtn" onClick={onDeleteConfirmClick} />
          <Button type="button" btnText="Cancel" option="blueBtn" onClick={closeModal} />
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
