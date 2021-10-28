import networkMng from './networkMng';

class ApiMng {
  static getUser() {
    const url = '/Members/me';
    return networkMng.client.get(url, {
      params: { boards: 'open', board_fields: ['name', 'shortLink'] },
    });
  }

  //IamibqrO
  static getBoard(shortLink) {
    const url = `/boards/${shortLink}`;
    return networkMng.client.get(url, {
      params: { lists: 'open', fields: ['name', 'closed', 'shortLink'], cards: 'visible' },
    });
  }
}

export default ApiMng;
