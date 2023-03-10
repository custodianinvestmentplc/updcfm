import { View, Text, Platform } from "react-native";
import React from "react";
import Constants from "expo-constants";
import {
  Background,
  ButtonText,
  CenterContent,
  Container,
  FullButton,
  FullScreenContainer,
  HalfScreenContainer,
  Paragraph,
  StyledContainer,
} from "../../../../styles/styles";
import Colors from "../../../../components/Colors";
import image from "../../../../images/get-started/Getting-Started-Image.png";
import logo from "../../../../images/logos/logoWhite.png";
import {
  FloatButton,
  GetStartedImage,
  GetStartedLogo,
} from "./getstarted.style";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
const { primary } = Colors;
const GetStarted = () => {
  const navigation = useNavigation();
  return (
    <Background>
      <FullScreenContainer>
        <ScrollView>
          <GetStartedImage source={image} resizeMode='cover' height='400' />
          <Container mt='-10' mb='40'>
            <GetStartedLogo source={logo} resizeMode='cover' />
            <View>
              <Paragraph size='18' color='#fff' mb='20' os={Platform.OS}>
                We provide top level management, maintenance, care and
                sustainable power solutions for residential, corporate and
                commercial properties.
              </Paragraph>
            </View>
          </Container>
        </ScrollView>
        <FloatButton>
          <FullButton
            background='#fff'
            onPress={() => navigation.navigate("verify-email")}
          >
            <CenterContent>
              <ButtonText color={primary}>Get Started</ButtonText>
            </CenterContent>
          </FullButton>
        </FloatButton>
      </FullScreenContainer>
    </Background>
  );
};

export default GetStarted;
