import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/home/Home';
import { ActiveDivider, TabIconContainer } from './dashboard.style';
import { Icon } from '@rneui/themed';
import Colors from '../../components/Colors';
import Service from './screens/services/Service';
import AccessControl from './screens/access-control/AccessControl';
import HelpDesk from './screens/help-desk/HelpDesk';
import { Platform } from 'react-native';
import BillsAndUtility from './screens/BillsAndUtility/BillsAndUtility';
const { primary } = Colors;
const Dashboard = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName='home'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: 'flex',
            alignItem: 'center',
            justifyContent: 'center',
            height: Platform.OS === 'ios' ? 60 * 2 : 60,
            padding: 'auto',
            borderRadius: 10,
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name='payment'
        component={BillsAndUtility}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              {focused ? (
                <TabIconContainer>
                  <Icon
                    name='script-text'
                    type='material-community'
                    color='#0F0F0F'
                  />
                  <ActiveDivider />
                </TabIconContainer>
              ) : (
                <TabIconContainer>
                  <Icon
                    name='script-text'
                    type='material-community'
                    color='#9A9595'
                  />
                </TabIconContainer>
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name='vending'
        component={AccessControl}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              {focused ? (
                <TabIconContainer>
                  <Icon name='key' type='font-awesome-5' color='#0F0F0F' />
                  <ActiveDivider />
                </TabIconContainer>
              ) : (
                <TabIconContainer>
                  <Icon name='key' type='font-awesome-5' color='#9A9595' />
                </TabIconContainer>
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name='home'
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIconContainer background={primary}>
              <Icon name='home' color='#fff' />
            </TabIconContainer>
          ),
        }}
      />
      <Tab.Screen
        name='service-request'
        component={Service}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              {focused ? (
                <TabIconContainer>
                  <Icon name='tools' type='font-awesome-5' color='#0F0F0F' />
                  <ActiveDivider />
                </TabIconContainer>
              ) : (
                <TabIconContainer>
                  <Icon name='tools' type='font-awesome-5' color='#9A9595' />
                </TabIconContainer>
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name='contact-center'
        component={HelpDesk}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              {focused ? (
                <TabIconContainer>
                  <Icon name='headset' type='font-awesome-5' color='#0F0F0F' />
                  <ActiveDivider />
                </TabIconContainer>
              ) : (
                <TabIconContainer>
                  <Icon name='headset' type='font-awesome-5' color='#9A9595' />
                </TabIconContainer>
              )}
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Dashboard;
