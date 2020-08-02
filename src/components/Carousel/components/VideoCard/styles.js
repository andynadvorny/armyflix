import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 166px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: inherit;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: width, height .5s;

  @media (max-width: 1600px) {
    flex: 0 0 225px;
    width: 225px;
    height: 126px;
  }

  @media (max-width: 980px) {
    flex: 0 0 215px;
    width: 215px;
    height: 120px;
  }

  @media (max-width: 980px) {
    flex: 0 0 188px;
    width: 188px;
    height: 105px;
  }

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
    border: 1px solid var(--primary);
  }
`;
