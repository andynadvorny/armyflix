import styled from 'styled-components';

export const Title = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  margin-bottom: 12px;
  margin-top: 0%;
  display: inline-block;
  line-height: 1;
  color: #e5e5e5;
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 4px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  margin: 30px 0 30px 4%;
`;
