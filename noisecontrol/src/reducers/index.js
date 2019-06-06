import { LOGIN, SUCCESS, FAILURE, FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILURE, REGISTER_SUCCESS, LOADING, ERROR } from '../actions'

const initialState = {
  isLoggingIn: false,
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
  registering: false,
  credentials: []
};

const groupReducer = (state = initialState, action) => {
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
        isLoggingIn: false
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
    case REGISTER_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        registering: false,
        credentials: [...state.credentials, action.payload]
      }

    case LOADING:
      return {
        ...state,
        registering: true,
      }

    case ERROR:
      return {
        ...state,
        error: action.payload
      }


    default:
      return state;

  }
}

export default groupReducer
