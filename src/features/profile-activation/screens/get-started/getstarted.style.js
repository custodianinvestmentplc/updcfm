import { Platform } from 'react-native';
import styled from 'styled-components';

export const GetStartedLogo = styled.Image`
  height: 100px;
  width: 150px;
`;

export const GetStartedImage = styled.Image`
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.height ? `${props.height}px` : '50%')};
  width: 100%;
`;
