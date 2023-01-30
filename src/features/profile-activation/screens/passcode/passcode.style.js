import styled from "styled-components";

export const PasscodeInputContainer = styled.View`
  width: 100%;
  height: 50px;
  margin-top: ${props => props.mt ? `${props.mt}px`: '0px'};
  margin-bottom: ${props => props.mb ? `${props.mb}px`: '0px'};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const PasscodeInput = styled.TextInput`
  height: 100%;
  width: 50px;
  background: #fff;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 0px 2px;
`;
