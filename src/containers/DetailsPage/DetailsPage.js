/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Nav from '../../components/Nav/Nav';
import { SAVE_NAME } from '../../redux/characters/types';
import { Input } from '../../styles/theme';

const Img = styled.img`
  display: flex;
  left: 50%;
  top: 50%;
  height: 100%;
  width: auto;
`;

const Wrap = styled.div`
  font-family: 'Open Sans', 'Arial', 'sans-serif';
`;
const Button = styled.button`
  margin-left: 20px;
  height: 35px;
  width: 150px;
  padding: 5px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  letter-spacing: 0.2rem;
  background: #e50914;
  color: #f2f2f2;
  border: none;
  border-radius: 3px;
  outline: none;
`;
class DetailsPage extends Component {
  state = {
    hero: {},
    idCharacter: null,
    conditional: false,
    newName: null
  };

  componentDidMount() {
    const hero = this.props.charactersReducer.characters.results.filter(
      character => +character.id === +this.props.match.params.id
    )[0];
    this.setState({
      hero
    });
    localStorage.getItem('newName');
  }

  componentWillUnmount() {
    const newName = this.state;
    localStorage.setItem('newName', newName.hero.name);
  }

  changeCharacter = newName => {
    this.setState({
      newName
    });
  };

  editCharacter(hero) {
    const { dispatch } = this.props;
    const { conditional, newName } = this.state;

    this.setState({
      idCharacter: hero.id,
      conditional: !conditional
    });

    if (this.state.conditional) {
      const hero = this.props.charactersReducer.characters.results.filter(
        character => +character.id === +this.props.match.params.id
      )[0];
      this.setState({
        hero: {
          ...hero,
          name: newName
        }
      });
    }
    dispatch({
      type: SAVE_NAME.SUCCESS,
      name: this.state.newName
    });
  }

  render() {
    const { hero } = this.state;

    if (!Object.keys(hero).length) return 'loading...';

    return (
      <Wrap>
        <Nav />
        <h1>
          {this.state.idCharacter === hero.id && this.state.conditional ? (
            <Input defaultValue={hero.name} onChange={e => this.changeCharacter(e.target.value)} />
          ) : (
              hero.name
            )}
          <Button onClick={() => this.editCharacter(hero)}>
            {this.state.conditional ? 'Salvar' : 'Editar'}
          </Button>
          <hr />
        </h1>
        <Img src={`${hero.thumbnail.path}.jpg`} alt={hero.name} />
        <p>{hero.description}</p>
        <h4>Series({hero.series.available})</h4>
        <ul>
          {hero.series.items.map((series, index) => (
            <div key={index}>
              <li key={index}>{series.name}</li>
            </div>
          ))}
        </ul>
      </Wrap>
    );
  }
}

function mapStateToProps(state) {
  return {
    charactersReducer: state.charactersReducer
  };
}

export default connect(mapStateToProps)(DetailsPage);