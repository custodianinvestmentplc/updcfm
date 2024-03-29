import { Feather, Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { StatusBar as StatusBarExpo } from "expo-status-bar";
import { Image, Platform, StatusBar } from "react-native";
import { Colors } from "../../../../Colors/Colors";
import {
  Container,
  FlexContainer,
  Link,
  Paragraph,
} from "../../../../Styled-Components/styled-components";
import logo from "../../../../Icons/logo.png";
import avatar from "../../../../Icons/img_avatar2.png";
import slider from "../../../../Icons/updc__slider.jpg";
import payment from "../../../../Icons/payment.png";
import service from "../../../../Icons/serviceRequest.png";
import key from "../../../../Icons/key.png";
import { selectResident, setResident } from "../../../../redux/slices/navslice";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TopNavbar from "../../../Top-Navbar/TopNavbar";

const { primary } = Colors;

const Dashboard = ({ navigation }: any) => {
  const [resident, setResiden] = useState<any>("");
  const statusBarHeight = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
  const dispatch = useDispatch();
  useEffect(() => {
    AsyncStorage.getItem("userData").then((result: any) => {
      setResiden(JSON.parse(result));
      dispatch(setResident(JSON.parse(result)));
    });
  });

  return (
    <Container>
      <TopNavbar />
      <Container background="#fff">
        <Container
          background="transparent"
          height="60px"
          pl="10px"
          justify="center"
        >
          <FlexContainer>
            <Container
              width="50px"
              height="50px"
              borderRadius="100px"
              background="#fff"
            >
              <Image
                source={avatar}
                resizeMode="contain"
                style={{ width: 50, height: 50, borderRadius: 100 }}
              />
            </Container>
            <Container background="transparent" ml="15px">
              <Paragraph fontSize="15px">Hi,</Paragraph>
              <Paragraph fontSize="25px">
                {resident.first_name + " " + resident.last_name}
              </Paragraph>
            </Container>
          </FlexContainer>
        </Container>
        <Container
          background="transparent"
          height="150px"
          pl="10px"
          pr="10px"
          pt="5px"
          pb="5px"
        >
          <Container flex={1} borderRadius="10px" overflow>
            <Image
              source={slider}
              resizeMode="cover"
              style={{ flex: 1, height: "100%", width: "100%" }}
            />
          </Container>
        </Container>
        <Container background="transparent" pl="20px" pr="20px">
          <FlexContainer justify="space-between" mt="10px">
            <Container height="150px" width="150px" borderRadius="10px">
              <Link onPress={() => navigation.navigate("payment")}>
                <FlexContainer
                  flexDirection="column"
                  pl="10px"
                  pr="10px"
                  pt="10px"
                  pb="10px"
                  overflow
                >
                  <Container
                    height="100px"
                    items="center"
                    justify="center"
                    overflow
                  >
                    <Image source={payment} resizeMode="contain" />
                  </Container>
                  <Container
                    height="30px"
                    items="center"
                    justify="center"
                    overflow
                  >
                    <Paragraph alignText="center" fontSize="18px" color="#fff">
                      Bills & utility
                    </Paragraph>
                  </Container>
                </FlexContainer>
              </Link>
            </Container>
            <Container height="150px" width="150px" borderRadius="10px">
              <Link onPress={() => navigation.navigate("setting")}>
                <FlexContainer
                  flexDirection="column"
                  pl="10px"
                  pr="10px"
                  pt="10px"
                  pb="10px"
                  overflow
                >
                  <Container
                    height="100px"
                    items="center"
                    justify="center"
                    overflow
                  >
                    <Image source={service} resizeMode="contain" />
                  </Container>
                  <Container
                    height="30px"
                    items="center"
                    justify="center"
                    overflow
                  >
                    <Paragraph alignText="center" fontSize="18px" color="#fff">
                      Service Request
                    </Paragraph>
                  </Container>
                </FlexContainer>
              </Link>
            </Container>
          </FlexContainer>
          <FlexContainer justify="space-between" mt="10px">
            <Container height="150px" width="150px" borderRadius="10px">
              <Link onPress={() => navigation.navigate("access-control")}>
                <FlexContainer
                  flexDirection="column"
                  pl="10px"
                  pr="10px"
                  pt="10px"
                  pb="10px"
                  overflow
                >
                  <Container
                    height="100px"
                    items="center"
                    justify="center"
                    overflow
                  >
                    <Image source={key} resizeMode="contain" />
                  </Container>
                  <Container
                    height="30px"
                    items="center"
                    justify="center"
                    overflow
                  >
                    <Paragraph alignText="center" fontSize="18px" color="#fff">
                      Access Control
                    </Paragraph>
                  </Container>
                </FlexContainer>
              </Link>
            </Container>
            <Container height="150px" width="150px" borderRadius="10px">
              <Link onPress={() => navigation.navigate("help-desk")}>
                <FlexContainer
                  flexDirection="column"
                  pl="10px"
                  pr="10px"
                  pt="10px"
                  pb="10px"
                  overflow
                >
                  <Container
                    height="100px"
                    items="center"
                    justify="center"
                    overflow
                  >
                    <Image source={payment} resizeMode="contain" />
                  </Container>
                  <Container
                    height="30px"
                    items="center"
                    justify="center"
                    overflow
                  >
                    <Paragraph alignText="center" fontSize="18px" color="#fff">
                      Help Desk
                    </Paragraph>
                  </Container>
                </FlexContainer>
              </Link>
            </Container>
          </FlexContainer>
        </Container>
      </Container>
    </Container>
  );
};

export default Dashboard;
