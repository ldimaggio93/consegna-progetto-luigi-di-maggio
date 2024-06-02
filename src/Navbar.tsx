import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const NavbarContainer = styled.nav<{ clicked: boolean }>`
  background-color: ${(props) => (props.clicked ? '#A9A9A9' : '#87CEEB')};
  padding: 10px;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.clicked ? '#808080' : '#00BFFF')};
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedText = styled.div`
  animation: ${fadeIn} 1s ease;
  margin-left: 10px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <NavbarContainer onClick={handleClick} clicked={clicked}>
      <Logo>
        <FontAwesomeIcon icon={faUser} size="2x" />
        <AnimatedText>
          {clicked ? "Il progetto social di Luigi Di Maggio" : "Luigi Di Maggio"}
        </AnimatedText>
      </Logo>
    </NavbarContainer>
  );
};

export default Navbar;
