import axios from 'axios';
import { apiBaseUrl, key, token } from '../../config/keys';

const axiosDefaults = {
  baseURL: apiBaseUrl
};


//Here we should encapsulate networking logic (eg. swhitch use of WS/passport or API/axios, add configuration or any common behvaior on request/resposne)
class NetworkMng {
  constructor(options) {
    this.client = new axios.create(Object.assign({}, axiosDefaults, options));
    this.client.interceptors.request.use((config) => {
      config.params = config.params || {};
      config.params['key'] = key;
      config.params['token'] = token;
      return config;
  });
  }
};
//Not sure that this is the good way, it's not Singleton if we don't watch how many times we import it.
const networkMng = new NetworkMng();
export default networkMng;