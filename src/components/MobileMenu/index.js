import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Arrow = styled.div`
  margin-left: 20px;
  color: var(--white);
  padding-bottom: 5px;
  opacity: .7;

  i {
    cursor: pointer;
  }

  @media (min-width: 740px) {
    display: none;
  }
`;

const MenuWrapper = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};

  background-color: var(--grayDark);
  opacity: .7;
  color: var(--white);
  position: absolute;
  top: 45px;
  left: calc(4% + 28px);

  border-top: 2px solid var(--white);

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 10px;
    text-align: center;
    font-size: 13px;
    min-width: 150px;
  }

  li:hover {
    background-color: #ffffff30;
    font-weight: bold;
  }

  li .active {
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 740px) {
    display: none;
  }
`;

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Arrow open={open} onClick={() => setOpen(!open)}>
        <i className="fas fa-sort-down" />
      </Arrow>
      <MenuWrapper open={open}>
        <ul className="MobileMenu">
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/">Music Videos</Link></li>
          <li><Link to="/">BU MVs</Link></li>
          <li><Link to="/">Run BTS</Link></li>
        </ul>
      </MenuWrapper>
    </>
  );
}

export default MobileMenu;
