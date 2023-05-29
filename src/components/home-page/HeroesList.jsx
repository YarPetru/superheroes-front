import React, { useEffect } from 'react';
import HeroCard from './HeroCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeroes, getHeroes } from 'store/heroes';

const HeroesList = () => {
  const dispatch = useDispatch();
  const { data: heroes, isLoading, error } = useSelector(getHeroes);

  useEffect(() => {
    dispatch(fetchHeroes());
  });

  // let renderedContent;

  // if (isLoading) {
  //   // renderedContent = <Skeleton times={10} />;
  // } else if (error) {
  //   // renderedContent = <ErrorMessage message={error.message!} />;
  // } else if (!!heroes && heroes.length !== 0) {
  //   renderedContent = (

  //   );
  // } else if (heroes.length === 0) {
  //   renderedContent = (
  //     <h6>Sorry, there are no heroes yet. Використай шанс додати першого супергероя</h6>
  //   );
  // }

  return (
    <ul className="px-10 flex flex-wrap gap-5">
      {heroes?.map(hero => (
        <HeroCard hero={hero} key={hero._id} />
      ))}
    </ul>
  );
};

export default HeroesList;
