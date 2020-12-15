import axios from 'axios';
const KEY = 'AIzaSyDtZysVexipruncyOQwR02N3-A0nayOWDA';

// creates a customized axios instance
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
