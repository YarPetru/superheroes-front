import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import HeroFormContent from './HeroFormContent';
import { addHero, editHero, getHeroes } from 'store/heroes';
import { useTrimFields, useThunk } from 'hooks';
import { fetchHeroes, getCurrentPage } from 'store/heroes';
import { setCurrentPage } from 'store/heroes/heroes-slice';

const HeroForm = ({ hero, onCancelBtnClick }) => {
  const dispatch = useDispatch();

  const trimFields = useTrimFields();
  const [doAddHero, isAddLoading, addError] = useThunk(addHero);
  const [doEditHero, isEditLoading, editError] = useThunk(editHero);

  const [doFetchHeroes] = useThunk(fetchHeroes);
  const currentPage = useSelector(getCurrentPage);
  const { data: heroes } = useSelector(getHeroes);

  const onAddHero = async (values, actions) => {
    const newImage = values.images.trim();
    const trimmedValues = trimFields(values);
    let newHeroData;
    if (newImage !== '') {
      newHeroData = {
        ...trimmedValues,
        images: [newImage],
      };
    } else if (newImage === '') {
      newHeroData = {
        ...trimmedValues,
        images: [],
      };
    }
    await doAddHero(newHeroData);
    if (addError) {
      return;
    } else {
      heroes.length === 5 && dispatch(setCurrentPage(currentPage + 1));
      doFetchHeroes(currentPage);
      actions.resetForm();
      onCancelBtnClick();
    }
  };

  const onChangeHero = (values, actions) => {
    const newImage = values.images;
    const trimmedValues = trimFields(values);
    let updatedHeroData;
    if (newImage !== '') {
      updatedHeroData = {
        ...trimmedValues,
        images: [...hero.images, newImage],
      };
    } else if (newImage === '') {
      updatedHeroData = {
        ...trimmedValues,
        images: [...hero.images],
      };
    }
    doEditHero({ hero, updatedHero: updatedHeroData });
    if (editError) {
      return;
    } else {
      doFetchHeroes(currentPage);
      actions.resetForm();
      onCancelBtnClick();
    }
  };

  return (
    <HeroFormContent
      hero={hero}
      onAddHero={onAddHero}
      onChangeHero={onChangeHero}
      isAddLoading={isAddLoading}
      isEditLoading={isEditLoading}
      onCancelBtnClick={onCancelBtnClick}
    />
  );
};

const heroObj = {
  id: PropTypes.string,
  nickname: PropTypes.string,
  real_name: PropTypes.string,
  origin_description: PropTypes.string,
  superpowers: PropTypes.string,
  catch_phrase: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
};

HeroForm.propTypes = {
  hero: PropTypes.shape(heroObj),
  onCancelBtnClick: PropTypes.func.isRequired,
};

export default HeroForm;
