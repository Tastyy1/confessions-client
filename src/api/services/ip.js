/* eslint-disable no-undef */
import axios from "axios";

const getIP = async () => {
  const ip = await axios
    .get(`http://ip-api.com/json/`)
    .then((res) => res.data.query)
    .catch((err) => console.error(`${err.code}: - ${err.message}`));
  return ip;
};

export { getIP };
