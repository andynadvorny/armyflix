import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  height: calc(100vh - 197px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SiteLoader() {
  return (
    <LoaderWrapper>
      <Loader
        type="Hearts"
        color="var(--primary)"
        height={80}
        width={80}
        timeout={8000}
      />
    </LoaderWrapper>
  );
}

export default SiteLoader;
