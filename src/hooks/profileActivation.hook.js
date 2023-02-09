import axios from 'axios';
import { Base64 } from 'js-base64';
const root_url = 'https://cpc.custodianplc.com.ng/api/';

export const emailVerification = async (email) => {
  const res = await axios.get(root_url + 'residents/search?email=' + email);

  const user = res.data;

  return user;
};

export const passcodeVerification = async (email, passcode) => {
  const payload = btoa(email + ':' + passcode);
  console.log(payload);

  const header = {
    headers: {
      authorization: `bearer ${payload}`,
    },
  };
  const res = await axios.post(root_url + 'residents/log-in');
};

export const residentCreatePassword = async (id, password) => {
  const payload = Base64.encode(password);

  const header = {
    headers: {
      authorization: `bearer ${payload}`,
    },
  };

  const res = await axios.post(
    root_url + 'residents/create-password',
    { id },
    header
  );

  const { data } = res;

  return data;
};
