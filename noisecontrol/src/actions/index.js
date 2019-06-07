// import axios from 'axios'
import { axiosAutho } from '../axiosAutho';

export const LOGIN = 'LOGIN'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const login = creds => dispatch => {
  dispatch({ type: LOGIN });
  return axiosAutho()
    .post('https://noise-controller.herokuapp.com/api/auth/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: SUCCESS, payload: res.data })
    })
}

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';


export const getlists = () => dispatch => {
  dispatch({ type: FETCHING_START })
  return axiosAutho()
    .get('https://noise-controller.herokuapp.com/api/classrooms')
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


export const register = newUser => dispatch => {
  dispatch({ type: LOADING });
  return axiosAutho()
    .post('https://noise-controller.herokuapp.com/api/auth/register', newUser)
    .then(res => dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    }))
    .catch(error => dispatch({
      type: ERROR,
      payload: error
    }))
}

export const ADDING_START = 'ADD_START'; 
export const ADDING_SUCCESS ='ADDING_SUCCESS';
export const ADDING_FAILURE = 'ADDING_FAIlURE';

export const addclass = newClassRoom => dispatch => {
  dispatch({ type: ADDING_START});
  return axiosAutho()
  .post('https://noise-controller.herokuapp.com/api/auth/classrooms', newClassRoom)
  .then(res => {
    localStorage.setItem("class", res.data.id);
    dispatch({
    
    type: ADDING_SUCCESS,
    payload: res.data
  })})
  .catch(error => dispatch({
    type: ADDING_FAILURE,
    payload: error
  })) 
}
