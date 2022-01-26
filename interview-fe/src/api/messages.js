import config from "../config";
import * as request from "../service/http";

const { backendApi: API_URL } = config;

export const getMessages = () => request.get(`${API_URL}/messages `);

export const sendMessage = ({userId, message}) =>
  request.post(`${API_URL}/messages/${userId}/${message}`);