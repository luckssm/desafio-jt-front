import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:4000/api/graphql";

const API = async (body) => {
  try {
    const result = await axios.post(API_BASE_URL, body);
    return result;
  } catch (err) {
    console.error("error: ", err);
  }
};

export default API;
