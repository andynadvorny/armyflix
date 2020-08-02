import React from 'react';
import styled from 'styled-components';

const TitleBanner = styled.div`
    padding-top: 90px;

    > h1 {
      font-weight: 400;
    }
`;

function PageTitle({ children }) {
  return (
    <TitleBanner>
      { children }
    </TitleBanner>
  );
}

export default PageTitle;
