

import axios from 'axios'



export const axiosAutho = () => {
  const token = localStorage.getItem('token');
  return axios
    .create({
      headers: {
        authorization: `${token}`,
        'Content-Type': 'application/json',
      },
      baseURL: 'https://noise-controller.herokuapp.com/api'
    })
}