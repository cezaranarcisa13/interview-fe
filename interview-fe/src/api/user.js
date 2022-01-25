import config from "../config";
import * as request from "../service/http";

const { backendApi: API_URL } = config;

export const getUser = () => request.get(`${API_URL}/users `);