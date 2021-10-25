import axios from 'axios';

const axiosDefaults = {};

class NetworkMng {
  static instance;

  static getInstace(options) {
    if (this.instance) {
      this.instance = new axios.create(Object.assign({}, axiosDefaults, options.configuration));
    }

    return this.instance;
  }
};

export default NetworkMng;