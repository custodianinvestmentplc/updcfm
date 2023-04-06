import AsyncStorage from "@react-native-async-storage/async-storage";

export const getEmail = () => {
  AsyncStorage.getItem("email").then((email) => {
    return email;
  });
};
