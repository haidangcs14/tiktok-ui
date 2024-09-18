import axios from "axios";

const httpRequest = axios.create({
  baseURL: "https://tiktok.fullstack.edu.vn/api/",
});

export const get = async (path, option = {}) => {
  const res = await httpRequest.get(path, option);

  return res.data;
};

export default httpRequest;
