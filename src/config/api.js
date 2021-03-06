import axios from 'axios';
import ENV from './envVars';

export class API {
  static api = axios.create({
    baseURL: ENV?.API_URL,
  });

  static async postLoginUser() {
    const subParam = 'ToolboxMobileTest';
    return this.api.post('/v1/mobile/auth', {
      sub: subParam,
    });
  }

  static async getDataList({ authorizationType, token }) {
    const config = {
      headers: { Authorization: `${authorizationType} ${token}` },
    };
    return this.api.get(`/v1/mobile/data`, config);
  }
}
