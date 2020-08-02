import React from 'react';
import styled from 'styled-components';

const FootnoteWrapper = styled.p`
    padding-top: 20px;
    font-size: 14px;

    a {
      color: var(--primary);
      font-weight: bold;
    }
`;

function Footnote({ children }) {
  return (
    <FootnoteWrapper>
      { children }
    </FootnoteWrapper>
  );
}

export default Footnote;