/* eslint-disable no-console */
import { launchYears } from '../api/launchYears';

export const GET_LAUNCH_YEARS =
  'app/launch/GET_LAUNCH_YEARS';

const initState = {
  data: [],
  loading: false,
  isError: false,
  errors: ''
};

export const launchYearsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LAUNCH_YEARS:
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

export const getLaunchYears = data => {
  return {
    type: GET_LAUNCH_YEARS,
    data,
    loading: false,
    isError: false,
    errors: ''
  };
};

export const getLaunchYearsAPI = () => {
  return dispatch => {
    launchYears()
      .then(res => {
        return res.json();
      })
      .then(res => {
        const data = res;
        dispatch(getLaunchYears(data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
