import axios from 'axios';

export default function makeRequest(url, options) {
  return axios(url, options)
    .then(res => res.data)
    .catch(err =>
      Promise.reject(err?.response?.data?.message ?? 'Unknown Error')
    );
}
