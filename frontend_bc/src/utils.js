// src/utils.js
import axios from 'axios';

export const BASE_URL = 'https://backend-notes-vey-103949415038.us-central1.run.app';

export const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
