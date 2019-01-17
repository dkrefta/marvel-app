import React from 'react';
import styled from 'styled-components';
import ButtonDetails from '../ButtonDetails/ButtonDetails';

const Img = styled.img`
  position: absolute;
  max-width: 100%;
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
`;

const charactersListItem = props => (
  <CardHolder>
    <div>
      <h2>{props.character.name} </h2>
      <ImgWrap>
        <Img src={`${props.character.thumbnail.path}.jpg`} alt={props.character.name} />
      </ImgWrap>
      <CardBodyText>
        {props.character.description
          ? props.character.description
          : 'Marvel character without description'}
      </CardBodyText>
    </div>
    <ButtonDetails to={`/details-page/${props.character.id}`}>Detalhes</ButtonDetails>
  </CardHolder>
);

export default charactersListItem;
