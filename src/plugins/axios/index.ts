import axios from "axios";

const api = axios.create({
  baseURL: "https://cloud-dev.dolphin.ru.com/api/v1",
});

export { api };
