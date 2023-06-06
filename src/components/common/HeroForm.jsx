import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Button from './Button';
import { addHero, editHero } from 'store/heroes';
import { useThunk } from 'hooks/use-thunk';

import { fetchHeroes, getCurrentPage } from 'store/heroes';

const validationSchema = yup.object().shape({
  nickname: yup.string().required('Nickname is a required field'),
  real_name: yup.string().required('Real name is a required field'),
  origin_description: yup.string().required('Description confirmation is a required field'),
  catch_phrase: yup.string().required('Catch phrase name is a required field'),
  images: yup.string().url(),
});

const HeroForm = ({ hero, onCancelBtnClick }) => {
  const initialValues = {
    nickname: !!hero ? hero.nickname : '',
    real_name: !!hero ? hero.real_name : '',
    origin_description: !!hero ? hero.origin_description : '',
    superpowers: !!hero ? hero.superpowers : '',
    catch_phrase: !!hero ? hero.catch_phrase : '',
    images: !!hero ? hero.images : '',
  };

  const [doAddHero, isAddLoading, addError] = useThunk(addHero);
  const [doEditHero, isEditLoading, editError] = useThunk(editHero);

  const [doFetchHeroes] = useThunk(fetchHeroes);
  const currentPage = useSelector(getCurrentPage);

  const onAddHero = (values, actions) => {
    doAddHero(values);
    if (addError) {
      return;
    } else {
      doFetchHeroes(currentPage);
      actions.resetForm();
      onCancelBtnClick();
    }
  };

  const onChangeHero = (values, actions) => {
    doEditHero({ hero, updatedHero: values });
    if (editError) {
      return;
    } else {
      doFetchHeroes(currentPage);
      actions.resetForm();
      onCancelBtnClick();
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={!!hero ? onChangeHero : onAddHero}
      >
        {({ isValid, touched }) => {
          return (
            <Form
              name="LoginForm"
              className="relative flex flex-col justify-center text-black w-[400px]"
            >
              <div className="relative flex flex-col mb-4">
                <label htmlFor="nickname" className="mb-2">
                  Nickname <span className="text-accent">*</span>
                </label>
                <Field
                  className="px-3 py-2 font-medium text-black outline-none rounded"
                  id="nickname"
                  name="nickname"
                  type="text"
                  placeholder="Enter the nickname"
                  autoComplete="off"
                />
                <ErrorMessage name="nickname" component="div" className="text-xs text-accent" />
              </div>

              <div className="relative flex flex-col mb-4">
                <label htmlFor="real_name" className="mb-2">
                  Real name <span className="text-accent">*</span>
                </label>
                <Field
                  className="relative px-3 py-2 font-medium text-black outline-none rounded"
                  id="real_name"
                  name="real_name"
                  type="text"
                  placeholder="Enter the real name"
                  autoComplete="off"
                />
                <ErrorMessage name="real_name" component="div" className="text-xs text-accent" />
              </div>

              <div className="relative flex flex-col mb-4">
                <label htmlFor="origin_description" className="mb-2">
                  Description <span className="text-accent">*</span>
                </label>
                <Field
                  className="relative px-3 py-2 font-medium text-black outline-none rounded"
                  id="origin_description"
                  name="origin_description"
                  type="text"
                  placeholder="Enter a description"
                  autoComplete="off"
                />
                <ErrorMessage
                  name="origin_description"
                  component="div"
                  className="text-xs text-accent"
                />
              </div>

              <div className="relative flex flex-col mb-4">
                <label htmlFor="superpowers" className="mb-2">
                  Superpowers <span className="text-accent">*</span>
                </label>
                <Field
                  className="relative px-3 py-2 font-medium text-black outline-none rounded"
                  id="superpowers"
                  name="superpowers"
                  type="text"
                  placeholder="Enter superpowers"
                  autoComplete="off"
                />
                <ErrorMessage name="superpowers" component="div" className="text-xs text-accent" />
              </div>

              <div className="relative flex flex-col mb-4">
                <label htmlFor="catch_phrase" className="mb-2">
                  Catch phrase <span className="text-accent">*</span>
                </label>
                <Field
                  className="relative px-3 py-2 font-medium text-black outline-none rounded"
                  id="catch_phrase"
                  name="catch_phrase"
                  type="text"
                  placeholder="Enter catch phrase"
                  autoComplete="off"
                />
                <ErrorMessage name="catch_phrase" component="div" className="text-xs text-accent" />
              </div>

              <div className="relative flex flex-col mb-4">
                <label htmlFor="images" className="mb-2">
                  Image <span className="text-accent">*</span>
                </label>
                <Field
                  className="relative px-3 py-2 font-medium text-black outline-none rounded"
                  id="images"
                  name="images"
                  type="text"
                  placeholder="Url starts with http..."
                  autoComplete="off"
                />
                <ErrorMessage name="images" component="div" className="text-xs text-accent" />
              </div>

              <div className="mt-10 flex items-center gap-10">
                <Button
                  btnText={
                    isAddLoading || isEditLoading ? 'pending...' : !!hero ? 'Edit' : 'Add new'
                  }
                  type="submit"
                  option="redBtn"
                  disabled={
                    !!hero
                      ? !isValid
                      : (!touched.nickname &&
                          !touched.real_name &&
                          !touched.origin_description &&
                          !touched.catch_phrase &&
                          !touched.images) ||
                        !isValid
                  }
                />
                <Button
                  btnText="Cancel"
                  type="button"
                  option="blueBtn"
                  onClick={onCancelBtnClick}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
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

HeroForm.propTypes = {
  hero: PropTypes.shape(heroObj),
  // onAddBtnClick: PropTypes.func.isRequired,
  onCancelBtnClick: PropTypes.func.isRequired,
};

export default HeroForm;
