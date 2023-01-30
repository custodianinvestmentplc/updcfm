import { Platform } from 'react-native';
import styled from 'styled-components';
import Colors from '../../components/Colors';

const { primary } = Colors;

export const TabIconContainer = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-around;
  background: ${(props) => (props.background ? props.background : '#fff')};
`;

export const ActiveDivider = styled.View`
  width: 20px;
  height: 2px;
  background: ${primary};
`;

export const NavbarBackIconContainer = styled.TouchableOpacity`
  margin-left: ${Platform.OS === 'ios' ? `20px` : `${20 * 0.75}px`};
`;

export const NavbarTitileContainer = styled.View`
  align-items: center;
`;
