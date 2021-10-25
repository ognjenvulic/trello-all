import axios from 'axios';

const axiosDefaults = {};

class NetworkMng {
  constructor(options) {
    this.client = new axios.create(Object.assign({}, axiosDefaults, options));
  }

  // static getInstance(options) {
  //   if (!this.instance) {
  //     this.instance = new axios.create(Object.assign({}, axiosDefaults, options));
  //   }
  //   return this.instance;
  // }
};
const networkMng = new NetworkMng();
export default networkMng;