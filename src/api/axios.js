/* eslint-disable no-undef */
import axios from "axios";

const isDev = import.meta.env?.DEV;

const instance = axios.create({
  baseURL: `https://confessions-server.codederin.repl.co/api`,
}); 

export default instance;
