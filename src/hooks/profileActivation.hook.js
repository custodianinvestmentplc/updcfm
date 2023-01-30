import axios from 'axios';
const root_url = 'https:cpc.custodianplc.com.ng/api/';

export const emailVerification = async (email) => {
  const res = await axios.get(root_url + 'residents/search?emai=' + email);

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
