import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const MainCategory = styled.main`
`;

function PageCategory({ children }) {
  return (
    <>
      <Header />
      <MainCategory>
        {children}
      </MainCategory>
      <Footer />
    </>
  );
}

export default PageCategory;
