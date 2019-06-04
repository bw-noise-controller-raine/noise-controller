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
  dispatch({ type: FETCHING_CLASSES })
  axios
    .get('https://noise-controller.herokuapp.com/api/auth')
    .then(res => {
      dispatch({ type: FETCHING_SUCCESS, payload: res.data })
    })
    .catch(error => {
      console.log(error)
    })
}