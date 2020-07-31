import React from 'react';
import styled from 'styled-components';

const TitleBanner = styled.section`
    height: 200px;
    padding-top: 90px;
`;

function PageTitle({ children }) {
    return (
        <TitleBanner>
            { children }
        </TitleBanner>
    );
}

export default PageTitle;