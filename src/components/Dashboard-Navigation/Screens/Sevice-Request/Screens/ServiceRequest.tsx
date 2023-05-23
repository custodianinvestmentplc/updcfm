import {
  Container,
  FlexContainer,
  Link,
  Paragraph,
} from "../../../../../Styled-Components/styled-components";

import { Colors } from "../../../../../Colors/Colors";

import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import TopNavbar from "../../../../Top-Navbar/TopNavbar";
import Toast from "react-native-toast-message";

const { primary } = Colors;
const ServiceRequest = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <Container>
      <TopNavbar />
      <Container background="#FFF">
        <FlexContainer flexDirection="column" px="20px" py="10px">
          <Link
            mb="20px"
            onPress={() => {
              navigation.navigate("service-request-form", {});
            }}
          >
            <Container
              height="150px"
              width="100%"
              borderRadius="10px"
              background="#D9D9D9"
              px="10px"
              py="10px"
            >
              <FlexContainer overflow>
                <Container background="transparent" width="70%">
                  <Paragraph fontSize="24px">Intervention Jobs</Paragraph>
                  <Paragraph fontSize="12px" color={primary}>
                    plumbing, electrical, cleaning, laundry
                  </Paragraph>
                </Container>
                <Container width="30%" items="center" background="transparent">
                  <MaterialCommunityIcons name="tools" color="#000" size={50} />
                </Container>
              </FlexContainer>
            </Container>
          </Link>
          <Link
            onPress={() => {
              Toast.show({
                type: "error",
                text1: "Coming Soon.",
              });
            }}
          >
            <Container
              height="150px"
              width="100%"
              borderRadius="10px"
              background="#D9D9D9"
              px="10px"
              py="10px"
            >
              <FlexContainer overflow>
                <Container background="transparent" width="70%">
                  <Paragraph fontSize="24px">View Jobs History</Paragraph>
                  <Paragraph fontSize="12px" color={primary}>
                    previously requested jobs
                  </Paragraph>
                </Container>
                <Container width="30%" items="center" background="transparent">
                  <Entypo name="eye" color="#000" size={50} />
                </Container>
              </FlexContainer>
            </Container>
          </Link>
        </FlexContainer>
      </Container>
    </Container>
  );
};

export default ServiceRequest;
