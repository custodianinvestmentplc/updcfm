import React, { useEffect } from "react";
import {
  Container,
  FlexContainer,
  Link,
  Paragraph,
} from "../../../../Styled-Components/styled-components";
import TopNavbar from "../../../Top-Navbar/TopNavbar";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
import Toast from "react-native-toast-message";

import { Colors } from "../../../../Colors/Colors";
import { ScrollView } from "react-native";

const { primary } = Colors;

const BillsAndUtility = () => {
  const navigation = useNavigation();
  const route = useRoute();
  useEffect(() => {
    navigation.navigate("dashboard");
  }, [route.name]);
  return (
    <Container background="#fff">
      <TopNavbar />
      <ScrollView>
        <Container mt="30px" background="#FFF">
          <Container height="150px" px="20px" background="transparent">
            <Container borderRadius="10px" px="10px" py="10px">
              <FlexContainer flexDirection="column" items="center">
                <Container height="80px" background="transparent">
                  <Paragraph fontSize="18" color="#fff">
                    Wallet Balance
                  </Paragraph>
                  <Paragraph fontSize="48" color="#fff">
                    {"\u20A6" + " " + "0.00"}
                  </Paragraph>
                </Container>
                <Container
                  height="40px"
                  background="transparent"
                  items="center"
                  justify="center"
                >
                  <Container
                    height="40px"
                    width="200px"
                    background="#fff"
                    items="center"
                    justify="center"
                    borderRadius="10px"
                  >
                    <Paragraph fontSize="20px" color={primary}>
                      Top up
                    </Paragraph>
                  </Container>
                </Container>
              </FlexContainer>
            </Container>
          </Container>
          <FlexContainer flexDirection="column" px="20px" py="10px">
            <Link
              mb="20px"
              onPress={() => {
                Toast.show({
                  type: "error",
                  text1: "Coming Soon.",
                });
              }}
            >
              <Container
                height="150px"
                width="100%"
                borderRadius="10px"
                background="#D9D9D9"
                px="10px"
                py="10px"
              >
                <FlexContainer overflow>
                  <Container background="transparent" width="70%">
                    <Paragraph fontSize="28px">Service Charge</Paragraph>
                    <Paragraph fontSize="12px" color={primary}>
                      general charges like water, waste & so on within the
                      premises
                    </Paragraph>
                  </Container>
                  <Container
                    width="30%"
                    items="center"
                    background="transparent"
                  >
                    <FontAwesome name="ticket" color="#000" size={50} />
                  </Container>
                </FlexContainer>
              </Container>
            </Link>
            <Link
              mb="20px"
              onPress={() => {
                Toast.show({
                  type: "error",
                  text1: "Coming Soon.",
                });
              }}
            >
              <Container
                height="150px"
                width="100%"
                borderRadius="10px"
                background="#D9D9D9"
                px="10px"
                py="10px"
              >
                <FlexContainer overflow>
                  <Container background="transparent" width="70%">
                    <Paragraph fontSize="28px">Buy Power</Paragraph>
                    <Paragraph fontSize="12px" color={primary}>
                      electricity and diesel
                    </Paragraph>
                  </Container>
                  <Container
                    width="30%"
                    items="center"
                    background="transparent"
                  >
                    <Entypo name="eye" color="#000" size={50} />
                  </Container>
                </FlexContainer>
              </Container>
            </Link>
            <Link
              onPress={() => {
                Toast.show({
                  type: "error",
                  text1: "Coming Soon.",
                });
              }}
            >
              <Container
                height="150px"
                width="100%"
                borderRadius="10px"
                background="#D9D9D9"
                px="10px"
                py="10px"
              >
                <FlexContainer overflow>
                  <Container background="transparent" width="70%">
                    <Paragraph fontSize="28px">View Statement</Paragraph>
                    <Paragraph fontSize="12px" color={primary}>
                      previously made bills & utility payments
                    </Paragraph>
                  </Container>
                  <Container
                    width="30%"
                    items="center"
                    background="transparent"
                  >
                    <Entypo name="eye" color="#000" size={50} />
                  </Container>
                </FlexContainer>
              </Container>
            </Link>
          </FlexContainer>
        </Container>
      </ScrollView>
    </Container>
  );
};

export default BillsAndUtility;
