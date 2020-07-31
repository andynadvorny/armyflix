import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--darkGrey);
  padding: 32px 16px;
  font-size: 14px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
