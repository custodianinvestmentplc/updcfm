import { View, Text, Platform } from 'react-native';
import React from 'react';
import KeyboardAvoidingWrapper from '../../components/keyboard/KeyboardAvoidingWrapper';
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
} from '../../styles/styles';
import { GetStartedImage } from '../profile-activation/screens/get-started/getstarted.style';
import Colors from '../../components/Colors';

import image from '../../images/Houses-pana.png';
import { Formik } from 'formik';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { loginSchema } from '../../validators/form.validate';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { emailVerification } from '../../hooks/profileActivation.hook';
const { primary } = Colors;

let userEmail = '';
let userPassword = '';

AsyncStorage.getItem('@userEmail').then((email) => {
  userEmail = email;
});

AsyncStorage.getItem('@userPassword').then((password) => {
  userPassword = password;
});

const Login = ({ route }) => {
  let logOutPassword = route.params && route.params.password;
  if (route.params != undefined) {
    console.log(route);
    logOutPassword = route.params.password;
  }
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingWrapper>
      <>
        <GetStartedImage source={image} reSizeMode='cover' height='400' />
        <Container mt='-35'>
          <Paragraph size='40' color='#fff' fontFamily='PoppinsBold'>
            Welcome Back
          </Paragraph>
          <Paragraph size='18' color={primary} mt='-5' font='600'>
            Login to your account
          </Paragraph>
          <Formik
            initialValues={{
              email: userEmail,
              password: '',
            }}
            onSubmit={async (values) => {
              await loginSchema
                .validate(values)
                .then(async (valid) => {
                  const validUser = await emailVerification(values.email);
                  if (
                    values.email === userEmail &&
                    values.password === userPassword
                  ) {
                    navigation.navigate('dashboard');
                  } else {
                    Toast.show({
                      type: 'error',
                      text1: 'Validation Error',
                      text2: 'Something went wrong, try again.',
                    });
                  }
                })
                .catch((err) => {
                  Toast.show({
                    type: 'error',
                    text1: 'Validation Error',
                    text2: err.message,
                  });
                });
            }}
          >
            {({ handleBlur, handleChange, handleSubmit, values }) => (
              <>
                <InputContainer>
                  <InputIcon>
                    <Icon name='email' color='#9A9595' />
                  </InputIcon>
                  <Input
                    background='#fff'
                    placeholder='Email'
                    value={values.email}
                    onChangeText={handleChange('email')}
                  />
                </InputContainer>
                <InputContainer>
                  <InputIcon>
                    <Icon name='lock' color='#9A9595' />
                  </InputIcon>
                  <Input
                    secureTextEntry={true}
                    background='#fff'
                    placeholder='Password'
                    defaultValue={route.params && route.params.password}
                    onBlur={handleBlur('password')}
                    onChangeText={handleChange('password')}
                  />
                </InputContainer>
                <LinkContainer>
                  <Link>
                    <Paragraph size='18' color={primary}>
                      Forget Password?
                    </Paragraph>
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
