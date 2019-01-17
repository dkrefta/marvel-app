import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CharacterListItem from '../CharacterListItem/CharacterListItem';

const Card = styled.div`
  max-width: 100%;
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 290px;
  margin-left: 20px;
  min-height: 0;
  background: #fff;
  padding: 0;
  border: none;
  margin-top: 20px;
  border-radius: 0.28571429rem;
`;
const CharacterList = props => (
  <Card>
    {props.charactersReducer.characters.results.map(character => (
      <CharacterListItem key={character.id} character={character} />
    ))}
  </Card>
);

function mapStateToProps(state) {
  return {
    charactersReducer: state.charactersReducer
  };
}

export default connect(mapStateToProps)(CharacterList);
