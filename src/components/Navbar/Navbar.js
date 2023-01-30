import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  Logo,
  LogoContainer,
  MenuIconContainer,
  NavbarContainer,
  NavbarMenu,
  NavbarMenuI,
} from '../../features/dashboard/screens/home/home.style';
import { Divider, Icon } from '@rneui/themed';
import logo from '../../images/logos/logo.png';
import {
  MenuContainer,
  MenuListContainer,
  MenuViewContainer,
} from './navbar.style';
import { Paragraph } from '../../styles/styles';
import {
  NavbarBackIconContainer,
  NavbarTitileContainer,
} from '../../features/dashboard/dashboard.style';
import { TitleDivider } from '../../features/dashboard/screens/payment/payment.style';
import Colors from '../Colors';
import { useNavigation } from '@react-navigation/native';

const { primary } = Colors;
const Navbar = ({ title }) => {
  const navigation = useNavigation();
  const [showNavbar, setShowNavbar] = useState(false);

  // useEffect(() => {
  //   setShowNavbar(!showNavbar);
  // }, [showNavbar]);
  return (
    <>
      {title ? (
        <NavbarContainer>
          <NavbarBackIconContainer onPress={() => navigation.goBack()}>
            <Icon name='chevron-back-outline' type='ionicon' />
          </NavbarBackIconContainer>
          <NavbarTitileContainer>
            <Paragraph size='20' font='700' mb='10'>
              {title}
            </Paragraph>
            <TitleDivider background={primary} />
          </NavbarTitileContainer>
          <NavbarMenuI>
            <MenuIconContainer onPress={() => setShowNavbar(!showNavbar)}>
              <Icon name='align-right' type='feather' />
            </MenuIconContainer>
          </NavbarMenuI>
        </NavbarContainer>
      ) : (
        <NavbarContainer>
          <LogoContainer>
            <Logo source={logo} />
          </LogoContainer>
          <NavbarMenu>
            <MenuIconContainer>
              <Icon name='notifications' />
            </MenuIconContainer>
            <MenuIconContainer onPress={() => setShowNavbar(!showNavbar)}>
              <Icon name='align-right' type='feather' />
            </MenuIconContainer>
          </NavbarMenu>
        </NavbarContainer>
      )}
      {showNavbar && (
        <>
          <TouchableWithoutFeedback onPress={() => setShowNavbar(false)}>
            <MenuViewContainer />
          </TouchableWithoutFeedback>
          <MenuContainer>
            <MenuListContainer>
              <Icon name='gear' size={20} type='font-awesome' />
              <Paragraph size='16' fontFamily='Poppins' ml='10'>
                Settings
              </Paragraph>
            </MenuListContainer>
            <Divider />
            <MenuListContainer>
              <Icon name='sign-out' size={20} type='font-awesome' />
              <Paragraph size='16' fontFamily='Poppins' ml='10'>
                Logout
              </Paragraph>
            </MenuListContainer>
          </MenuContainer>
        </>
      )}
    </>
  );
};

export default Navbar;
