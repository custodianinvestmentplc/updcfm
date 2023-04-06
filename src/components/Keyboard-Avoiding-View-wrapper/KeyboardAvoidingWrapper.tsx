import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { Container } from "../../Styled-Components/styled-components";

const KeyboardAvoidingWrapper = ({ children }: any) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Container>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {children}
          </TouchableWithoutFeedback>
        </ScrollView>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
