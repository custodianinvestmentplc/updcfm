import { View, Text, Platform } from "react-native";
import React from "react";
import KeyboardAvoidingWrapper from "../../components/keyboard/KeyboardAvoidingWrapper";
import {
  ButtonText,
  CenterContent,
  Container,
  FullButton,
  Input,
  InputContainer,
  InputIcon,
  Link,
  LinkContainer,
  Paragraph,
} from "../../styles/styles";
import { GetStartedImage } from "../profile-activation/screens/get-started/getstarted.style";
import Colors from "../../components/Colors";

import image from "../../images/Houses-pana.png";
import { Formik } from "formik";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { loginSchema } from "../../validators/form.validate";
import { Toast } from "react-native-toast-message/lib/src/Toast";
const { primary } = Colors;
const Login = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingWrapper>
      <>
        <GetStartedImage source={image} reSizeMode="cover" height="400" />
        <Container mt="-75">
          <Paragraph size="40" color="#fff" fontFamily="PoppinsBold">
            Welcome Back
          </Paragraph>
          <Paragraph size="18" color={primary} mt="-5" font="600">
            Login to your account
          </Paragraph>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values) => {
              await loginSchema
                .validate(values)
                .then((valid) => {
                  console.log(values);
                  navigation.navigate("dashboard");
                })
                .catch((err) => {
                  Toast.show({
                    type: "error",
                    text1: "Validation Error",
                    text2: err.message,
                  });
                });
            }}
          >
            {({ handleBlur, handleChange, handleSubmit, values }) => (
              <>
                <InputContainer>
                  <InputIcon>
                    <Icon name="email" color="#9A9595" />
                  </InputIcon>
                  <Input
                    background="#fff"
                    placeholder="Email"
                    onBlur={handleBlur("email")}
                    onChangeText={handleChange("email")}
                  />
                </InputContainer>
                <InputContainer>
                  <InputIcon>
                    <Icon name="lock" color="#9A9595" />
                  </InputIcon>
                  <Input
                    secureTextEntry={true}
                    background="#fff"
                    placeholder="Password"
                    onBlur={handleBlur("password")}
                    onChangeText={handleChange("password")}
                  />
                </InputContainer>
                <LinkContainer>
                  <Link>
                    <Paragraph color={primary}>Forget Password?</Paragraph>
                  </Link>
                </LinkContainer>
                <FullButton onPress={handleSubmit}>
                  <CenterContent>
                    <ButtonText>Login</ButtonText>
                  </CenterContent>
                </FullButton>
              </>
            )}
          </Formik>
        </Container>
      </>
    </KeyboardAvoidingWrapper>
  );
};

export default Login;
