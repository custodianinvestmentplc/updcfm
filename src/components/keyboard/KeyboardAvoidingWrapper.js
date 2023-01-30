import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import React from "react";
import Colors from "../Colors";
import { FullScreenContainer } from "../../styles/styles";
const { primary } = Colors;

const KeyboardAvoidingWrapper = ({ children }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <FullScreenContainer>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {children}
          </TouchableWithoutFeedback>
        </ScrollView>
      </FullScreenContainer>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
