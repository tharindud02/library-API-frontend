// services/api.js

import axios from "axios";

const instance = axios.create({
  baseURL: "YOUR_NODEJS_BACKEND_API_URL", // Replace with your actual backend API URL
  timeout: 5000, // Set the request timeout (optional)
});

export default instance;
``;
