/* eslint-disable no-undef */
import axios from "axios";

const getIP = async () => {
  const ip = await axios
    .get(`https://ipapi.co/json`)
    .then((res) => res.data.ip)
    .catch((err) => console.error(`${err.code}: - ${err.message}`));
  return ip;
};

export { getIP };
