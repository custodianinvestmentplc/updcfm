import styled from "styled-components";

export const MenuViewContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 1000px;
  height: 1000px;
  z-index: 1;
`;
export const NavbarMenuContainer = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background: #d9d9d9;
`;

export const MenuContainer = styled.View`
  position: absolute;
  top: 80px;
  right: 20px;
  background: #d9d9d9;
  height: 80px;
  width: 120px;
  border-radius: 8px;
  z-index: 1;
`;

export const MenuListContainer = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: 40px;
  padding: 5px 10px;
  justify-content: flex-start;
`;
