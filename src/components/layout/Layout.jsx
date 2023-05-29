import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Container from './Container';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="py-16">
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
