/* eslint-disable no-undef */
import axios from "axios";

const isDev = import.meta.env?.DEV;

const instance = axios.create({
  baseURL: `https://confessions-client-nine.vercel.app/api`,
});

export default instance;
