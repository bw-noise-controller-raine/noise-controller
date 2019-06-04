import axios from 'axios'



export const axiosAutho = () => {
  const token = localstorage.getItem('token');
  return axios
    .create({
      headers: {
        Authorization: token
      },
      baseURL: 'https://noise-controller.herokuapp.com/api'
    })
}