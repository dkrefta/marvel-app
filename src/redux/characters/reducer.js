import { FETCH_CHARACTERS, SAVE_NAME } from './types';

const INITIAL_STATE = {
  characters: {
    isLoading: false,
    results: [],
    error: false,
    success: false
  }
};

const Characters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS.REQUEST:
      return {
        ...state,
        characters: {
          ...state.characters,
          isLoading: true
        }
      };
    case FETCH_CHARACTERS.SUCCESS:
      return {
        ...state,
        characters: {
          ...state.characters,
          ...action.characters,
          isLoading: false,
          success: true
        }
      };
    case FETCH_CHARACTERS.FAILURE:
      return {
        ...state,
        characters: {
          ...state.characters,
          error: true,
          isLoading: false
        }
      };
    case SAVE_NAME.SUCCESS:
      return {
        ...state,
        characters: {
          ...state.characters,
          results: [
            {
              ...state.characters.results[0],
              name: action.name
            }
          ]
        }
      };
    default:
      return state;
  }
};

export default Characters;
