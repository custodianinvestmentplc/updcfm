import {
  ActivityIndicator,
  Dimensions,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import { Fontisto, Octicons, AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

import {
  Button,
  ButtonText,
  Container,
  DisableButton,
  FlexContainer,
  Input,
  Link,
  Paragraph,
  Position,
} from "../../Styled-Components/styled-components";
import KeyboardAvoidingWrapper from "../Keyboard-Avoiding-View-wrapper/KeyboardAvoidingWrapper";
import Icon from "../../Icons/Houses-pana.png";
import { Colors } from "../../Colors/Colors";
import { setResident } from "../../redux/slices/navslice";
import { stringToBase32 } from "../../lib/Converter/converter";
import { handleForgetPassword, handleLogin } from "../../hooks/requests";
import Toast from "react-native-toast-message";
import { getEmail } from "../../hooks/async-storage-request";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { primary } = Colors;

const statusBarHeight = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const h = statusBarHeight ? statusBarHeight : 0;

const height = Dimensions.get("window").height - h;
const width = Dimensions.get("window").width;

const ForgetPassword = ({ navigation }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [storedEmail, setStoredEmail] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem("email").then((email: any) => {
      console.log("useEffect email: " + email);
      setStoredEmail(email);
    });
  }, [storedEmail]);
  return (
    <KeyboardAvoidingWrapper>
      <Container height={height} background="#fff">
        <Container flex={1} items="center" background="#fff">
          <Image
            source={Icon}
            style={{
              width: 400,
              height: 400,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              resizeMode: "cover",
            }}
          />
          <Position position="absolute" top="20px" left="10px">
            <Link
              onPress={() => {
                navigation.navigate("login");
              }}
            >
              <Container
                height="50"
                width="50"
                background="#fff"
                borderRadius="50"
                shadow
                items="center"
                justify="center"
              >
                <AntDesign name="left" size={20} />
              </Container>
            </Link>
          </Position>
        </Container>
        <Container flex={1} pl="10px" pr="10px" background="#fff">
          <Container mt="-40px" background="transparent">
            <Paragraph fontSize="40px" color="#fff">
              Forget Password
            </Paragraph>
            <Paragraph fontSize="20px" color={primary}>
              Enter your email address
            </Paragraph>
            <Formik
              enableReinitialize={true}
              initialValues={{ email: storedEmail }}
              onSubmit={async (values) => {
                setIsLoading(true);
                try {
                  if (values.email != "") {
                    const res = await handleForgetPassword(
                      "residents/forget-password",
                      values.email
                    );
                    console.log("first");
                    const { statusCode, data } = res;

                    if (statusCode === 200) {
                      setIsLoading(false);
                      Toast.show({
                        type: "success",
                        text1: data,
                      });
                      navigation.navigate("verify-email");
                    } else {
                      setIsLoading(false);
                      Toast.show({
                        type: "error",
                        text1: data,
                      });
                    }
                  } else {
                    setIsLoading(false);
                    Toast.show({
                      type: "error",
                      text1: "Invalid Input",
                    });
                  }
                } catch (error) {
                  setIsLoading(false);
                  Toast.show({
                    type: "error",
                    text1: "Invalid credentials",
                    text2: "Check your email and password, try again.",
                  });
                }
              }}
            >
              {({ handleBlur, handleChange, handleSubmit, values }) => (
                <Container mt="20px" background="transparent" height="100%">
                  <Container
                    height="50px"
                    mb="20px"
                    background="red"
                    brtl="10px"
                    brbl="10px"
                    brtr="10px"
                    brbr="10px"
                    pl="0"
                    pr="50px"
                    shadow
                  >
                    <FlexContainer>
                      <Container
                        height="50px"
                        width="50px"
                        background="#fff"
                        brbl="10px"
                        brtl="10px"
                        items="center"
                        justify="center"
                      >
                        <Fontisto name="email" color="#9c9c9c" size={20} />
                      </Container>
                      <Input
                        onBlur={handleBlur("email")}
                        onChangeText={handleChange("email")}
                        background="#fff"
                        pl="10px"
                        brbr="10px"
                        brtr="10px"
                        placeholder="johndoe@example.com"
                        defaultValue={values.email}
                        value={values.email}
                        // value={values.email && storedEmail}
                      />
                    </FlexContainer>
                  </Container>
                  <Position position="absolute" bottom="30px" width="100%">
                    {isLoading ? (
                      <DisableButton>
                        <ActivityIndicator color="#fff" />
                      </DisableButton>
                    ) : (
                      <Button onPress={handleSubmit}>
                        <ButtonText>Submit</ButtonText>
                      </Button>
                    )}
                  </Position>
                </Container>
              )}
            </Formik>
          </Container>
        </Container>
      </Container>
    </KeyboardAvoidingWrapper>
  );
};

export default ForgetPassword;
