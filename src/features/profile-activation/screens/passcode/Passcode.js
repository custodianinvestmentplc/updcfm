import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import React, { useRef, useState } from 'react';
import {
  Background,
  ButtonText,
  CenterContent,
  Container,
  FullButton,
  FullDisableButton,
  FullScreenContainer,
  HalfScreenContainer,
  Input,
  InputContainer,
  Logo,
  LogoContainer,
  Paragraph,
} from '../../../../styles/styles';
import { GetStartedImage } from '../get-started/getstarted.style';
import { VerifyEmailContainer } from '../verify-email/verifyEmail.style';
import { Formik } from 'formik';
import Colors from '../../../../components/Colors';

import logo from '../../../../images/logos/logoWhite.png';
import image from '../../../../images/get-started/Privacy-policy-rafiki.png';
import { PasscodeInput, PasscodeInputContainer } from './passcode.style';
import KeyboardAvoidingWrapper from '../../../../components/keyboard/KeyboardAvoidingWrapper';
import { useNavigation } from '@react-navigation/native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { passcodeSchema } from '../../../../validators/form.validate';
import axios from 'axios';

const { primary } = Colors;
const Passcode = ({ route }) => {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);

  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);
  const fifthTextInputRef = useRef(null);

  const { passcode } = route.params;
  console.log(passcode);
  return (
    <Background>
      <KeyboardAvoidingWrapper>
        <>
          {Platform.OS === 'ios' ? (
            <LogoContainer mb='-26'>
              <CenterContent>
                <Logo source={logo} />
              </CenterContent>
            </LogoContainer>
          ) : (
            <LogoContainer mt='35' mb='-60'>
              <CenterContent>
                <Logo source={logo} />
              </CenterContent>
            </LogoContainer>
          )}
          <GetStartedImage source={image} resizeMode='cover' height='350' />
          <View style={{ flex: 1 }}>
            <VerifyEmailContainer>
              <CenterContent>
                <Paragraph size='30' color='#fff' font='700'>
                  Verify
                </Paragraph>
                <Paragraph size='16' color='#fff' align='center'>
                  Please enter 5 digit code given to you by management
                </Paragraph>
              </CenterContent>
            </VerifyEmailContainer>
            <Formik
              initialValues={{
                pinOne: '',
                pinTwo: '',
                pinThree: '',
                pinFour: '',
                pinFive: '',
              }}
              onSubmit={async (values) => {
                let code =
                  values.pinOne +
                  values.pinTwo +
                  values.pinThree +
                  values.pinFour +
                  values.pinFive;
                  setIsLoading(true);
                await passcodeSchema
                  .validate({ passcode: code })
                  .then((valid) => {
                    console.log(valid);
                    if (valid.passcode === passcode) {
                      navigation.navigate('create-password');
                      setIsLoading(false);
                    } else {
                      Toast.show({
                        type: 'error',
                        text1: 'Validation Error',
                        text2:
                          'Invalid activation pin, try again or contact administrator.',
                      });
                      setIsLoading(false);
                    }
                  })
                  .catch((err) => {
                    Toast.show({
                      type: 'error',
                      text1: 'Validation Error',
                      text2: err.message,
                    });
                    setIsLoading(false);
                  });
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <>
                  <PasscodeInputContainer mb='30' mt='20'>
                    <PasscodeInput
                      background='#000'
                      keyboardType='numeric'
                      secureTextEntry={true}
                      returnKeyType={'next'}
                      ref={(ref) => (firstTextInputRef.current = ref)}
                      maxLength={1}
                      onBlur={handleBlur('pinOne')}
                      defaultValue={values.pinOne}
                      onChangeText={(value) => {
                        values.pinOne = value;
                        console.log(value, values);
                        if (value.length == 1) {
                          secondTextInputRef.current?.focus();
                        }
                      }}
                    />
                    <PasscodeInput
                      background='#000'
                      keyboardType='numeric'
                      maxLength={1}
                      secureTextEntry={true}
                      returnKeyType={'next'}
                      ref={(ref) => (secondTextInputRef.current = ref)}
                      onBlur={handleBlur('pinTwo')}
                      defaultValue={values.pinTwo}
                      onChangeText={(value) => {
                        values.pinTwo = value;
                        if (value.length == 1) {
                          thirdTextInputRef.current?.focus();
                        }
                        if (value.length < 1) {
                          firstTextInputRef.current?.focus();
                        }
                        handleChange('pinTwo');
                      }}
                    />
                    <PasscodeInput
                      background='#000'
                      keyboardType='numeric'
                      maxLength={1}
                      secureTextEntry={true}
                      returnKeyType={'next'}
                      ref={(ref) => (thirdTextInputRef.current = ref)}
                      onBlur={handleBlur('pinThree')}
                      defaultValue={values.pinThree}
                      onChangeText={(value) => {
                        values.pinThree = value;
                        if (value.length == 1) {
                          fourthTextInputRef.current?.focus();
                        }
                        if (value.length < 1 || value == '') {
                          secondTextInputRef.current?.focus();
                        }
                        handleChange('pinThree');
                      }}
                    />
                    <PasscodeInput
                      background='#000'
                      keyboardType='numeric'
                      maxLength={1}
                      secureTextEntry={true}
                      returnKeyType={'next'}
                      ref={(ref) => (fourthTextInputRef.current = ref)}
                      onBlur={handleBlur('pinFour')}
                      defaultValue={values.pinFour}
                      onChangeText={(value) => {
                        values.pinFour = value;
                        console.log(values);
                        if (value.length == 1) {
                          fifthTextInputRef.current?.focus();
                        }
                        if (value.length < 1 && value == '') {
                          thirdTextInputRef.current?.focus();
                        }
                        handleChange('pinFour');
                      }}
                    />
                    <PasscodeInput
                      background='#000'
                      keyboardType='numeric'
                      maxLength={1}
                      editabel={false}
                      secureTextEntry={true}
                      returnKeyType={'next'}
                      ref={(ref) => (fifthTextInputRef.current = ref)}
                      onBlur={handleBlur('pinFive')}
                      defaultValue={values.pinFive}
                      onChangeText={(value) => {
                        values.pinFive = value;
                        if (value.length == 1) {
                          Keyboard.dismiss;
                        }
                        if (value.length < 1 || value == '') {
                          fourthTextInputRef.current?.focus();
                        }
                        handleChange('pinFive');
                      }}
                    />
                  </PasscodeInputContainer>
                  <Container>
                    {isLoading?(
                      <FullDisableButton>
                        <CenterContent>
                          <ActivityIndicator />
                        </CenterContent>
                      </FullDisableButton>
                    ):(
                      
                      <FullButton onPress={handleSubmit} background='#fff'>
                        <CenterContent>
                          <ButtonText color={primary}>Done</ButtonText>
                        </CenterContent>
                      </FullButton>
                    )}
                  </Container>
                </>
              )}
            </Formik>
          </View>
        </>
      </KeyboardAvoidingWrapper>
    </Background>
  );
};

export default Passcode;
