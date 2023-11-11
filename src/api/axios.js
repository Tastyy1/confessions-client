/* eslint-disable no-undef */
import axios from "axios";


const instance = axios.create({
  baseURL: `https://confessions-server.codederin.repl.co/api`,
}); 

export default instance;
