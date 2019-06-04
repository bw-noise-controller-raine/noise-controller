import axios from 'axios'

export const LOGIN = 'LOGIN'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const login = creds => dispatch => {
  dispatch({ type: LOGIN });
  return axios
    .post('https://noise-controller.herokuapp.com/api', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: SUCCESS, payload: res.data.payload })
    })
}
