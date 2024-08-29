import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080', // You can replace this with your actual base URL
  timeout: 10000, // Set a timeout for requests
  headers: {
    'Content-Type': 'application/json',

  },
});

export default axiosInstance;
