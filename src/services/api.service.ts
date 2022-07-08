import axios from 'axios';

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};

let axiosClient = axios.create(defaultOptions);

axiosClient.interceptors.request.use(async function (config) {
  return config;
});

export default axiosClient;
