/* eslint-disable no-console */
import { launchPadFullNames } from '../api/launchPadFullNames';

export const GET_LAUNCH_PAD_FULL_NAMES =
  'app/launchPad/GET_LAUNCH_PAD_FULL_NAMES';

const initState = {
  data: [],
  loading: false,
  isError: false,
  errors: ''
};

export const launchPadFullNamesReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LAUNCH_PAD_FULL_NAMES:
      return {
        ...state,
        data: action.data,
        loading: false,
        isError: false,
        errors: ''
      };
    default:
      return state;
  }
};

export const getLaunchPadFullNames = data => {
  return {
    type: GET_LAUNCH_PAD_FULL_NAMES,
    data,
    loading: false,
    isError: false,
    errors: ''
  };
};

export const getLaunchPadFullNamesAPI = () => {
  return dispatch => {
    launchPadFullNames()
      .then(res => {
        return res.json();
      })
      .then(res => {
        const data = res;
        dispatch(getLaunchPadFullNames(data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
