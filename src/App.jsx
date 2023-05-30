import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BeatLoader from 'react-spinners/BeatLoader';
import { Layout } from 'components/layout';

const HomePage = lazy(() => import('pages/HomePage'));
const DetailsPage = lazy(() => import('pages/DetailsPage'));

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <BeatLoader
            cssOverride={{ textAlign: 'center', marginTop: '64px' }}
            color="#3a1d18"
            size="16px"
            margin="8px"
          />
        }
      >
        <Routes>
          <Route path="/superheroes" element={<Layout />}>
            <Route path="/superheroes" element={<HomePage />} />
            <Route path="/superheroes/:superheroId" element={<DetailsPage />} />
          </Route>
          <Route path="/*" element={<Navigate to="/superheroes" />} />
        </Routes>
      </Suspense>
      <ToastContainer theme="light" position="top-center" autoClose={5000} />
    </>
  );
};

export default App;
