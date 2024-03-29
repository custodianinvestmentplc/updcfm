import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRoute } from "@react-navigation/native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { Container } from "../../Styled-Components/styled-components";
import Dashboard from "./Screens/Dashboard/Dashboard";
import { useNavigationState } from "@react-navigation/native";

import { Colors } from "../../Colors/Colors";
import TopNavbar from "../Top-Navbar/TopNavbar";
import ServiceRequest from "./Screens/Sevice-Request/Screens/ServiceRequest";
import BillsAndUtility from "./Screens/BillsAndUtility/Biils-and-Untility";
import AccessControl from "./Screens/Access-Control/Access-Control";
import HelpDesk from "./Screens/Help-Desk/Help-Desk";

const { primary } = Colors;

const Tab = createBottomTabNavigator();

const DashboardNavigation = () => {
  const route = useRoute();
  return (
    <Container>
      <Tab.Navigator
        initialRouteName="dashboard"
        backBehavior="history"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 60,
              padding: "auto",
              borderRadius: 10,
            },
            null,
          ],
        }}
      >
        <Tab.Screen
          name="payment"
          component={BillsAndUtility}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <>
                {focused ? (
                  <Container
                    height="40px"
                    width="40px"
                    borderRadius="10"
                    items="center"
                    justify="center"
                    background="transparent"
                  >
                    <MaterialCommunityIcons
                      name="script"
                      color={primary}
                      size={25}
                    />
                  </Container>
                ) : (
                  <Container
                    height="40px"
                    width="40px"
                    borderRadius="10"
                    items="center"
                    justify="center"
                    background="transparent"
                  >
                    <MaterialCommunityIcons
                      name="script-outline"
                      color={"#9c9c9c"}
                      size={25}
                    />
                  </Container>
                )}
              </>
            ),
          }}
        />
        <Tab.Screen
          name="access-control"
          component={AccessControl}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <>
                {focused ? (
                  <Container
                    height="40px"
                    width="40px"
                    borderRadius="10"
                    items="center"
                    justify="center"
                    background="transparent"
                  >
                    <Ionicons name="key" color={primary} size={25} />
                  </Container>
                ) : (
                  <Container
                    height="40px"
                    width="40px"
                    borderRadius="10"
                    items="center"
                    justify="center"
                    background="transparent"
                  >
                    <Ionicons name="key-outline" color={"#9c9c9c"} size={25} />
                  </Container>
                )}
              </>
            ),
          }}
        />
        <Tab.Screen
          name="dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <>
                {focused ? (
                  <Container
                    height="40px"
                    width="40px"
                    borderRadius="10"
                    items="center"
                    justify="center"
                  >
                    <Ionicons name="home" color={"#fff"} size={25} />
                  </Container>
                ) : (
                  <Container
                    height="40px"
                    width="40px"
                    borderRadius="10"
                    items="center"
                    justify="center"
                  >
                    <Ionicons name="home-outline" color={"#fff"} size={25} />
                  </Container>
                )}
              </>
            ),
          }}
        />
        <Tab.Screen
          name="setting"
          component={ServiceRequest}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <>
                {focused ? (
                  <Container
                    height="40px"
                    width="40px"
                    borderRadius="10"
                    items="center"
                    justify="center"
                    background="transparent"
                  >
                    <MaterialCommunityIcons
                      name="tools"
                      color={primary}
                      size={25}
                    />
                  </Container>
                ) : (
                  <Container
                    height="40px"
                    width="40px"
                    borderRadius="10"
                    items="center"
                    justify="center"
                    background="transparent"
                  >
                    <MaterialCommunityIcons
                      name="tools"
                      color={"#9c9c9c"}
                      size={25}
                    />
                  </Container>
                )}
              </>
            ),
          }}
        />
        <Tab.Screen
          name="help-desk"
          component={HelpDesk}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <>
                {focused ? (
                  <Container
                    height="40px"
                    width="40px"
                    borderRadius="10"
                    items="center"
                    justify="center"
                    background="transparent"
                  >
                    <FontAwesome5 name="headset" color={primary} size={25} />
                  </Container>
                ) : (
                  <Container
                    height="40px"
                    width="40px"
                    borderRadius="10"
                    items="center"
                    justify="center"
                    background="transparent"
                  >
                    <FontAwesome5 name="headset" color={"#9c9c9c"} size={25} />
                  </Container>
                )}
              </>
            ),
          }}
        />
      </Tab.Navigator>
    </Container>
  );
};

export default DashboardNavigation;
