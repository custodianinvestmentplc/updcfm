import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components';
import Colors from '../components/Colors';

const { primary } = Colors;

let screenHeight = Dimensions.get('window').height;

export const Background = styled.View`
  background: ${primary};
  height: 100%;
`;
export const BackgroundImage = styled.ImageBackground`
  height: 100%;
  width: 100%;
`;
export const FullScreenContainer = styled.SafeAreaView`
  max-height: 100%;
  height: 100%;
  width: 100%;
  flex: 1;
  align-items: center;
`;

export const HalfScreenContainer = styled.View`
  min-height: 50% !important;
  flex: 5;
  height: 50%;
  width: 100%;
  background: ${(props) =>
    props.background ? props.background : 'transparent'};
`;

export const CenterContent = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.View`
  padding: 10px;
  margin-top: ${(props) =>
    Platform.OS === 'ios'
      ? `${props.mt ? `${props.mt}px` : '0px'}`
      : `${props.mt ? `${props.mt}px` : `0px`}`};
  margin-bottom: ${(props) =>
    Platform.OS === 'ios'
      ? `${props.mb ? `${props.mb}px` : '0px'}`
      : `${props.mb ? `${props.mb}px` : `0px`}`};
  padding-top: ${(props) =>
    Platform.OS === 'ios'
      ? `${props.pt ? `${props.pt}px` : '0px'}`
      : `${props.pt ? `${props.pt}px` : `0px`}`};
  padding-bottom: ${(props) =>
    Platform.OS === 'ios'
      ? `${props.pb ? `${props.pb}px` : '0px'}`
      : `${props.pb ? `${props.pb}px` : `0px`}`};
  padding-right: ${(props) =>
    Platform.OS === 'ios'
      ? `${props.pr ? `${props.pr}px` : '10px'}`
      : `${props.pr ? `${props.pr}px` : `10px`}`};
  padding-left: ${(props) =>
    Platform.OS === 'ios'
      ? `${props.pl ? `${props.pl}px` : '10px'}`
      : `${props.pl ? `${props.pl}px` : `10px`}`};
  max-width: 100%;
`;

export const FullButton = styled.TouchableOpacity`
  min-width: 100%;
  height: 50px;
  background: ${(props) => (props.background ? props.background : primary)};
  border-radius: 8px;
  margin-top: ${Platform.OS == 'ios' ? `10px` : `${10 * 0.75}px`};
`;

export const ButtonText = styled.Text`
  font-family: PoppinsSemiBold;
  font-size: ${Platform.OS == 'ios' ? `20px` : `${20 * 0.75}px`};
  color: ${(props) => (props.color ? props.color : '#fff')};
`;

export const Paragraph = styled.Text`
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : 'Poppins')};
  font-weight: ${(props) => (props.font ? props.font : 'normal')};
  font-size: ${(props) =>
    Platform.OS === 'ios'
      ? `${props.size ? `${props.size}px` : `14px`}`
      : `${props.size ? `${props.size * 0.75}px` : `${14 * 0.75}px`}`};
  text-align: ${(props) => (props.align ? props.align : `left`)};
  color: ${(props) => (props.color ? props.color : '#000')};
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : `0px`)};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : '0px')};
  margin-left: ${(props) => (props.ml ? `${props.ml}px` : '0px')};
`;

export const LogoContainer = styled.View`
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : '0px')};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : '0px')};
  width: 100%;
  height: 40px;
`;

export const Logo = styled.Image`
  width: ${Platform.OS == 'ios' ? `80px` : `${80 * 0.75}px`};
  height: ${Platform.OS == 'ios' ? `50px` : `${50 * 0.75}px`};
`;

export const InputContainer = styled.View`
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : '20px')};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : '0px')};
  width: 100%;
  height: ${Platform.OS == 'ios' ? `50px` : `${50 * 0.75}px`};
  display: flex;
  flex-direction: row;
  background: ${(props) => (props.background ? props.background : '#fff')};
  border-radius: 8px;
`;

export const InputIcon = styled.View`
  width: ${Platform.OS == 'ios' ? `40px` : `${40 * 0.75}px`};
  heigth: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  font-family: Poppins;
  font-size: 16px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: ${(props) => (props.background ? props.background : '#000')};
  padding-left: ${Platform.OS == 'ios' ? `10px` : `${10 * 0.75}px`};
`;
export const LinkContainer = styled.View`
  width: 100%;
  height: ${Platform.OS == 'ios' ? `40px` : `${40 * 0.75}px`};
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
export const Link = styled.TouchableOpacity``;
