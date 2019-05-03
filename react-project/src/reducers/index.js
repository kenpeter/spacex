import { combineReducers } from 'redux';
import { launchesReducer } from './launches';
import { launchPadFullNames } from './launchPadFullNames';
import { launchYears } from './launchYears';

const reducers = combineReducers({
  launchesReducer,
  launchPadFullNames,
  launchYears
});

export default reducers;
