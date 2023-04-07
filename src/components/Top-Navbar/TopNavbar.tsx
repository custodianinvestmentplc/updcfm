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
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const statusBarHeight = Platform.OS === "ios" ? 20 : 0;
  const navigation = useNavigation();
  return (
    <>
      <Container mt={statusBarHeight} height='50' background='#fff'>
        <FlexContainer justify='space-between'>
          <Container height='50px' width='150px' background='transparent'>
            <Image
              source={logo}
              style={{ width: 100, height: 50 }}
              resizeMode='contain'
            />
          </Container>

          <Container
            height='50px'
            width='150px'
            items='flex-end'
            justify='flex-end'
            background='transparent'
          >
            <FlexContainer>
              <Container
                height='50px'
                width='50px'
                items='center'
                justify='center'
                background='transparent'
              >
                <Ionicons name='ios-notifications' size={20} />
              </Container>
              <Link
                onPress={() => {
                  setIsOpen(!isOpen);
                  console.log(isOpen);
                }}
              >
                <Container
                  height='50px'
                  width='50px'
                  items='center'
                  justify='center'
                  background='transparent'
                >
                  <Feather name='align-right' size={20} />
                </Container>
              </Link>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
      {isOpen ? (
        <Touchable
          height='100%'
          width='100%'
          background='transparent'
          position='absolute'
          top='0'
          right='0'
          z={100}
          onPress={() => {
            setIsOpen(false);
          }}
        >
          <Position position='absolute' top='60px' right='20px'>
            <Container
              height='100'
              width='150'
              background='#D9D9D9'
              borderRadius='10'
              px='10'
              py='5'
            >
              <FlexContainer flexDirection='column' overflow justify='center'>
                <Link>
                  <Container
                    height='40'
                    width='130'
                    justify='center'
                    background='transparent'
                  >
                    <Paragraph color='#000'>Settings</Paragraph>
                  </Container>
                </Link>
                <Link
                  onPress={async () => {
                    setIsOpen(false);
                    await AsyncStorage.removeItem("userData");
                    navigation.navigate("verify-email");
                  }}
                >
                  <Container
                    height='40'
                    width='130'
                    justify='center'
                    background='transparent'
                  >
                    <Paragraph color='#000'>Logout</Paragraph>
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
