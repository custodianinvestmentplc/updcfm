import { Image, Platform, StatusBar } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import {
  Container,
  FlexContainer,
  Link,
  Paragraph,
  Position,
  Touchable,
} from "../../Styled-Components/styled-components";
import logo from "../../Icons/logo.png";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TopNavbar = () => {
  const route = useRoute();
  const [isOpen, setIsOpen] = useState(false);
  const statusBarHeight = Platform.OS === "ios" ? 20 : 0;
  const navigation = useNavigation();

  return (
    <>
      <Container mt={statusBarHeight} height="50" background="#fff">
        <FlexContainer style={{ flex: 1 }} justify="space-between">
          <Container
            style={{ flex: 1 }}
            height="50px"
            width="100px"
            background="transparent"
          >
            {route.name === ("dashboard" || "home") ? (
              <Image
                source={logo}
                style={{ width: 100, height: 50 }}
                resizeMode="contain"
              />
            ) : (
              <Link onPress={() => navigation.goBack()}>
                <Container
                  height="50"
                  justify="center"
                  background="#fff"
                  pl="10"
                >
                  <Ionicons name="chevron-back-sharp" size={30} />
                </Container>
              </Link>
            )}
          </Container>
          {route.name === "dashboard" ? null : (
            <Container
              style={{ flex: 6 }}
              items="center"
              justify="center"
              background="transparent"
            >
              {route.name === "setting" ? (
                <Container
                  background="transparent"
                  items="center"
                  justify="center"
                >
                  <Paragraph fontSize="25">Service Request</Paragraph>
                  <Container height="3px" mt="5" width="70px" />
                </Container>
              ) : null}
              {route.name === "payment" ? (
                <Container
                  background="transparent"
                  items="center"
                  justify="center"
                >
                  <Paragraph fontSize="25">Bills & Utilities</Paragraph>
                  <Container height="3px" mt="5" width="70px" />
                </Container>
              ) : null}
              {route.name === "help-desk" ? (
                <Container
                  background="transparent"
                  items="center"
                  justify="center"
                >
                  <Paragraph fontSize="25">Help Desk</Paragraph>
                  <Container height="3px" mt="5" width="70px" />
                </Container>
              ) : null}
              {route.name === "access-control" ? (
                <Container
                  background="transparent"
                  items="center"
                  justify="center"
                >
                  <Paragraph fontSize="25">Access Control</Paragraph>
                  <Container height="3px" mt="5" width="70px" />
                </Container>
              ) : null}
              {route.name === "service-request-form" ? (
                <Container
                  background="transparent"
                  items="center"
                  justify="center"
                >
                  <Paragraph fontSize="25">Intervention Job</Paragraph>
                  <Container height="3px" mt="5" width="70px" />
                </Container>
              ) : null}
            </Container>
          )}
          <Container
            style={{ flex: 1 }}
            height="50px"
            width="100px"
            items="flex-end"
            justify="flex-end"
            background="transparent"
          >
            <FlexContainer>
              {route.name === ("dashboard" || "home") ? (
                <Container
                  height="50px"
                  width="50px"
                  items="center"
                  justify="center"
                  background="transparent"
                >
                  <Ionicons name="ios-notifications" size={20} />
                </Container>
              ) : null}
              <Link
                onPress={() => {
                  setIsOpen(!isOpen);
                  console.log(isOpen);
                }}
              >
                <Container
                  height="50px"
                  width="50px"
                  items="center"
                  justify="center"
                  background="transparent"
                >
                  <Feather name="align-right" size={20} />
                </Container>
              </Link>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
      {isOpen ? (
        <Touchable
          height="100%"
          width="100%"
          background="transparent"
          position="absolute"
          top="0"
          right="0"
          z={100}
          onPress={() => {
            setIsOpen(false);
          }}
        >
          <Position position="absolute" top="60px" right="20px">
            <Container
              height="50"
              width="150"
              background="#D9D9D9"
              borderRadius="10"
              px="10"
              py="5"
            >
              <FlexContainer flexDirection="column" overflow justify="center">
                <Link
                  onPress={async () => {
                    setIsOpen(false);
                    await AsyncStorage.removeItem("userData");
                    navigation.navigate("verify-email");
                  }}
                >
                  <Container
                    height="40"
                    width="130"
                    justify="center"
                    background="transparent"
                  >
                    <Paragraph color="#000">Logout</Paragraph>
                  </Container>
                </Link>
              </FlexContainer>
            </Container>
          </Position>
        </Touchable>
      ) : null}
    </>
  );
};

export default TopNavbar;
