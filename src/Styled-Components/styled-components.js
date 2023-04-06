import { Dimensions } from "react-native";
import styled from "styled-components";
import { Colors } from "../Colors/Colors";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const { primary } = Colors;

export const Container = styled.View`
  ${(props) => (props.flex ? `flex: ${props.flex}` : null)};
  background: ${(props) => (props.background ? props.background : primary)}
  height: ${(props) => (props.height ? props.height : "100%")};
  width: ${(props) => (props.width ? props.width : "100%")};
  margin-top: ${(props) => (props.mt ? props.mt : 0)};
  margin-left: ${(props) => (props.ml ? props.ml : 0)};
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)};
  margin-right: ${(props) => (props.mr ? props.mr : 0)};
  padding-top: ${(props) => (props.pt ? props.pt : 0)};
  padding-left: ${(props) => (props.pl ? props.pl : 0)};
  padding-bottom: ${(props) => (props.pb ? props.pb : 0)};
  padding-right: ${(props) => (props.pr ? props.pr : 0)};
  ${(props) => (props.items ? `align-items: ${props.items}` : null)};
  ${(props) => (props.justify ? `justify-content: ${props.justify}` : null)};
  ${(props) => (props.mx ? `margin: auto ${props.mx}` : null)};
  ${(props) => (props.my ? `margin: ${props.my} auto` : null)};
  ${(props) => (props.px ? `padding-left: ${props.px}` : null)};
  ${(props) => (props.px ? `padding-right: ${props.px}` : null)};
  ${(props) => (props.py ? `padding-top: ${props.py}` : null)};
  ${(props) => (props.py ? `padding-bottom: ${props.py}` : null)};
  ${(props) =>
    props.borderRadius ? `border-radius: ${props.borderRadius}` : null};
  ${(props) => (props.brtr ? `border-top-right-radius: ${props.brtr}` : null)};
  ${(props) => (props.brtl ? `border-top-left-radius: ${props.brtl}` : null)};
  ${(props) =>
    props.brbl ? `border-bottom-left-radius: ${props.brbl}` : null};
  ${(props) =>
    props.brbr ? `border-bottom-right-radius: ${props.brbr}` : null};
    ${(props) => (props.overflow ? `overflow: hidden` : null)};
  ${(props) =>
    props.shadow
      ? `
          elevation: 2;
          shadow-opacity: 0.3;
          shadow-radius: 2px;
          shadow-color: #000;
          shadow-offset: 0px 2px;
  `
      : null}
`;

export const Link = styled.TouchableOpacity``;

export const Paragraph = styled.Text`
  font-size: ${(props) => (props.fontSize ? props.fontSize : 16)};
  color: ${(props) => (props.color ? props.color : "#000")};
  margin-top: ${(props) => (props.mt ? props.mt : 0)};
  margin-left: ${(props) => (props.ml ? props.ml : 0)};
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)};
  margin-right: ${(props) => (props.mr ? props.mr : 0)};
  padding-top: ${(props) => (props.pt ? props.pt : 0)};
  padding-left: ${(props) => (props.pl ? props.pl : 0)};
  padding-bottom: ${(props) => (props.pb ? props.pb : 0)};
  padding-right: ${(props) => (props.pr ? props.pr : 0)};
  ${(props) => (props.mx ? `margin: auto ${props.mx}` : null)};
  ${(props) => (props.my ? `margin: ${props.my} auto` : null)};
  ${(props) => (props.px ? `padding-left: ${props.px}` : null)};
  ${(props) => (props.px ? `padding-right: ${props.px}` : null)};
  ${(props) => (props.py ? `padding-top: ${props.py}` : null)};
  ${(props) => (props.py ? `padding-bottom: ${props.py}` : null)};
  ${(props) => (props.alignText ? `text-align: ${props.alignText}` : null)};
`;

export const HalfScreen = styled.View`
  height: ${height / 2}px;
  width: ${width}px;
  padding 10px;
`;

export const Position = styled.View`
  position: ${(props) => (props.position ? props.position : null)};
  ${(props) => (props.height ? `height: ${props.height}` : null)}
  ${(props) => (props.width ? `width: ${props.width}` : null)}
  ${(props) => (props.background ? `background: ${props.background}` : null)}
  ${(props) => (props.top ? `top: ${props.top}` : null)};
  ${(props) => (props.bottom ? `bottom: ${props.bottom}` : null)};
  ${(props) => (props.left ? `left:  ${props.left}` : null)};
  ${(props) => (props.right ? `right: ${props.right}` : null)};
  ${(props) => (props.px ? `padding-left: ${props.px}` : null)};
  ${(props) => (props.px ? `padding-right: ${props.px}` : null)};
  ${(props) => (props.py ? `padding-top: ${props.py}` : null)};
  ${(props) => (props.py ? `padding-bottom: ${props.py}` : null)};
  ${(props) => (props.z ? `z-index: ${props.z}` : null)};
`;

export const Touchable = styled.TouchableOpacity`
  position: ${(props) => (props.position ? props.position : null)};
  ${(props) => (props.height ? `height: ${props.height}` : null)}
  ${(props) => (props.width ? `width: ${props.width}` : null)}
  ${(props) => (props.background ? `background: ${props.background}` : null)}
  ${(props) => (props.top ? `top: ${props.top}` : null)};
  ${(props) => (props.bottom ? `bottom: ${props.bottom}` : null)};
  ${(props) => (props.left ? `left:  ${props.left}` : null)};
  ${(props) => (props.right ? `right: ${props.right}` : null)};
  ${(props) => (props.px ? `padding-left: ${props.px}` : null)};
  ${(props) => (props.px ? `padding-right: ${props.px}` : null)};
  ${(props) => (props.py ? `padding-top: ${props.py}` : null)};
  ${(props) => (props.py ? `padding-bottom: ${props.py}` : null)};
  ${(props) => (props.z ? `z-index: ${props.z}` : null)};
`;

export const Button = styled.TouchableOpacity`
  height: ${(props) => (props.height ? props.height : "50px")};
  width: ${(props) => (props.width ? props.width : "100%")};
  background: ${(props) => (props.background ? props.background : primary)};
  ${(props) => (props.mx ? `margin: auto ${props.mx}` : null)};
  ${(props) => (props.my ? `margin: ${props.my} auto` : null)};
  ${(props) => (props.px ? `padding-left: ${props.px}` : null)};
  ${(props) => (props.px ? `padding-right: ${props.px}` : null)};
  ${(props) => (props.py ? `padding-top: ${props.py}` : null)};
  ${(props) => (props.py ? `padding-bottom: ${props.py}` : null)};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: ${(props) => (props.color ? props.color : "#fff")};
`;

export const Input = styled.TextInput`
  font-size: ${(props) => (props.fontSize ? props.fontSize : 16)};
  height: ${(props) => (props.height ? props.height : "50px")};
  width: ${(props) => (props.width ? props.width : "100%")};
  ${(props) => (props.align ? `text-align: ${props.align}` : null)};
  background: ${(props) => (props.background ? props.background : primary)};
  ${(props) => (props.mt ? `margin-top: ${props.mt}` : null)};
  ${(props) => (props.me ? `margin-right: ${props.me}` : null)};
  ${(props) => (props.mb ? `margin-bottom: ${props.mb}` : null)};
  ${(props) => (props.ml ? `margin-left: ${props.ml}` : null)};
  ${(props) => (props.mx ? `margin: auto ${props.mx}` : null)};
  ${(props) => (props.my ? `margin: ${props.my} auto` : null)};
  ${(props) => (props.pl ? `padding-left: ${props.pl}` : null)};
  ${(props) => (props.pr ? `padding-right: ${props.pr}` : null)};
  ${(props) => (props.pt ? `padding-top: ${props.pt}` : null)};
  ${(props) => (props.pb ? `padding-bottom: ${props.pb}` : null)};
  ${(props) =>
    props.borderRadius ? `border-radius: ${props.borderRadius}` : null};
  ${(props) => (props.brtr ? `border-top-right-radius: ${props.brtr}` : null)};
  ${(props) => (props.brtl ? `border-top-left-radius: ${props.brtl}` : null)};
  ${(props) =>
    props.brbl ? `border-bottom-left-radius: ${props.brbl}` : null};
  ${(props) =>
    props.brbr ? `border-bottom-right-radius: ${props.brbr}` : null};
`;

export const FlexContainer = styled.View`
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  align-items: ${(props) => (props.items ? props.items : "flex-start")};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  ${(props) => (props.mt ? `margin-top: ${props.mt}` : null)};
  ${(props) => (props.me ? `margin-right: ${props.me}` : null)};
  ${(props) => (props.mb ? `margin-bottom: ${props.mb}` : null)};
  ${(props) => (props.ml ? `margin-left: ${props.ml}` : null)};
  ${(props) => (props.mx ? `margin: auto ${props.mx}` : null)};
  ${(props) => (props.my ? `margin: ${props.my} auto` : null)};
  ${(props) => (props.pl ? `padding-left: ${props.pl}` : null)};
  ${(props) => (props.pr ? `padding-right: ${props.pr}` : null)};
  ${(props) => (props.pt ? `padding-top: ${props.pt}` : null)};
  ${(props) => (props.pb ? `padding-bottom: ${props.pb}` : null)};
  ${(props) => (props.items ? `align-items: ${props.items}` : null)};
  ${(props) => (props.justify ? `justify-content: ${props.justify}` : null)};
  ${(props) => (props.mx ? `margin: auto ${props.mx}` : null)};
  ${(props) => (props.my ? `margin: ${props.my} auto` : null)};
  ${(props) => (props.px ? `padding-left: ${props.px}` : null)};
  ${(props) => (props.px ? `padding-right: ${props.px}` : null)};
  ${(props) => (props.py ? `padding-top: ${props.py}` : null)};
  ${(props) => (props.py ? `padding-bottom: ${props.py}` : null)};
  ${(props) =>
    props.borderRadius ? `border-radius: ${props.borderRadius}` : null};
  ${(props) => (props.brtr ? `border-top-right-radius: ${props.brtr}` : null)};
  ${(props) => (props.brtl ? `border-top-left-radius: ${props.brtl}` : null)};
  ${(props) =>
    props.brbl ? `border-bottom-left-radius: ${props.brbl}` : null};
  ${(props) =>
    props.brbr ? `border-bottom-right-radius: ${props.brbr}` : null};
  ${(props) => (props.overflow ? `overflow: hidden` : null)};
  // overflow:${(props) => props.overflow}
`;
