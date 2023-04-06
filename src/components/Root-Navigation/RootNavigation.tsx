import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import DashboardNavigation from "../Dashboard-Navigation/DashboardNavigation";
import Login from "../Login/Login";
import CreatePassword from "../Create-Password/CreatePassword";
import VerifyPasscode from "../Verify-Passcode/VerifyPasscode";
import VerifyEmail from "../Verify-Email/VerifyEmail";
import GetStarted from "../Get-Started/GetStarted";
import { setResident } from "../../redux/slices/navslice";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function RootNavigation() {
  const [isReady, setIsReady] = useState(false);
  const [userData, setUserData] = useState("");

  // const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem("userData")
      .then(async (result: any) => {
        console.log(result);
        setIsReady(true);
        const resident = JSON.parse(result);
        // dispatch(setResident(resident));
        setUserData(result);
        console.log("raw result: " + result);
        console.log("JSON Parse: " + typeof resident);
        await SplashScreen.hideAsync();
      })
      .catch((err) => console.log(err));
  }, [isReady]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userData != null ? (
          <>
            <Stack.Screen
              name='dashboard'
              component={DashboardNavigation}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name='get-started'
              component={GetStarted}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='verify-email'
              component={VerifyEmail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='verify-passcode'
              component={VerifyPasscode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='create-password'
              component={CreatePassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='login'
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='dashboard'
              component={DashboardNavigation}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
