import axios from 'axios';

export const UPDATE_START = 'UPDATE_START';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';

export const update = (id, token) => dispatch => {
  dispatch({ type: UPDATE_START })
  return axios
    .delete(`https://noise-controller.herokuapp.com/api/classrooms/${id}`, {
      headers: { Authorization: token, 'Content-Type': 'application/json' }
    })
    .then(res => {
      dispatch({ type: UPDATE_SUCCESS, payload: id })
    })
    .catch(error => {
      dispatch({ type: UPDATE_FAILURE, payload: error })
    });
}