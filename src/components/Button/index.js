import styled from 'styled-components';

const Button = styled.a`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 8px 12px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
    opacity: .5;

    .lightBG {
      color: var(--black);
    }
`;

export default Button;
