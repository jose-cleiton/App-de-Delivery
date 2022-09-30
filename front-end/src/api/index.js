import axios from 'axios';

class ApiClient {
  constructor(store) {
    this.store = store;
    this.api = axios.create({
      baseURL: 'http://localhost:3001',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.api.interceptors.request.use((config) => {
      const { token } = this.store.getState().user;
      if (token !== null) {
        config.headers.Authorization = token;
      }

      return config;
    });
  }

  post(url, { data }) {
    return this.api.post(url, data);
  }

  get(url) {
    return this.api.get(url);
  }

  put(url, { data }) {
    return this.api.put(url, data);
  }

  delete(url) {
    return this.api.delete(url);
  }

  patch(url) {
    return this.api.patch(url);
  }
}

export default ApiClient;
