import { View, Platform, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import {
  Background,
  ButtonText,
  CenterContent,
  Container,
  FullButton,
  FullDisableButton,
  Input,
  InputContainer,
  Logo,
  LogoContainer,
  Paragraph,
} from "../../../../styles/styles";
import Colors from "../../../../components/Colors";
import { GetStartedImage } from "../get-started/getstarted.style";

import logo from "../../../../images/logos/logoWhite.png";
import image from "../../../../images/get-started/Register-Email.png";
import { VerifyEmailContainer } from "./verifyEmail.style";
import { Formik } from "formik";
import KeyboardAvoidingWrapper from "../../../../components/keyboard/KeyboardAvoidingWrapper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "react-native-toast-message/lib/src/Toast";

import { emailValidate } from "../../../../validators/emailValidator";
import { emailVerification } from "../../../../hooks/profileActivation.hook";
import { emailSchema } from "../../../../validators/form.validate";
import axios from "axios";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setResident } from "../../../../lib/redux/slices/navSlice";

const { primary } = Colors;

const VerifyEmail = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const get = async () => {
    const value = await AsyncStorage.getItem("@userEmail");
    const session = await AsyncStorage.getItem("@session");

    if (session !== null) {
      console.log(session);
      navigation.navigate("home");
    } else {
      console.log("session");
    }

    if (value !== null) {
      setEmail(value);
    }
  };

  useEffect(() => {
    get();
  }, []);

  const dispatch = useDispatch();
  return (
    <Background>
      <KeyboardAvoidingWrapper>
        <>
          {Platform.OS === "ios" ? (
            <LogoContainer mb="15">
              <CenterContent>
                <Logo source={logo} />
              </CenterContent>
            </LogoContainer>
          ) : (
            <LogoContainer mt="35" mb="15">
              <CenterContent>
                <Logo source={logo} />
              </CenterContent>
            </LogoContainer>
          )}
          <GetStartedImage source={image} resizeMode="cover" height="300" />
          <View>
            <VerifyEmailContainer>
              <CenterContent>
                <Paragraph size="30" color="#fff" mt="30">
                  Verify
                </Paragraph>
                <Paragraph size="16" color="#fff">
                  Please enter your registered email address
                </Paragraph>
              </CenterContent>
            </VerifyEmailContainer>
            <Formik
              initialValues={{ email }}
              onSubmit={async (values) => {
                await emailSchema
                  .validate(values)
                  .then(async () => {
                    setIsLoading(true);
                    const validUser = await emailVerification(values.email);
                    console.log(validUser);

                    if (!validUser) {
                      Toast.show({
                        type: "error",
                        text1: "Validation Error",
                        text2: "Email not registered",
                      });
                      setIsLoading(false)
                    } else if (
                      validUser &&
                      validUser.activation_stage.toLowerCase() === "initial"
                    ) {
                      AsyncStorage.setItem(
                        "@userEmail",
                        validUser.contacts[0].value
                      );

                      dispatch(setResident(validUser));

                      navigation.navigate("verify-passcode", {
                        passcode: validUser.activation_pin,
                      });
                      setIsLoading(false)
                    } else if (
                      validUser &&
                      validUser.activation_stage.toLowerCase() === "activated"
                    ) {
                      dispatch(setResident(validUser));
                      navigation.navigate("login");
                      setIsLoading(false);
                      // navigation.navigate('login');
                    } else {
                      Toast.show({
                        type: "error",
                        text1: "Validation Error",
                        text2: "Email not registered",
                      });
                      setIsLoading(false)
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                    Toast.show({
                      type: "error",
                      text1: "Validation Error",
                      text2: err.message,
                    });
                    setIsLoading(false)
                  });
              }}
            >
              {({
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
                values,
              }) => (
                <Container>
                  <Container>
                    <InputContainer mb="20">
                      <Input
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                        background="#fff"
                        placeholder="Email address"
                      />
                    </InputContainer>
                    {errors.email && touched.email
                      ? Toast.show({
                          type: "error",
                          text1: "Error Message",
                          text2: errors.email,
                        })
                      : null}
                      {isLoading ? (
                        <FullDisableButton background="#fff">
                        <CenterContent>
                          <ActivityIndicator />
                        </CenterContent>
                      </FullDisableButton>
                      ):(
                    <FullButton onPress={handleSubmit} background="#fff">
                      <CenterContent>
                        <ButtonText color={primary}>Next</ButtonText>
                      </CenterContent>
                    </FullButton>
                      )}
                  </Container>
                </Container>
              )}
            </Formik>
          </View>
        </>
      </KeyboardAvoidingWrapper>
    </Background>
  );
};

export default VerifyEmail;
