import axios from 'axios';

// creates a customized axios instance
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});
