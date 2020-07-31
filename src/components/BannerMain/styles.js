import styled from 'styled-components';

export const ContentAreaContainer = styled.section`
  margin: 0 4%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 50%;
  display: inline-block;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Category = styled.h1`
  font-size: 60px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block; 
  padding: 25px;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    display: none;
    font-size: 18px;
    padding: 10px;
  }
`;

ContentAreaContainer.Description = styled.p`
  max-width: 300px;
  margin-top: 0;
  margin-bottom: 24px;

  @media (max-width: 800px) {
    display: none;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const BannerMainContainer = styled.section`
  height: 80vh;
  position: relative;
  color: #fff;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
  background-size: cover;
  background-position: center;
  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;

export const PlayButton = styled.a`
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: var(--white);
  padding: 8px 24px 8px 20px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  color: var(--black);

  > i {
    margin-right: 5px;
  }

  &:hover {
    opacity: .7;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const WatchMobileButton = styled.a`
  border: 1px solid transparent;
  border-radius: 4px;
  color: var(--black);
  background-color: var(--white);
  padding: 8px 24px 8px 20px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  transition: opacity .3s;
  display: none;
  margin: 0 auto;
  text-decoration: none;
  text-align: center;
  max-width: 98px;

  &:hover {
    opacity: .7;
  }

  @media (max-width: 800px) {
    display: block;
  }
`;