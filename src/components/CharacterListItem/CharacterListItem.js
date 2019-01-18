import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const Img = styled.img`
  max-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50%;
  margin-left: -50%;
`;

const ImgWrap = styled.div`
  position: relative;
  overflow: hidden;
  height: 290px;
`;

const CardBodyText = styled.p`
  margin: 0;
  font-size: 16px;
  color: #333;
  padding: 20px;
`;

const CardHolder = styled.div`
  margin: 0;
  font-size: 16px;
  color: #333;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  border-radius: 0.28571429rem;
  margin-top: 10px;
  flex-basis: calc(33.33% - 60px);
  @media screen and (max-width: 500px) {
    margin: 0;
    font-size: 16px;
    color: #333;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    border-radius: 0.28571429rem;
    margin-top: 10px;
    flex-basis: 100%;
  }
`;

const charactersListItem = props => (
  <CardHolder>
    <div>
      <h1>{props.character.name} </h1>
      <ImgWrap>
        <Img src={`${props.character.thumbnail.path}.jpg`} alt={props.character.name} />
      </ImgWrap>
      <CardBodyText>
        {props.character.description
          ? props.character.description
          : 'Marvel character without description'}
      </CardBodyText>
    </div>
    <Button to={`/details-page/${props.character.id}`}>Detalhes</Button>
  </CardHolder>
);

export default charactersListItem;
