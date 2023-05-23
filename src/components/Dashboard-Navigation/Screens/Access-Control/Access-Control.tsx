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

const { primary } = Colors;

const AccessControl = () => {
  const navigation = useNavigation();
  const route = useRoute();
  useEffect(() => {
    navigation.navigate("dashboard");
  }, [route]);
  return (
    <Container background="#fff">
      <TopNavbar />
      <Container background="#FFF">
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
                  <Paragraph fontSize="24px">Generate Access Code</Paragraph>
                  <Paragraph fontSize="12px" color={primary}>
                    for guests to gain access through the gate
                  </Paragraph>
                </Container>
                <Container width="30%" items="center" background="transparent">
                  <FontAwesome name="ticket" color="#000" size={50} />
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
                  <Paragraph fontSize="24px">View Code History</Paragraph>
                  <Paragraph fontSize="12px" color={primary}>
                    previously raised access code
                  </Paragraph>
                </Container>
                <Container width="30%" items="center" background="transparent">
                  <Entypo name="eye" color="#000" size={50} />
                </Container>
              </FlexContainer>
            </Container>
          </Link>
        </FlexContainer>
      </Container>
    </Container>
  );
};

export default AccessControl;
