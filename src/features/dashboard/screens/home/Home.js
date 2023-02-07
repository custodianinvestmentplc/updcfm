import React from 'react';
import {
  Card,
  CardContainer,
  CardIcon,
  DashboardContainer,
  Divider,
  Greeting,
  GreetingContainer,
  GreetingTextContainer,
  HomeContainer,
  ProfileContainer,
  SliderContainer,
  SliderImage,
  SliderImageContainer,
} from './home.style';

import avatar from '../../../../images/avatar/img_avatar2.png';
import sliderImage from '../../../../images/slider/slider.png';
import payment from '../../../../images/icons/payment.png';
import accessControl from '../../../../images/icons/key.png';
import serviceRequest from '../../../../images/icons/serviceRequest.png';
import contactCenter from '../../../../images/icons/contactCenter.png';
import { Paragraph } from '../../../../styles/styles';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../../../../components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { selectResident } from '../../../../lib/redux/slices/navSlice';

const Home = () => {
  const navigation = useNavigation();

  const resident = useSelector(selectResident);
  return (
    <DashboardContainer>
      <Navbar />
      <HomeContainer>
        <GreetingContainer>
          <ProfileContainer source={avatar} />
          <Greeting>
            <GreetingTextContainer>
              <Paragraph size='16' mb='-2'>
                Hi,
              </Paragraph>
            </GreetingTextContainer>
            <Paragraph size='20' fontFamily='PoppinsSemiBold'>
              {resident.first_Name + ' ' + resident.last_name}
            </Paragraph>
          </Greeting>
        </GreetingContainer>
        <SliderContainer>
          <SliderImageContainer>
            <SliderImage source={sliderImage} resizeMode='cover' />
          </SliderImageContainer>
          <Divider />
        </SliderContainer>
        <CardContainer>
          <Card onPress={() => navigation.navigate('payment')}>
            <CardIcon source={payment} resizeMode='contain' />
            <Paragraph size='18' color='#fff' fontFamily='PoppinsSemiBold'>
              Bills & Utility
            </Paragraph>
          </Card>
          <Card onPress={() => navigation.navigate('service-request')}>
            <CardIcon source={serviceRequest} resizeMode='contain' width='90' />
            <Paragraph size='18' color='#fff' fontFamily='PoppinsSemiBold'>
              Service Request
            </Paragraph>
          </Card>
          <Card onPress={() => navigation.navigate('vending')}>
            <CardIcon source={accessControl} resizeMode='contain' />
            <Paragraph size='18' color='#fff' fontFamily='PoppinsSemiBold'>
              Access Control
            </Paragraph>
          </Card>
          <Card onPress={() => navigation.navigate('contact-center')}>
            <CardIcon source={contactCenter} resizeMode='contain' />
            <Paragraph size='18' color='#fff' fontFamily='PoppinsSemiBold'>
              Help Desk
            </Paragraph>
          </Card>
        </CardContainer>
      </HomeContainer>
    </DashboardContainer>
  );
};

export default Home;
