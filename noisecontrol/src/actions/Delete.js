import axios from 'axios'
import {axiosAutho} from '../axiosAutho';

export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const Delete = (id, token) => dispatch => {
  dispatch({ type: DELETE_START })
  return axiosAutho()
  .delete(`https://noise-controller.herokuapp.com/api/classrooms/${id}`)

  .then(res => {
    dispatch({ type: DELETE_SUCCESS, payload: id})
  })
  .catch(error => {
    dispatch({ type: DELETE_FAILURE, payload: error.res});
  });
}



