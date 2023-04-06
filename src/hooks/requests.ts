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
