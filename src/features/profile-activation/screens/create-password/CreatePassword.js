import React from 'react';
import KeyboardAvoidingWrapper from '../../../../components/keyboard/KeyboardAvoidingWrapper';
import {
  ButtonText,
  CenterContent,
  Container,
  FullButton,
  FullScreenContainer,
  HalfScreenContainer,
  Input,
  InputContainer,
  Paragraph,
} from '../../../../styles/styles';

import image from '../../../../images/get-started/Fingerprint-pana.png';
import { GetStartedImage } from '../get-started/getstarted.style';
import Colors from '../../../../components/Colors';
import { Form, Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { passwordSchema } from '../../../../validators/form.validate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { residentCreatePassword } from '../../../../hooks/profileActivation.hook';
import { useDispatch, useSelector } from 'react-redux';
import { selectResident } from '../../../../lib/redux/slices/navSlice';

const { primary } = Colors;

const CreatePassword = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const resident = useSelector(selectResident);
  return (
    <KeyboardAvoidingWrapper>
      <>
        <GetStartedImage source={image} resizeMode='contain' height='425' />
        <Container mt='10'>
          <Paragraph color={primary} size='35' fontFamily='PoppinsBold'>
            Create Password
          </Paragraph>
          <Formik
            initialValues={{ password: '', confirmPassword: '' }}
            onSubmit={async (values) => {
              await passwordSchema
                .validate(values)
                .then(async (valid) => {
                  let id = resident.id;
                  await residentCreatePassword(id, valid.password)
                    .then((resident) => {
                      if (resident.activation_stage === 'ACTIVATED') {
                        navigation.navigate('login');
                        Toast.show({
                          type: 'success',
                          text1: 'Profile Activation successful.',
                        });
                      } else {
                        Toast.show({
                          type: 'error',
                          text1: 'ValidationError',
                          text2: 'Something went wrong, try again later.',
                        });
                      }
                    })
                    .catch();
                  // navigation.navigate('login');
                })
                .catch((err) => {
                  Toast.show({
                    type: 'error',
                    text1: 'ValidationError',
                    text2: err.message,
                  });
                });
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <>
                <InputContainer>
                  <Input
                    background='#fff'
                    placeholder='Password'
                    secureTextEntry={true}
                    returnKeyType={'next'}
                    onBlur={handleBlur('password')}
                    onChangeText={handleChange('password')}
                  />
                </InputContainer>
                <InputContainer mb='20'>
                  <Input
                    background='#fff'
                    placeholder='Confirm Password'
                    secureTextEntry={true}
                    returnKeyType={'done'}
                    onBlur={handleBlur('confirmPassword')}
                    onChangeText={handleChange('confirmPassword')}
                  />
                </InputContainer>
                <FullButton onPress={handleSubmit}>
                  <CenterContent>
                    <ButtonText>Create</ButtonText>
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

export default CreatePassword;
