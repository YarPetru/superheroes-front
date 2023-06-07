import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsXCircleFill } from 'react-icons/bs';
import { HeroForm, Modal } from 'components/common';
import defaultCover from 'images/default-cover.jpg';
import HeroTrait from './HeroTrait';

const DetailedCard = ({ hero }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openModal = () => setIsEditModalOpen(true);
  const closeModal = () => setIsEditModalOpen(false);

  return (
    <section className="px-10">
      <div className="relative w-full h-[720px] bg-grey-90 shadow-test-card flex gap-6 over">
        <img
          src={!!hero.images ? hero.images : defaultCover}
          alt={`${hero.nickname}`}
          className="w-1/3 object-cover"
        />
        <div className="p-14 w-full">
          <dl className="h-full overflow-auto">
            {!!hero.nickname && (
              <HeroTrait term="Nickname" definition={hero.nickname} openModal={openModal} isName />
            )}

            {!!hero.real_name && (
              <HeroTrait term="Real name" definition={hero.real_name} openModal={openModal} />
            )}

            {!!hero.origin_description && (
              <HeroTrait
                term="Description"
                definition={hero.origin_description}
                openModal={openModal}
              />
            )}

            {!!hero.superpowers && (
              <HeroTrait term="Superpowers" definition={hero.superpowers} openModal={openModal} />
            )}

            {!!hero.catch_phrase && (
              <HeroTrait term="Catch phrase" definition={hero.catch_phrase} openModal={openModal} />
            )}
          </dl>
        </div>
        <Link to="/" className="absolute top-4 right-4 text-blue-main hover:text-brown">
          <BsXCircleFill />
        </Link>
      </div>
      <Modal isOpen={isEditModalOpen} onClose={closeModal}>
        <HeroForm hero={hero} onCancelBtnClick={closeModal} />
      </Modal>
    </section>
  );
};

const heroObj = {
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
