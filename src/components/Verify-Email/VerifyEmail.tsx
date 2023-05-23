import {
  ActivityIndicator,
  Dimensions,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import {
  Button,
  ButtonText,
  Container,
  Input,
  Paragraph,
} from "../../Styled-Components/styled-components";
import Icon from "../../Icons/Register-Email.png";
import logo from "../../Icons/logoWhite.png";

import { Colors } from "../../Colors/Colors";
import KeyboardAvoidingWrapper from "../Keyboard-Avoiding-View-wrapper/KeyboardAvoidingWrapper";
import { Formik } from "formik";
import { get } from "../../hooks/requests";
import { useDispatch, useSelector } from "react-redux";
import {
  selectEmail,
  setEmail,
  setResident,
} from "../../redux/slices/navslice";
import Toast from "react-native-toast-message";

const { primary } = Colors;

const statusBarHeight = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const h = statusBarHeight ? statusBarHeight : 0;

const height = Dimensions.get("window").height - h;
const width = Dimensions.get("window").width;

const VerifyEmail = ({ navigation }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [storedEmail, setStoredEmail] = useState("");
  AsyncStorage.getItem("email").then((email) => {
    if (email != null) {
      setStoredEmail(email);
    }
  });

  console.log(storedEmail);
  return (
    <KeyboardAvoidingWrapper>
      <Container flex={1} height={height + "px"} width={width + "px"}>
        <Container height="50px" mt="30px" mb="30px" items="center">
          <Image
            source={logo}
            style={{ width: 150, flex: 1, resizeMode: "contain" }}
          />
        </Container>
        <Container flex={1}>
          <Container flex={1} items="center">
            <Image
              source={Icon}
              style={{
                width: 300,
                height: 250,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                resizeMode: "contain",
              }}
            />
          </Container>
          <Container flex={1} mt="20px">
            <Paragraph
              color="#fff"
              mr="auto"
              ml="auto"
              mb="10px"
              fontSize="35px"
            >
              Verify
            </Paragraph>
            <Paragraph mr="auto" ml="auto" color="#fff">
              Please enter your registered email address
            </Paragraph>
            <Formik
              enableReinitialize={true}
              initialValues={{ email: storedEmail }}
              onSubmit={async (values) => {
                setIsLoading(true);
                try {
                  const res = await get(
                    "residents/search?email=" + values.email
                  );
                  console.log(res);
                  const { data, status } = res;
                  const { resident } = data;
                  console.log(resident);
                  if (status === 200) {
                    if (resident.activation_stage.toLowerCase() === "initial") {
                      AsyncStorage.setItem("email", values.email);
                      navigation.navigate("verify-passcode");
                    } else if (
                      resident.activation_stage.toLowerCase() === "activated" &&
                      resident.isPasswordReset === true
                    ) {
                      AsyncStorage.setItem("email", values.email);
                      navigation.navigate("verify-passcode");
                    } else if (
                      resident.activation_stage.toLowerCase() === "activated" &&
                      resident.isPasswordReset === false
                    ) {
                      AsyncStorage.setItem("email", values.email);
                      navigation.navigate("login");
                    } else {
                      console.log(resident.isPasswordReset);
                    }

                    setIsLoading(false);
                  } else {
                    setIsLoading(false);
                    Toast.show({
                      type: "error",
                      text1: "Something went wrong",
                      text2: "please check your email address and try again",
                    });
                  }
                } catch (err: any) {
                  setIsLoading(false);
                  if (err.response.status === 404) {
                    Toast.show({
                      type: "error",
                      text1: "No Resident Found",
                      text2: "Email not register, please check and try again.",
                    });
                  } else {
                    Toast.show({
                      type: "error",
                      text1: "Something went wrong",
                      text2: "please check your email address and try again",
                    });
                  }
                }
              }}
            >
              {({ handleSubmit, handleBlur, handleChange, values }) => (
                <Container px="20px" mt="25px" borderRadius="10px">
                  <Input
                    background="#fff"
                    mb="20px"
                    placeholder="Email address"
                    pl="20px"
                    borderRadius="10px"
                    defaultValue={storedEmail}
                    onBlur={handleBlur("email")}
                    onChangeText={handleChange("email")}
                  />
                  <Button background="#fff" onPress={handleSubmit}>
                    {isLoading ? (
                      <ActivityIndicator color={primary} />
                    ) : (
                      <ButtonText color={primary}>Next</ButtonText>
                    )}
                  </Button>
                </Container>
              )}
            </Formik>
          </Container>
        </Container>
      </Container>
    </KeyboardAvoidingWrapper>
  );
};

export default VerifyEmail;
