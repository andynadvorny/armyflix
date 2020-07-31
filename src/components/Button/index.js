import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
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
    }

    background: ${(props) => (props.solid ? 'var(--primary)' : 'transparent')};
    padding: ${(props) => (props.big ? '12px 16px' : '8px 12px;')};
    min-width: ${(props) => (props.big ? '98px' : '')};
`;

export default Button;
