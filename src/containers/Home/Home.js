import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CryptoJS from 'crypto-js';
import styled from 'styled-components';
import moment from 'moment';
import { RingLoader } from 'react-spinners';
import Nav from '../../components/Nav/Nav';
import SearchBar from '../../components/SearchBar/SearchBar';
import CharacterList from '../../components/CharacterList/CharacterList';
import { FETCH_CHARACTERS } from '../../redux/characters/types';
import { marvelApi as config } from '../../config/config';

const Background = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  font-family: 'Open Sans', 'Arial', 'sans-serif';
`;

class Home extends Component {
  fetchHeroes = async e => {
    const { dispatch } = this.props;
    const timeStamp = moment().unix();
    const hash = CryptoJS.MD5(timeStamp + config.privateKey + config.publicKey).toString(
      CryptoJS.enc.Hex
    );
    const name = e && e.target && e.target.value;
    if (e && e.target && e.target.value && e.target.value.length >= 3) {
      try {
        dispatch({
          type: FETCH_CHARACTERS.REQUEST,
          payload: {
            publicKey: config.publicKey,
            timeStamp,
            hash,
            limit: '12',
            name
          }
        });
      } catch (er) {
        console.log(er);
      }
    }
  };

  render() {
    return (
      <Fragment>
        <Background>
          <Nav />
          <SearchBar onChange={e => this.fetchHeroes(e)} />
          <CharacterList />
          <div style={{ justifyContent: 'center' }}>
            {this.props.charactersReducer.characters.isLoading ? (
              <RingLoader sizeUnit="px" size={50} color="red" />
            ) : null}
          </div>
        </Background>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    charactersReducer: state.charactersReducer
  };
}

export default connect(mapStateToProps)(Home);
