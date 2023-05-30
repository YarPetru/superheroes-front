import React, { useEffect, useState } from 'react';
import HeroCard from './HeroCard';
import { useSelector } from 'react-redux';
import { fetchHeroes, getHeroes } from 'store/heroes';
// import AddButton from './AddButton';
import { Button, TextNotification } from 'components/common';
import { useThunk } from 'hooks/use-thunk';
import { Skeleton } from 'components/common';
import AddButton from './AddButton';

const HeroesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [doFetchHeroes, isLoadingHeroes, loadingHeroesError] = useThunk(fetchHeroes);

  const { data: heroes } = useSelector(getHeroes);
  const heroesOnPage = heroes.length;
  console.log(heroesOnPage);

  useEffect(() => {
    doFetchHeroes(currentPage);
  }, [doFetchHeroes, currentPage]);

  const onPrevBtnClick = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const onNextBtnClick = () => {
    if (currentPage >= 1 && heroesOnPage === 5) {
      setCurrentPage(prev => prev + 1);
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
    <div className="flex flex-col items-center">
      {renderedContent}
      <div className="mt-16 flex items-center gap-10">
        <Button
          btnText="Prev page"
          option="redBtn"
          onClick={onPrevBtnClick}
          disabled={currentPage === 1}
        />
        <AddButton onClick={() => console.log('onClick')} />
        <Button
          btnText="Next page"
          option="blueBtn"
          onClick={onNextBtnClick}
          disabled={heroesOnPage < 5}
        />
      </div>
    </div>
  );
};

export default HeroesList;
