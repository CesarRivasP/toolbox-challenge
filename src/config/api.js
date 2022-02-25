import axios from 'axios';
import ENV from './envVars';

export class API {
  static api = axios.create({
    baseURL: ENV?.API_URL,
  });

  static async postLoginUser() {
    return this.api.post('/v1/mobile/auth', {
      sub: 'ToolboxMobileTest',
    });
  }

  static async getDataList({ type, token }) {
    const config = {
      headers: { Authorization: `${type} ${token}` },
    };
    return this.api.get(`/v1/mobile/data`, config);
  }
}
