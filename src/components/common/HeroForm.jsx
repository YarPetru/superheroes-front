import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';
import BeatLoader from 'react-spinners/BeatLoader';
import classNames from 'classnames';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';

import Container from 'components/layout/Container';
import Button from './Button';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .matches(/^[a-zA-Z0-9]/, 'Email must start with letter or number')
    .matches(
      /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{2,})+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'The Email field can only contain Latin letters, numbers and signs, and at least 2 charachters before "@"'
    )
    .required('Email is a required field'),
  password: yup
    .string()
    .matches(/^[a-zA-Z0-9]/, 'Password must start with letter or number')
    .matches(/^([a-zA-Z0-9@.!#$%&’*+/=?^_`{|}~-])*$/, 'Password must not contain spaces')
    .min(6, 'Password is too short - should be 6 chars minimum')
    .max(30, 'Password must contain no more than 30 characters')
    .required('Password is a required field'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Password confirmation is a required field'),
});

const initialValues = {
  email: '',
  password: '',
  repeatPassword: '',
};

const HeroForm = () => {
  const [isPending, setIsPending] = useState();
  const handleSubmit = (values, actions) => {
    setIsPending(true);
  };

  return (
    <>
      <div className="gradient gradient-container"></div>
      <Container className="flex items-center justify-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, touched }) => {
            return (
              <Form
                name="LoginForm"
                className="relative flex flex-col justify-center text-white w-96"
              >
                <div className="relative flex flex-col mb-5">
                  <label htmlFor="nickname" className="mb-2">
                    Nickname <span className="text-accent">*</span>
                  </label>
                  <Field
                    className="px-3 py-2 font-medium text-black outline-none rounded"
                    id="nickname"
                    name="nickname"
                    type="text"
                    placeholder="nickname"
                    autoComplete="off"
                  />
                  <ErrorMessage name="nickname" component="div" className="text-sm text-accent" />
                </div>

                <div className="relative flex flex-col mb-5">
                  <label htmlFor="real_name" className="mb-2">
                    Real name <span className="text-accent">*</span>
                  </label>
                  <Field
                    className="relative px-3 py-2 font-medium text-black outline-none rounded"
                    id="real_name"
                    name="real_name"
                    type="text"
                    placeholder="real_name"
                    autoComplete="off"
                  />

                  <ErrorMessage name="real_name" component="div" className="text-sm text-accent" />
                </div>

                <div className="relative flex flex-col mb-5">
                  <label htmlFor="origin_description" className="mb-2">
                    Description <span className="text-accent">*</span>
                  </label>
                  <Field
                    className="relative px-3 py-2 font-medium text-black outline-none rounded"
                    id="origin_description"
                    name="origin_description"
                    type="text"
                    placeholder="origin_description"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="origin_description"
                    component="div"
                    className="text-sm text-accent"
                  />
                </div>

                <div className="relative flex flex-col mb-5">
                  <label htmlFor="catch_phrase" className="mb-2">
                    Catch phrase <span className="text-accent">*</span>
                  </label>
                  <Field
                    className="relative px-3 py-2 font-medium text-black outline-none rounded"
                    id="catch_phrase"
                    name="catch_phrase"
                    type="text"
                    placeholder="catch_phrase"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="catch_phrase"
                    component="div"
                    className="text-sm text-accent"
                  />
                </div>

                <div className="relative flex flex-col mb-5">
                  <label htmlFor="images" className="mb-2">
                    Image <span className="text-accent">*</span>
                  </label>
                  <Field
                    className="relative px-3 py-2 font-medium text-black outline-none rounded"
                    id="images"
                    name="images"
                    type="text"
                    placeholder="images"
                    autoComplete="off"
                  />
                  <ErrorMessage name="images" component="div" className="text-sm text-accent" />
                </div>

                <div className="mt-16 flex items-center gap-10">
                  <Button
                    btnText="Add new"
                    option="redBtn"
                    // onClick={onPrevBtnClick}
                  />
                  <Button
                    btnText="Cancel"
                    option="blueBtn"
                    // onClick={onNextBtnClick}
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </>
  );
};

export default HeroForm;
