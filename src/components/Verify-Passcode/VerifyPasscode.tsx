import { Formik } from "formik";
import { useRef, useState } from "react";
// import { useSelector } from "react-redux";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  Button,
  ButtonText,
  Container,
  FlexContainer,
  Input,
  Paragraph,
  Position,
} from "../../Styled-Components/styled-components";

import Icon from "../../Icons/Privacy-policy-rafiki.png";
import logo from "../../Icons/logoWhite.png";

import { Colors } from "../../Colors/Colors";
import KeyboardAvoidingWrapper from "../Keyboard-Avoiding-View-wrapper/KeyboardAvoidingWrapper";
import { useSelector } from "react-redux";
import { selectResident } from "../../redux/slices/navslice";
import Toast from "react-native-toast-message";
import { stringToBase32 } from "../../lib/Converter/converter";
import { handleActivationPin } from "../../hooks/requests";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { primary } = Colors;

const statusBarHeight = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const h = statusBarHeight ? statusBarHeight : 0;

const height = Dimensions.get("window").height - h;
const width = Dimensions.get("window").width;

const VerifyPasscode = ({ navigation }: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const firstTextInputRef = useRef<any>(null);
  const secondTextInputRef = useRef<any>(null);
  const thirdTextInputRef = useRef<any>(null);
  const fourthTextInputRef = useRef<any>(null);
  const fifthTextInputRef = useRef<any>(null);

  return (
    <KeyboardAvoidingWrapper>
      <Container
        flex={1}
        width={width + "px"}
        background={primary}
        height={height + "px"}
      >
        <Position position='absolute' z='10'>
          <Container
            flex={1}
            height='50px'
            mt='30px'
            ml='auto'
            mr='auto'
            items='center'
            jsutify='center'
            background='transparent'
            width={width}
          >
            <Image
              source={logo}
              style={{ width: 150, flex: 1, resizeMode: "contain" }}
            />
          </Container>
        </Position>
        <Container flex={1} background={primary}>
          <Container flex={1} items='center'>
            <Image
              source={Icon}
              style={{
                width: 400,
                height: 350,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                resizeMode: "contain",
              }}
            />
          </Container>
          <Container flex={1} mt='20px'>
            <Paragraph
              color='#fff'
              mr='auto'
              ml='auto'
              mb='10px'
              fontSize='35px'
            >
              Verify
            </Paragraph>
            <Paragraph mr='auto' ml='auto' color='#fff'>
              Please enter 5 digit code given to you by management
            </Paragraph>
            <Formik
              initialValues={{
                passOne: "",
                passTwo: "",
                passThree: "",
                passFour: "",
                passFive: "",
              }}
              onSubmit={async (values) => {
                setIsLoading(true);
                let passcode =
                  values.passOne +
                  values.passTwo +
                  values.passThree +
                  values.passFour +
                  values.passFive;
                // navigation.navigate("create-password");

                try {
                  const email: any = await AsyncStorage.getItem("email");
                  const pin = stringToBase32(passcode);

                  console.log(email);

                  const res = await handleActivationPin(
                    "residents/auth",
                    email,
                    pin
                  );
                  if (res.status === 200) {
                    navigation.navigate("create-password");
                  }
                  setIsLoading(false);
                } catch (err: any) {
                  setIsLoading(false);
                  console.log(err.response.status);
                  if (err.response.status === 400) {
                    Toast.show({
                      type: "error",
                      text1: "Invalid Activation Pin",
                      text2:
                        "If this error persist please contact your administrator.",
                    });
                  } else {
                    if (err.response.status === 404) {
                      Toast.show({
                        type: "error",
                        text1: "No Resident Found",
                        text2:
                          "Email not register, please check and try again.",
                      });
                    } else {
                      Toast.show({
                        type: "error",
                        text1: "Something went wrong",
                      });
                    }
                  }
                }
              }}
            >
              {({ handleBlur, handleChange, handleSubmit, values }) => (
                <Container flex={1} px='20px' mt='25px'>
                  <FlexContainer items='center' justify='center'>
                    <Input
                      secureTextEntry={true}
                      fontSize='30px'
                      background='#fff'
                      align='center'
                      mb='20px'
                      mr='10px'
                      pl='auto'
                      width='50px'
                      height='60px'
                      borderRadius='10px'
                      keyboardType={"numeric"}
                      maxLength={1}
                      onBlur={handleBlur("passOne")}
                      returnKeyType={"next"}
                      ref={(ref: any) => (firstTextInputRef.current = ref)}
                      onChangeText={(value: any) => {
                        values.passOne = value;
                        // console.log(value, values);
                        if (value.length == 1) {
                          secondTextInputRef.current?.focus();
                        }
                      }}
                    />
                    <Input
                      secureTextEntry={true}
                      fontSize='30px'
                      background='#fff'
                      align='center'
                      mb='20px'
                      mr='10px'
                      ml='10px'
                      pl='auto'
                      width='50px'
                      height='60px'
                      borderRadius='10px'
                      keyboardType={"numeric"}
                      maxLength={1}
                      onBlur={handleBlur("passTwo")}
                      returnKeyType={"next"}
                      ref={(ref: any) => (secondTextInputRef.current = ref)}
                      onChangeText={(value: any) => {
                        values.passTwo = value;
                        if (value.length === 1) {
                          thirdTextInputRef.current?.focus();
                        }
                        if (value.length < 1) {
                          firstTextInputRef.current?.focus();
                        }
                        handleChange("passTwo");
                      }}
                    />
                    <Input
                      secureTextEntry={true}
                      fontSize='30px'
                      background='#fff'
                      align='center'
                      mb='20px'
                      mr='10px'
                      ml='10px'
                      pl='auto'
                      width='50px'
                      height='60px'
                      borderRadius='10px'
                      keyboardType={"numeric"}
                      maxLength={1}
                      onBlur={handleBlur("passThree")}
                      returnKeyType={"next"}
                      ref={(ref: any) => (thirdTextInputRef.current = ref)}
                      onChangeText={(value: any) => {
                        values.passThree = value;
                        console.log(value, values);
                        if (value.length === 1) {
                          fourthTextInputRef.current?.focus();
                        }
                        if (value.length < 1) {
                          secondTextInputRef.current?.focus();
                        }
                        handleChange("passThree");
                      }}
                    />
                    <Input
                      secureTextEntry={true}
                      fontSize='30px'
                      background='#fff'
                      align='center'
                      mb='20px'
                      mr='10px'
                      ml='10px'
                      pl='auto'
                      width='50px'
                      height='60px'
                      borderRadius='10px'
                      keyboardType={"numeric"}
                      maxLength={1}
                      onBlur={handleBlur("passFour")}
                      returnKeyType={"next"}
                      ref={(ref: any) => (fourthTextInputRef.current = ref)}
                      onChangeText={(value: any) => {
                        values.passFour = value;
                        if (value.length == 1) {
                          fifthTextInputRef.current?.focus();
                        }
                        if (value.length < 1) {
                          thirdTextInputRef.current?.focus();
                        }
                        handleChange("passFour");
                      }}
                    />
                    <Input
                      secureTextEntry={true}
                      fontSize='30px'
                      background='#fff'
                      align='center'
                      mb='20px'
                      ml='10px'
                      pl='auto'
                      width='50px'
                      height='60px'
                      borderRadius='10px'
                      keyboardType={"numeric"}
                      maxLength={1}
                      onBlur={handleBlur("passFive")}
                      returnKeyType={"next"}
                      ref={(ref: any) => (fifthTextInputRef.current = ref)}
                      onChangeText={(value: any) => {
                        values.passFive = value;

                        if (value.length < 1) {
                          fourthTextInputRef.current?.focus();
                        }
                        handleChange("passFive");
                      }}
                    />
                  </FlexContainer>
                  <Button background='#fff' onPress={handleSubmit}>
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

export default VerifyPasscode;
