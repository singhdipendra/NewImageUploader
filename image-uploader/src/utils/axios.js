import axios from 'axios';

const service = axios.create({
  baseURL: 'https://api-image-uploader.vercel.app/api',
  headers: {
    "Content-Type": 'multipart/form-data'
  }
});

export { service };
