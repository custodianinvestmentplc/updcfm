import { Platform } from 'react-native';
import styled from 'styled-components';

export const CardBoard = styled.TouchableOpacity`
  width: 100%;
  height: ${(props) =>
    Platform.OS == 'ios'
      ? `${props.ht ? `${props.ht}px` : `50px`}`
      : `${props.ht ? `${props.ht * 0.75}px` : `${50 * 0.75}px`}`};
  background: ${(props) => (props.bg ? props.bg : '#fff')};
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
`;

export const Card = styled.View`
  width: 100%;
  height: ${(props) =>
    Platform.OS == 'ios'
      ? `${props.ht ? `${props.ht}px` : `50px`}`
      : `${props.ht ? `${props.ht * 0.75}px` : `${50 * 0.75}px`}`};
  background: ${(props) => (props.bg ? props.bg : '#fff')};
  border-radius: 8px;
  padding: 15px 20px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const CardContent = styled.View`
  width: 100%;
`;

export const CardContainer = styled.View``;

export const CardBoardButton = styled.TouchableOpacity`
  background: #fff;
  height: ${Platform.OS === 'ios' ? `40px` : `${45 * 0.75}px`};
  width: ${Platform.OS === 'ios' ? `200px` : `${250 * 0.75}px`};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const CardBoardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardBoardContent = styled.View`
  width: ${Platform.OS === 'ios' ? `220px` : `${220 * 0.75}px`};
`;

export const CardBoardIconContainer = styled.View`
  width: ${Platform.OS === 'ios' ? `100px` : `${100 * 0.75}px`};
  height: ${Platform.OS === 'ios' ? `50px` : `${50 * 0.75}px`};
  align-items: center;
  justify-content: center;
`;
