import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CharacterListItem from '../CharacterListItem/CharacterListItem';

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
