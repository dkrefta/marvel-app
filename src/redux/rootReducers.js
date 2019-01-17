/* Modules */
import { combineReducers } from 'redux';

/* Reducers */
import { reducer as formReducer } from 'redux-form';

import Characters from './characters/reducer';

// all the reducers are in one place
const rootReducers = combineReducers({
  form: formReducer,
  charactersReducer: Characters
});

export default rootReducers;
