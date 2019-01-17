import React, { Fragment } from 'react';
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

const charactersListItem = props => (
  <Fragment>
    <h2>{props.character.name} </h2>
    <ImgWrap>
      <Img src={`${props.character.thumbnail.path}.jpg`} alt={props.character.name} />
    </ImgWrap>
    <CardBodyText>
      {props.character.description ? props.character.description : 'Marvel Character'}
    </CardBodyText>
    <ButtonDetails to={`/details-page/${props.character.id}`}>Detalhes</ButtonDetails>
  </Fragment>
);

export default charactersListItem;
