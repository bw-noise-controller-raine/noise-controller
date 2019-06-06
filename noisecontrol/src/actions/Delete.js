import axios from 'axios'

export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const Delete = (user_id, project_id, token) => dispatch => {
  dispatch({ type: DELETE_START })
  return axios 
  .delete(`https://noise-controller.herokuapp.com/api/class/classrooms/:id/${user_id}/${project_id}`, {
  headers: { Authorization: token, 'Content-Type':'application/json'}
})

  .then(res => {
    localStorage.setItem('data', JSON.strigify(res.data))
    dispatch({ type: DELETE_SUCCESS, payload: res.data})
  })
  .catch(error => {
    dispatch({ type: DELETE_FAILURE, payload: err});
  });
}



