import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getHeroes } from 'store/heroes';

import { DetailedCard } from 'components/details-page';

const DetailsPage = () => {
  const { superheroId } = useParams();
  const { data: heroes } = useSelector(getHeroes);
  const hero = heroes.find(hero => hero._id === superheroId);
  return <>{hero && <DetailedCard hero={hero} />}</>;
};

export default DetailsPage;
