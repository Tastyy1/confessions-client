/* eslint-disable no-undef */
import axios from "axios";


const instance = axios.create({
  baseURL: `https://confessions-server.vercel.app/api`,
}); 

export default instance;
