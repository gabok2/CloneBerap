import axios from 'axios';

const api = axios.create({
  baseURL: 'http://84c1937f.ngrok.io/',
});

export default api;
