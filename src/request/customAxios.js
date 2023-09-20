import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  headers: {
    Accept: "application/json",
  },
});

export default authFetch;
