import React from 'react';
import styled from 'styled-components';

const Description = styled.p`
    padding: 10px 0 20px 0;
`;

function PageDescription({ children }) {
  return (
    <Description>
      { children }
    </Description>
  );
}

export default PageDescription;
