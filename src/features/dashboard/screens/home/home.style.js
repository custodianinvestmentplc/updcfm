import { StatusBar } from 'react-native';
import { Platform } from 'react-native';
import styled from 'styled-components';
import Constants from 'expo-constants';
import Dimensions from 'react-native';
const { primary } = Colors;
const statusHeight = Constants.statusBarHeight;

export const DashboardContainer = styled.View`
  padding: 0px 12px;
`;

export const HomeContainer = styled.View``;

export const NavbarContainer = styled.View`
  height: 50px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 1px;
  ${Platform.OS === 'ios'
    ? `
        margin-top: 44px
    `
    : `
        margin-top: ${statusHeight}px
    `}
`;

export const LogoContainer = styled.View`
  width: 90px;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  height: 50px;
  width: 90px;
`;

export const NavbarMenu = styled.View`
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 80px;
  margin-rigth: 10px;
`;

export const NavbarMenuI = styled.View`
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 30px;
  margin-right: 20px;
`;

export const MenuIconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 40px;
`;

export const GreetingContainer = styled.View`
  height: ${Platform.OS == 'ios' ? `40px` : `${40 * 0.75}px`};
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ProfileContainer = styled.Image`
  background: #fff;
  height: ${Platform.OS == 'ios' ? `35px` : `${35 * 0.75}px`};
  width: ${Platform.OS == 'ios' ? `35px` : `${35 * 0.75}px`};
  border-radius: ${Platform.OS == 'ios' ? `50px` : `${50 * 0.75}px`};
`;

export const Greeting = styled.View`
  margin-left: ${Platform.OS == 'ios' ? `10px` : `${10 * 0.75}px`};
`;
export const GreetingTextContainer = styled.View`
  flex-direction: row;
`;

export const SliderContainer = styled.View`
  align-items: center;
`;
export const SliderImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 18px;
`;
export const SliderImageContainer = styled.View`
  width: 100%;
  height: ${Platform.OS == 'ios' ? `170px` : `${170 * 0.75}px`};
  border-radius: 38px;
`;

export const Divider = styled.View`
  width: ${Platform.OS == 'ios' ? `250px` : `${250 * 0.75}px`};
  height: ${Platform.OS == 'ios' ? `1px` : `${1 * 0.75}px`};
  background: #dbadad;
  margin-top: ${Platform.OS == 'ios' ? `15px` : `${15 * 0.75}px`};
  margin-bottom: ${Platform.OS == 'ios' ? `10px` : `${10 * 0.75}px`};
`;

export const CardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
`;

export const Card = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: ${Platform.OS == 'ios' ? `170px` : `${200 * 0.75}px`};
  width: ${Platform.OS == 'ios' ? `170px` : `${200 * 0.75}px`};
  background: ${primary};
  border-radius: 8px;
  margin: 6px auto;
`;

export const CardIcon = styled.Image`
  width: ${(props) =>
    Platform.OS == 'ios'
      ? props.width
        ? `${props.width}%`
        : `100%`
      : props.width
      ? `${props.width * 0.75}%`
      : `${100 * 0.75}%`};
  height: ${Platform.OS == 'ios' ? `100px` : `${150 * 0.75}px`};
`;
