/* eslint-disable no-undef */
import axios from "axios";

const getIP = async () => {
  const ip = await axios
    .get(`https://geolocation-db.com/json/fd18cb60-5f5a-11ee-87d3-bd3f0d7c4f89`)
    .then((res) => res.data.IPv4)
    .catch((err) => console.error(`${err.code}: - ${err.message}`));
  return ip;
};

export { getIP };
