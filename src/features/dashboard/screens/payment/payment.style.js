import styled from "styled-components";

export const TitleDivider = styled.View`
  width: 50px;
  height: 2px;
  background: ${(props) => (props.background ? props.background : "#4444")};
`;
