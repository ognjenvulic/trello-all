import networkMng from './networkMng';

class ApiMng {
  static getUser() {
    const url = '/Members/me';
    return networkMng.client.get(url,{params: {boards: 'open'}});
  }

  //IamibqrO
  static getBoardById(id) {
    const url = `/boards/${id}}`;
    return networkMng.client.get(url);
  }
};

export default ApiMng;