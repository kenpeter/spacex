import { combineReducers } from 'redux';
import { launchesReducer } from './launches';
import { launchPadFullNamesReducer } from './launchPadFullNames';
import { launchYearsReducer } from './launchYears';

const reducers = combineReducers({
  launchesReducer,
  launchPadFullNamesReducer,
  launchYearsReducer
});

export default reducers;
