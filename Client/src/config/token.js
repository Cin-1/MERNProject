import clienteAxios from "./axios";

const tokenAuth = (token) => {
  if (token) {
    clienteAxios.defaults.headers.common["x-auth-token"] = token;
  }
};
export default tokenAuth;
