import {
  ActivityIndicator,
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  Button,
  ButtonText,
  Container,
  HalfScreen,
  Paragraph,
  Position,
} from "../../Styled-Components/styled-components";

import Icon from "../../Icons/Getting-Started-Image.png";
import logo from "../../Icons/logoWhite.png";

import { Colors } from "../../Colors/Colors";
import { useState } from "react";
// import { StatusBar } from "expo-status-bar";

const { primary } = Colors;

const statusBarHeight = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const h = statusBarHeight ? statusBarHeight : 0;
const heightD = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const GetStarted = ({ navigation }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(heightD);
  return (
    <Container flex={1} height={heightD - h + "px"}>
      <ScrollView>
        <Container flex={1} width={width + "px"}>
          <HalfScreen>
            <Image source={Icon} style={{ flex: 1, resizeMode: "cover" }} />
          </HalfScreen>
          <Container flex={1} width={width + "px"} pl={"20px"} pr={"20px"}>
            <Container flex={1} height={"100px"} width={width + "px"}>
              <Image
                source={logo}
                style={{
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  height: 150,
                  width: 250,
                  flex: 1,
                  marginLeft: -50,
                  resizeMode: "contain",
                }}
              />
            </Container>
            <Paragraph fontSize={"18px"} color={"white"} mb='10px'>
              We provide top level management, maintenance, care and sustainable
              power solutions for residential, corporate and commercial
              properties.
            </Paragraph>
          </Container>
        </Container>
      </ScrollView>
      <Position position='relative' bottom='10px' px='20px'>
        <Button
          background={"#fff"}
          width='100%'
          onPress={() => {
            setIsLoading(!isLoading);
            navigation.navigate("verify-email");
            setIsLoading(!isLoading);
          }}
        >
          {isLoading ? (
            <ActivityIndicator color={primary} />
          ) : (
            <ButtonText color={primary}>Get Started</ButtonText>
          )}
        </Button>
      </Position>
    </Container>
  );
};

export default GetStarted;
