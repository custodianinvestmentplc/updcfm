import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Navbar from '../../../../components/Navbar/Navbar';
import { Container, Paragraph } from '../../../../styles/styles';
import {
  Card,
  CardBoard,
  CardBoardButton,
  CardBoardContainer,
  CardBoardContent,
  CardBoardIconContainer,
  CardContent,
} from './billsAndUtility.style';
import Colors from '../../../../components/Colors';
import { Divider, Icon } from '@rneui/themed';

const { primary } = Colors;

const BillsAndUtility = () => {
  const balance = 0;
  return (
    <>
      <Navbar title='Bills & Utility' />
      <ScrollView>
        <Container pl='20' pr='20' mt='20'>
          <Card ht='200' bg={primary}>
            <CardContent>
              <Paragraph color='#fff'>Wallet Balance</Paragraph>
              <Paragraph color='#fff' size='50'>
                {'\u20A6 '}
                {balance.toFixed(2)}
              </Paragraph>
            </CardContent>
            <CardBoardButton>
              <Paragraph size='24' fontFamily='PoppinsSemiBold' color={primary}>
                Top up
              </Paragraph>
            </CardBoardButton>
          </Card>
          <Container pt='20' pb='20'>
            <Divider />
          </Container>
          <CardBoard ht='160' bg='#D9D9D9'>
            <CardBoardContainer>
              <CardBoardContent>
                <Paragraph size='28'>Service Charge</Paragraph>
                <Paragraph color={primary}>
                  general charges like water, waste & so on within the premises
                </Paragraph>
              </CardBoardContent>
              <CardBoardIconContainer>
                <Icon
                  name='money-bill'
                  type='font-awesome-5'
                  // size={Platform.OS === 'ios' ? '35' : '20'}
                />
              </CardBoardIconContainer>
            </CardBoardContainer>
          </CardBoard>
          <CardBoard ht='160' bg='#D9D9D9'>
            <CardBoardContainer>
              <CardBoardContent>
                <Paragraph size='28'>Buy Power</Paragraph>
                <Paragraph color={primary}>electricity and diesel</Paragraph>
              </CardBoardContent>
              <CardBoardIconContainer>
                <Icon name='light-bulb' type='octicon' />
              </CardBoardIconContainer>
            </CardBoardContainer>
          </CardBoard>
          <CardBoard ht='160' bg='#D9D9D9'>
            <CardBoardContainer>
              <CardBoardContent>
                <Paragraph size='28'>View Statement</Paragraph>
                <Paragraph color={primary}>
                  previously made bills & utility payments
                </Paragraph>
              </CardBoardContent>
              <CardBoardIconContainer>
                <Icon name='eye' type='octicon' />
              </CardBoardIconContainer>
            </CardBoardContainer>
          </CardBoard>
        </Container>
      </ScrollView>
    </>
  );
};

export default BillsAndUtility;
