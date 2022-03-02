import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spacexdata.com/v5/launches',
});

export default api;
