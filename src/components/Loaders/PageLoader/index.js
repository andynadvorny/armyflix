import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function PageLoader() {
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

export default PageLoader;
