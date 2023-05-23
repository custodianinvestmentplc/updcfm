import { Base64 } from "js-base64";

export const stringToBase32 = (payload: string) => {
  return Base64.encode(payload);
};
