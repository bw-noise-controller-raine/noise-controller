import { LOGIN, SUCCESS, FAILURE, FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILURE } from '../actions'

const initialState = {
  isLogging: false,
  classes: [],
  error: null,
  fetchingData: false,
  classesFetched: false,
  savingClasses: false,
  classesSaved: false,
  updatingClasses: false,
  classesUpdated: false,
  deletingClasses: false,
  classesDeleted: false,
};

export const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggingIn: true,
        error: ''
      };
    case SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      }
    case FETCHING_START:
      return { ...state, fetchingStart: true, classes: action.payload };

    case FETCHING_SUCCESS:
      console.log(action.payload);
      return { ...state, fetchingClasses: false, classes: action.payload };

    case FETCHING_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        fetchingClasses: false,
        error: true
      }
    default:
      return state;

  }
}
