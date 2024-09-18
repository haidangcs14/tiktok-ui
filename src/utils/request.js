import axios from "axios";

const req = axios.create({
  baseURL: "https://tiktok.fullstack.edu.vn/api/",
});

export const get = async (path, option = {}) => {
  const res = await req.get(path, option);

  return res.data;
};

export default req;
