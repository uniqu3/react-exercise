import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID uSZlbV1bdi-XAXmWrlQiN0szTdWhyiYcKDnU4RynXGg',
  },
});
