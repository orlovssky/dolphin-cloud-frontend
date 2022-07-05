import axios from "axios";
import { getValue } from "services/utils/common/localStorage.utils";

const api = axios.create({
  baseURL: "https://cloud-dev.dolphin.ru.com/api/v1",
});

api.interceptors.request.use((config) => {
  const token = getValue("dolphin-api-token");

  if (config.headers && token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export { api };
