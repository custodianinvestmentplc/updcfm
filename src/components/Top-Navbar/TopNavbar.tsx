import { Image, Platform, StatusBar } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import {
  Container,
  FlexContainer,
  Link,
  Paragraph,
  Position,
} from "../../Styled-Components/styled-components";
import logo from "../../Icons/logo.png";
import { useState } from "react";

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const statusBarHeight = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
  return (
    <>
      <Container
        mt={Platform.OS === "ios" ? 0 : statusBarHeight}
        height='50'
        background='#fff'
      >
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
        <Position position='absolute' top='80px' right='20px' z={100}>
          <Container
            height='100'
            width='150'
            background='#D9D9D9'
            borderRadius='10'
            px='10'
            py='5'
          >
            <FlexContainer
              flexDirection='column'
              overflow
              justify='space-between'
            >
              <Link>
                <Container height='40'>
                  <Paragraph color='#fff'>Top Navbar</Paragraph>
                </Container>
              </Link>
              <Link>
                <Container height='40'>
                  <Paragraph color='#fff'>Top Navbar</Paragraph>
                </Container>
              </Link>
            </FlexContainer>
          </Container>
        </Position>
      ) : null}
    </>
  );
};

export default TopNavbar;
