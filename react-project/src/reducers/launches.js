import { getLaunches } from '../api/launches';

export const START_LOAD_LAUNCHES = 'app/launch/START_LOAD_LAUNCHES';
export const LOAD_LAUNCHES_SUCCESS = 'app/launch/LOAD_LAUNCHES_SUCCESS';
export const LOAD_LAUNCHES_FAIL = 'app/launch/LOAD_LAUNCHES_FAIL';

const initState = {
  data: [],
  loading: false,
  isError: false,
  errors: ''
};

export const launchesReducer = (state = initState, action) => {
  switch (action.type) {
    case START_LOAD_LAUNCHES:
      return {
        ...state,
        loading: true,
        isError: false,
        errors: ''
      };
    case LOAD_LAUNCHES_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        isError: false,
        errors: ''
      };
    case LOAD_LAUNCHES_FAIL:
      return {
        ...state,
        data: [],
        loading: false,
        isError: true,
        errors: action.errors
      };
    default:
      return state;
  }
};

export const startLoadLaunches = () => {
  return {
    type: START_LOAD_LAUNCHES,
    loading: true,
    isError: false,
    errors: ''
  };
};

export const loadLaunchesSuccess = data => {
  return {
    type: LOAD_LAUNCHES_SUCCESS,
    data,
    loading: false,
    isError: false,
    errors: ''
  };
};

export const loadLaunchesFail = errors => {
  return {
    type: LOAD_LAUNCHES_FAIL,
    data: [],
    loading: false,
    isError: true,
    errors
  };
};

export const loadLaunchesAPI = item => {
  return dispatch => {
    dispatch(startLoadLaunches());
    getLaunches(item)
      .then(res => {
        return res.json();
      })
      .then(res => {
        const data = res;
        dispatch(loadLaunchesSuccess(data));
      })
      .catch(err => {
        loadLaunchesFail(err);
      });
  };
};
