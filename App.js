import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileActivation from "./src/features/profile-activation/ProfileActivation";
import Login from "./src/features/login/Login";
import Dashboard from "./src/features/dashboard/Dashboard";
import Colors from "./src/components/Colors";
import { useFonts } from "expo-font";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Provider } from "react-redux";
import { store } from "./src/lib/redux/store";
import { PixelRatio } from "react-native";

const { primary } = Colors;
export default function App() {
  const Stack = createNativeStackNavigator();
  console.log(PixelRatio.getFontScale());
  const [loaded] = useFonts({
    Poppins: require("./Fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsBold: require("./Fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsSemiBold: require("./Fonts/Poppins/Poppins-SemiBold.ttf"),
    // Montserrat: require('./fonts/Montserrat/Montserrat-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={primary} style='light' />
        <Stack.Navigator>
          <Stack.Screen
            name='profile-activation'
            component={ProfileActivation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='login'
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='dashboard'
            component={Dashboard}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen name="register-email" component={RegisterEmail} options={{ headerShown: false }} />
        <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
        */}
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
    </Provider>
  );
}
