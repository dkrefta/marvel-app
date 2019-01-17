import { call, put, takeEvery } from 'redux-saga/effects';
import CharacterService from '../../services/characters';

import { FETCH_CHARACTERS } from './types';

function* fetchCharacters(action) {
  try {
    const response = yield call(CharacterService.getCharacters, action.payload);

    yield put({ type: FETCH_CHARACTERS.SUCCESS, characters: response.data.data });
  } catch (e) {
    yield put({ type: FETCH_CHARACTERS.FAILURE, message: e.message });
  }
}

// here we can pass an array of sagas to export to the rootSagas
export const charactersSagas = [takeEvery(FETCH_CHARACTERS.REQUEST, fetchCharacters)];
