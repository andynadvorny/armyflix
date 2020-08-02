import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--white);
    color: var(--black);

    padding: 0 4% 50px 4%;
    min-height: calc(100vh - 147px);

    overflow-y: auto;

    @media (max-width: 800px) {
        min-height: calc(100vh - 197px);
    }
`;

function PageDefault({ children }) {
  return (
    <>
      <Header pageColor="light" />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
