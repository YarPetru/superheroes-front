import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import HeroFormContent from './HeroFormContent';
import { addHero, editHero, getHeroes } from 'store/heroes';
import { useTrimFields, useThunk } from 'hooks';
import { fetchHeroes, getCurrentPage } from 'store/heroes';
import { setCurrentPage } from 'store/heroes/heroesSlice';

const HeroForm = ({ hero, onCancelBtnClick }) => {
  const dispatch = useDispatch();

  const trimFields = useTrimFields();
  const [doAddHero, isAddLoading, addError] = useThunk(addHero);
  const [doEditHero, isEditLoading, editError] = useThunk(editHero);

  const [doFetchHeroes] = useThunk(fetchHeroes);
  const currentPage = useSelector(getCurrentPage);
  const { data: heroes } = useSelector(getHeroes);

  const onAddHero = async (values, actions) => {
    const trimmedValues = trimFields(values);
    await doAddHero(trimmedValues);
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
    const trimmedValues = trimFields(values);
    doEditHero({ hero, updatedHero: trimmedValues });
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
  images: PropTypes.string,
};

HeroForm.propTypes = {
  hero: PropTypes.shape(heroObj),
  onCancelBtnClick: PropTypes.func.isRequired,
};

export default HeroForm;
