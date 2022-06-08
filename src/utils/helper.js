import axios from 'axios';
import { BASE_API_URL } from './constants';

export const serviceAuthManager = (url, method = 'get', data = {}) => {
  return axios({
    url: BASE_API_URL + url,
    method,
    data,
  });
};
