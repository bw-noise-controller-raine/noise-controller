import axios from 'axios'

export const LOGIN = 'LOGIN'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const login = creds => dispatch => {
  dispatch({ type: LOGIN });
  return axios
    .post('https://noise-controller.herokuapp.com/api/auth/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: SUCCESS, payload: res.data.payload })
    })
}

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';


export const getlists = () => dispatch => {
  dispatch({ type: FETCHING_START })
  axios
    .get('https://noise-controller.herokuapp.com/api/auth')
    .then(res => {
      dispatch({ type: FETCHING_SUCCESS, payload: res.data })
    })
    .catch(error => {
      console.log(error)
    })
}

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const ERROR = 'ERROR'
export const LOADING = 'LOADING'


export const register = () => dispatch => {
  dispatch({ type: LOADING });
  return axios
    .post('https://noise-controller.herokuapp.com/api/auth/register', newUser)
    .then(res => dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    }))
    .catch(error => dispatch({
      type: Error,
      payload: error
    }))
}
