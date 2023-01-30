import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CreatePassword from "./screens/create-password/CreatePassword";
// import {  } from "react-native-web";
import GetStarted from "./screens/get-started/GetStarted";
import Passcode from "./screens/passcode/Passcode";
import VerifyEmail from "./screens/verify-email/VerifyEmail";
import { useNavigation } from "@react-navigation/native";

function ProfileActivation() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const [session, setSession] = useState("");

  useEffect(() => {
    get();
  }, [session]);

  const get = async () => {
    const value = await AsyncStorage.getItem("@session");

    if (value !== null) {
      navigation.navigate("login");
    }

    setSession(value);
    console.log(value);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="get-started"
        component={GetStarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="verify-email"
        component={VerifyEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="verify-passcode"
        component={Passcode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="create-password"
        component={CreatePassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default ProfileActivation;
