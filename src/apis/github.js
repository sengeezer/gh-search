import axios from 'axios';

// const KEY = process.env.REACT_APP_GITHUB_API_KEY;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {}
});
