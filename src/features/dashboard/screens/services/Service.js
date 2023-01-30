import { View, Text } from 'react-native';
import React from 'react';
import {
  MenuIconContainer,
  NavbarContainer,
  NavbarMenu,
  NavbarMenuI,
} from '../home/home.style';
import {
  NavbarBackIconContainer,
  NavbarTitileContainer,
} from '../../dashboard.style';
import { Icon } from '@rneui/themed';
import img from '../../../../images/get-started/Electrician-pana.png';
import { BackgroundImage, Container, Paragraph } from '../../../../styles/styles';
import { TitleDivider } from '../payment/payment.style';
import Colors from '../../../../components/Colors';
import Navbar from '../../../../components/Navbar/Navbar';
import { CardBoard, CardBoardContainer, CardBoardContent, CardBoardIconContainer } from '../BillsAndUtility/billsAndUtility.style';

const { primary } = Colors;
const Service = () => {
  return (
    <>
      <Navbar title='Service Reqeust' />
      <BackgroundImage source={img}>
        <Container mt='20' pl='20' pr='20'>
          <CardBoard ht='160' bg='#D9D9D9'>
            <CardBoardContainer>
              <CardBoardContent>
                <Paragraph size='28'>Intervention Jobs</Paragraph>
                <Paragraph color={primary}>
                  plumbing, electrical, cleaning, laundry
                </Paragraph>
              </CardBoardContent>
              <CardBoardIconContainer>
                <Icon name='tools' type='font-awesome-5' />
              </CardBoardIconContainer>
            </CardBoardContainer>
          </CardBoard>
          <CardBoard ht='160' bg='#D9D9D9'>
            <CardBoardContainer>
              <CardBoardContent>
                <Paragraph size='28'>View Job History</Paragraph>
                <Paragraph color={primary}>previously requested jobs</Paragraph>
              </CardBoardContent>
              <CardBoardIconContainer>
                <Icon name='eye' type='octicon' />
              </CardBoardIconContainer>
            </CardBoardContainer>
          </CardBoard>
        </Container>
      </BackgroundImage>
    </>
  );
};

export default Service;
