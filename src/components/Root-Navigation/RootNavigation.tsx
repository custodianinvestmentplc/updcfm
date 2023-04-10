import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import DashboardNavigation from "../Dashboard-Navigation/DashboardNavigation";
import Login from "../Login/Login";
import CreatePassword from "../Create-Password/CreatePassword";
import VerifyPasscode from "../Verify-Passcode/VerifyPasscode";
import VerifyEmail from "../Verify-Email/VerifyEmail";
import GetStarted from "../Get-Started/GetStarted";
import { setResident } from "../../redux/slices/navslice";
import AppLoading from "expo-app-loading";
import ServiceRequestForm from "../Dashboard-Navigation/Screens/Sevice-Request/Screens/ServiceRequestForm";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  const [isReady, setIsReady] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [routeName, setRouteName] = useState("");

  // const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const value = await AsyncStorage.getItem("userData");
        if (value !== null) {
          const resident = JSON.parse(value);
          setUserData(resident);
          setRouteName("dashboard");
          console.log("User Data: " + value);
        } else {
          setUserData(value);
          setRouteName("get-started");
          console.log("No Value: " + value);
        }
      } catch (error) {
        console.warn(error);
      } finally {
        setIsReady(true);
      }
    };

    getUserData();
  }, []);

  const onLoadRoutes = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  console.log("I am here => " + JSON.stringify(userData));
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routeName}>
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
        <Stack.Screen
          name='service-request-form'
          component={ServiceRequestForm}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
