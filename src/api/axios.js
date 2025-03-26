import axios from "axios";

const userBaseUrl = "https://conext.in/suggestions/api";

const createAxiosClient = (baseURL) => {
  const client = axios.create({
    baseURL,
    timeout: 10000,
    timeoutErrorMessage: "Request Timeout , Please Try Again",
  });
  return client;
};

const attachToken = (req, token) => {
  let authToken = localStorage.getItem(token);
  if (authToken) {
    req.headers.Authorization = `Bearer ${authToken}`;
  }
  return req;
};

const userAxiosInstance = createAxiosClient(userBaseUrl);
userAxiosInstance.interceptors.request.use(async (req) => {
  const modifiedReq = attachToken(req, "userToken");
  return modifiedReq;
});

export { userAxiosInstance };
