import axios from "axios";

const BASE_URL = "https://cpc.custodianplc.com.ng/api/";

export const get = (url: string) => {
  const res = axios.get(BASE_URL + url);
  return res;
};

export const post = (payload: any) => {};

export const handleCreatePassword = async (
  url: string,
  email: string,
  password: string
) => {
  const header = {
    headers: {
      authorization: `Bearer ${password}`,
    },
  };

  const res = await axios.post(BASE_URL + url, { email }, header);

  const { data } = res;

  return data;
};

export const handleCreateInterventionJob = async (
  url: string,
  payload: any,
  residentId: string
) => {
  // const header = {
  //   headers: {
  //     authorization: `Bearer ${password}`,
  //   },
  // };
  const body = {
    categoryId: payload.jobId,
    issueId: payload.issueId,
    location: payload.location,
    shortDescription: payload.shortDescription,
    residentId: residentId,
  };

  const res = await axios.post(BASE_URL + url, body);

  const { data, status } = res;

  return status;
};

export const handleActivationPin = (
  url: string,
  email: string,
  pin: string
) => {
  const header = {
    headers: {
      authorization: `Bearer ${pin}`,
    },
  };
  const res = axios.post(BASE_URL + url, { email }, header);

  return res;
};

export const handleLogin = async (
  url: string,
  email: string,
  password: string
) => {
  const header = {
    headers: {
      authorization: `Barear ${password}`,
    },
  };

  const res = await axios.post(BASE_URL + url, { email }, header);

  const { data } = res;

  return data;
};

export const handleForgetPassword = async (url: string, email: string) => {
  const res = await axios.post(BASE_URL + url, { email });
  console.log(res);
  const { data, status } = res;

  return {
    statusCode: status,
    data,
  };
};
