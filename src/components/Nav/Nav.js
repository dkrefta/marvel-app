import React from 'react';
import styled from 'styled-components';
import images from '../../img/images';

const ImgLogo = styled.img`
  display: flex;
  left: 50%;
  top: 50%;
  height: auto;
  max-width: 200px;
  width: auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000 !important;
  margin-bottom: 20px;
`;

const Nav = () => (
  <Container>
    <ImgLogo src={images.MarvelLogo} alt="marvel" />
  </Container>
);

export default Nav;
