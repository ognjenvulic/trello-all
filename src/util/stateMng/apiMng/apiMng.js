import NetworkMng from './networkMng';
const apiMng = NetworkMng.getInstace();

class ApiMng {
  static getUser() {
    return apiMng;
  }
};

export default ApiMng;