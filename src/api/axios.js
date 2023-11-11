/* eslint-disable no-undef */
import axios from "axios";


const instance = axios.create({
  baseURL: `https://confessions-client-nine.vercel.app/api`,
});

export default instance;
