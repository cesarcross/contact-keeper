import Api from "./axiosConfig";
// import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    Api.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete Api.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
