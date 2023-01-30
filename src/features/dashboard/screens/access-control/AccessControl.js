import { View, Text } from 'react-native';
import React from 'react';
import {
  MenuIconContainer,
  NavbarContainer,
  NavbarMenuI,
} from '../home/home.style';
import {
  NavbarBackIconContainer,
  NavbarTitileContainer,
} from '../../dashboard.style';
import { Icon } from '@rneui/themed';
import { Container, Paragraph } from '../../../../styles/styles';
import { TitleDivider } from '../payment/payment.style';
import Colors from '../../../../components/Colors';
import Navbar from '../../../../components/Navbar/Navbar';
import {
  CardBoard,
  CardBoardContainer,
  CardBoardContent,
  CardBoardIconContainer,
} from '../BillsAndUtility/billsAndUtility.style';

const { primary } = Colors;
const AccessControl = () => {
  return (
    <>
      <Navbar title='Access Control' />
      <Container mt='30' pl='20' pr='20'>
        <CardBoard ht='160' bg='#D9D9D9'>
          <CardBoardContainer>
            <CardBoardContent>
              <Paragraph size='28'>Generate Access Code</Paragraph>
              <Paragraph color={primary}>
                for guests to gain access through the gate
              </Paragraph>
            </CardBoardContent>
            <CardBoardIconContainer>
              <Icon name='ellipsis' type='octicon' />
            </CardBoardIconContainer>
          </CardBoardContainer>
        </CardBoard>
        <CardBoard ht='160' bg='#D9D9D9'>
          <CardBoardContainer>
            <CardBoardContent>
              <Paragraph size='28'>View Code History</Paragraph>
              <Paragraph color={primary}>
                previously raised access code
              </Paragraph>
            </CardBoardContent>
            <CardBoardIconContainer>
              <Icon name='eye' type='octicon' />
            </CardBoardIconContainer>
          </CardBoardContainer>
        </CardBoard>
      </Container>
    </>
  );
};

export default AccessControl;
