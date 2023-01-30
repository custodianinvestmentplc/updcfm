import { View, Text } from "react-native";
import React from "react";
import {
  MenuIconContainer,
  NavbarContainer,
  NavbarMenuI,
} from "../home/home.style";
import {
  NavbarBackIconContainer,
  NavbarTitileContainer,
} from "../../dashboard.style";
import { Icon } from "@rneui/themed";
import { Container, Paragraph } from "../../../../styles/styles";
import { TitleDivider } from "../payment/payment.style";
import Colors from "../../../../components/Colors";
import Navbar from "../../../../components/Navbar/Navbar";
import { CardBoard, CardBoardContainer, CardBoardContent, CardBoardIconContainer } from "../BillsAndUtility/billsAndUtility.style";

const { primary } = Colors;
const HelpDesk = () => {
  return (
    <>
      <Navbar title='Help Desk' />
      <Container mt='20' pr='20' pl='20'>
        <CardBoard ht='160' bg='#D9D9D9'>
          <CardBoardContainer>
            <CardBoardContent>
              <Paragraph size='28'>Raise Ticket</Paragraph>
              <Paragraph color={primary}>
                for support and further enquiries
              </Paragraph>
            </CardBoardContent>
            <CardBoardIconContainer>
              <Icon name='money-bill' type='font-awesome-5' />
            </CardBoardIconContainer>
          </CardBoardContainer>
        </CardBoard>
        <CardBoard ht='160' bg='#D9D9D9'>
          <CardBoardContainer>
            <CardBoardContent>
              <Paragraph size='28'>View Ticket History</Paragraph>
              <Paragraph color={primary}>previously raised tickets</Paragraph>
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

export default HelpDesk;
