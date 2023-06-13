import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsPlusLg, BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs';
import { useThunk } from 'hooks';
import { fetchAllHeroes, fetchHeroes, getCurrentPage, getHeroes } from 'store/heroes';
import { setCurrentPage } from 'store/heroes/heroes-slice';
import { Button, TextNotification, Skeleton, Modal, HeroForm } from 'components/common';
import HeroCard from './HeroCard';
import BigRoundedButton from './BigRoundedButton';

const HeroesList = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doFetchHeroes, isLoadingHeroes, loadingHeroesError] = useThunk(fetchHeroes);
  const [doFetchAllHeroes] = useThunk(fetchAllHeroes);

  const { data: heroes, allHeroes } = useSelector(getHeroes);
  const currentPage = useSelector(getCurrentPage);
  const heroesOnPage = heroes.length;
  const totalHeroesQuantity = allHeroes.length;
  const totalPagesQuantity = Math.ceil(totalHeroesQuantity / 5);

  useEffect(() => {
    doFetchHeroes(currentPage);
    doFetchAllHeroes();
  }, [doFetchHeroes, currentPage, doFetchAllHeroes]);

  const onPrevBtnClick = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      dispatch(setCurrentPage(prevPage));
    }
  };

  const onNextBtnClick = () => {
    if (currentPage >= 1 && heroesOnPage === 5) {
      const nextPage = currentPage + 1;
      dispatch(setCurrentPage(nextPage));
    }
  };

  const onFirstPageClick = () => {
    dispatch(setCurrentPage(1));
  };

  const onLastPageClick = () => {
    dispatch(setCurrentPage(totalPagesQuantity));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  let renderedContent;

  if (isLoadingHeroes) {
    renderedContent = <Skeleton times={5} className="h-96 w-64" />;
  } else if (loadingHeroesError) {
    renderedContent = <h3 className="text-grey-light">Error fetching data...</h3>;
  } else if (!!heroes && heroes.length !== 0) {
    renderedContent = (
      <ul className="px-10 flex flex-wrap gap-5">
        {heroes.map(hero => (
          <HeroCard hero={hero} key={hero._id} />
        ))}
      </ul>
    );
  } else if (allHeroes.length === 0 || heroes.length === 0) {
    renderedContent = <TextNotification />;
  }

  return (
    <>
      <div className="flex flex-col items-center">
        {renderedContent}
        <div className="mt-16 flex items-center gap-10">
          <BigRoundedButton onClick={onFirstPageClick}>
            <BsChevronBarLeft />
          </BigRoundedButton>
          <Button
            btnText="Prev page"
            type="button"
            option="redBtn"
            onClick={onPrevBtnClick}
            disabled={currentPage === 1}
          />

          <BigRoundedButton onClick={openModal} isAddBtn={true}>
            <BsPlusLg size="48" />
          </BigRoundedButton>
          <Button
            btnText="Next page"
            type="button"
            option="blueBtn"
            onClick={onNextBtnClick}
            disabled={heroesOnPage < 5 || currentPage === totalPagesQuantity || loadingHeroesError}
          />
          <BigRoundedButton onClick={onLastPageClick}>
            <BsChevronBarRight />
          </BigRoundedButton>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <HeroForm onCancelBtnClick={closeModal} />
      </Modal>
    </>
  );
};

export default HeroesList;
