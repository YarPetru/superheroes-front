import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeroes, getCurrentPage, getHeroes } from 'store/heroes';
import { useThunk } from 'hooks';
import { Button, TextNotification, Skeleton, Modal, HeroForm } from 'components/common';
import AddButton from './AddButton';
import HeroCard from './HeroCard';
import { setCurrentPage } from 'store/heroes/heroesSlice';

const HeroesList = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doFetchHeroes, isLoadingHeroes, loadingHeroesError] = useThunk(fetchHeroes);

  const { data: heroes } = useSelector(getHeroes);
  const currentPage = useSelector(getCurrentPage);
  const heroesOnPage = heroes.length;

  useEffect(() => {
    doFetchHeroes(currentPage);
  }, [doFetchHeroes, currentPage]);

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

  let renderedContent;

  if (isLoadingHeroes) {
    renderedContent = <Skeleton times={5} className="h-96 w-64" />;
  } else if (loadingHeroesError) {
    renderedContent = <h3>Error fetching data...</h3>;
  } else if (!!heroes && heroes.length !== 0) {
    renderedContent = (
      <ul className="px-10 flex flex-wrap gap-5">
        {heroes.map(hero => (
          <HeroCard hero={hero} key={hero._id} />
        ))}
      </ul>
    );
  } else if (heroes.length === 0) {
    renderedContent = <TextNotification />;
  }

  return (
    <>
      <div className="flex flex-col items-center">
        {renderedContent}
        <div className="mt-16 flex items-center gap-10">
          <Button
            btnText="Prev page"
            type="button"
            option="redBtn"
            onClick={onPrevBtnClick}
            disabled={currentPage === 1}
          />
          <AddButton onClick={() => setIsModalOpen(true)} />
          <Button
            btnText="Next page"
            type="button"
            option="blueBtn"
            onClick={onNextBtnClick}
            disabled={heroesOnPage < 5}
          />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <HeroForm onCancelBtnClick={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default HeroesList;
