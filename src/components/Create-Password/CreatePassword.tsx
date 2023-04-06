import { ActivityIndicator, Dimensions, Image } from "react-native";
import { Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Octicons } from "@expo/vector-icons";
import {
  Button,
  ButtonText,
  Container,
  FlexContainer,
  Input,
  Paragraph,
} from "../../Styled-Components/styled-components";

import Icon from "../../Icons/Fingerprint-pana.png";

import { Colors } from "../../Colors/Colors";
import KeyboardAvoidingWrapper from "../Keyboard-Avoiding-View-wrapper/KeyboardAvoidingWrapper";
import { selectResident, setResident } from "../../redux/slices/navslice";
import { stringToBase32 } from "../../lib/Converter/converter";
import { handleCreatePassword } from "../../hooks/requests";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { primary } = Colors;

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const CreatePassword = ({ navigation }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const resident = useSelector(selectResident);
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingWrapper>
      <Container
        flex={1}
        height={height + "px"}
        width={width + "px"}
        background='#fff'
      >
        <Container flex={1} background='#fff'>
          <Container flex={1} items='center' background='#fff'>
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
          </Container>
          <Container flex={1} background='#fff' pl='10px' pr='10px' pt='10px'>
            <Paragraph fontSize='30' color={primary} mb='10'>
              Create Password
            </Paragraph>
            <Formik
              initialValues={{ password: "", confirmPassword: "" }}
              onSubmit={async (values) => {
                setIsLoading(true);
                const email: any = await AsyncStorage.getItem("email");

                // navigation.navigate("login");

                if (values.password === values.confirmPassword) {
                  let password = stringToBase32(values.password);

                  const res = await handleCreatePassword(
                    "residents/create-password",
                    email,
                    password
                  );

                  if (res.activation_stage.toLowerCase() === "activated") {
                    dispatch(setResident(res));
                    navigation.navigate("login");
                    Toast.show({
                      type: "success",
                      text1: "Profile setup successfull.",
                      text2: "Kindly login with your credentials.",
                      visibilityTime: 5000,
                    });
                  }
                } else {
                  setIsLoading(false);
                  Toast.show({
                    type: "error",
                    text1: "Password doesn'nt match",
                  });
                }
              }}
            >
              {({ handleBlur, handleChange, handleSubmit, values }) => (
                <Container flex={1} background='#fff'>
                  <Container
                    height='50px'
                    mb='20px'
                    background='red'
                    brtl='10px'
                    brbl='10px'
                    brtr='10px'
                    brbr='10px'
                    pl='0'
                    pr='50px'
                    shadow
                  >
                    <FlexContainer>
                      <Container
                        width='50px'
                        height='50px'
                        background='#fff'
                        brtl='10px'
                        brbl='10px'
                        items='center'
                        justify='center'
                      >
                        <Octicons name='lock' size={15} color='#9c9c9c' />
                      </Container>
                      <Input
                        secureTextEntry={true}
                        background='#fff'
                        placeholder='Password'
                        pl='10px'
                        brtr='10px'
                        brbr='10px'
                        onBlur={handleBlur("password")}
                        onChangeText={handleChange("password")}
                      />
                    </FlexContainer>
                  </Container>
                  <Container
                    height='50px'
                    mb='20px'
                    background='#fff'
                    brtl='10px'
                    brbl='10px'
                    brtr='10px'
                    brbr='10px'
                    pl='0'
                    pr='50px'
                    shadow
                  >
                    <FlexContainer>
                      <Container
                        width='50px'
                        height='50px'
                        background='#fff'
                        brtl='10px'
                        brbl='10px'
                        items='center'
                        justify='center'
                      >
                        <Octicons name='lock' size={15} color='#9c9c9c' />
                      </Container>
                      <Input
                        secureTextEntry={true}
                        background='#fff'
                        placeholder='Confirm password'
                        pl='10px'
                        brtr='10px'
                        brbr='10px'
                        onBlur={handleBlur("confirmPassword")}
                        onChangeText={handleChange("confirmPassword")}
                      />
                    </FlexContainer>
                  </Container>
                  <Button onPress={handleSubmit}>
                    {isLoading ? (
                      <ActivityIndicator color='#fff' />
                    ) : (
                      <ButtonText>Create Password</ButtonText>
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

export default CreatePassword;
