import axios from 'axios';

// creates a customized axios instance
export default axios.create({
  baseURL: 'https://data.police.uk/api'
});
