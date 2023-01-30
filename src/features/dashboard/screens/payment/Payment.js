import { View, Text } from "react-native";
import React from "react";
import {
  MenuIconContainer,
  NavbarContainer,
  NavbarMenu,
  NavbarMenuI,
} from "../home/home.style";
import {
  NavbarBackIconContainer,
  NavbarTitileContainer,
} from "../../dashboard.style";
import { Icon } from "@rneui/themed";
import { Paragraph } from "../../../../styles/styles";
import { TitleDivider } from "./payment.style";
import Colors from "../../../../components/Colors";
import Navbar from "../../../../components/Navbar/Navbar";

const { primary } = Colors;

const Payment = () => {
  return (
    <>
      <Navbar title="Bills & Utility" />
      <View>
        <Text>Payments</Text>
      </View>
    </>
  );
};

export default Payment;
