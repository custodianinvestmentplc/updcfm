import { Formik } from "formik";
import Dropdown from "react-native-input-select";
import { Platform } from "react-native";
import {
  Button,
  ButtonText,
  Container,
  Input,
  Paragraph,
} from "../../../../../Styled-Components/styled-components";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { selectResident } from "../../../../../redux/slices/navslice";
import KeyboardAvoidingWrapper from "../../../../Keyboard-Avoiding-View-wrapper/KeyboardAvoidingWrapper";
import { handleCreateInterventionJob } from "../../../../../hooks/requests";
import Toast from "react-native-toast-message";
import TopNavbar from "../../../../Top-Navbar/TopNavbar";
import { Picker } from "@react-native-picker/picker";

const ServiceRequestForm = () => {
  const statusBarHeight = Platform.OS === "ios" ? 20 : 0;
  const resident = useSelector(selectResident);
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingWrapper>
      <Container>
        <TopNavbar />
        <Container background="#fff" px="10px">
          <Formik
            initialValues={{
              jobId: "",
              issueId: "",
              location: "",
              shortDescription: "",
              picker: "",
            }}
            onSubmit={async (values) => {
              console.log("values " + values);
              console.log("resident: " + JSON.stringify(resident));

              const res = await handleCreateInterventionJob(
                "residents/intervention-job",
                values,
                resident.id
              );

              if (res === 200) {
                navigation.navigate("dashboard");
                Toast.show({
                  type: "success",
                  text1: "Intervention Job Initiated.",
                  text2: "Kindly wait for the inspection process.",
                  visibilityTime: 5000,
                });
              }
              console.log(res);
            }}
          >
            {({ handleSubmit, handleBlur, handleChange, values }) => (
              <Container background="transparent">
                <Container background="transparent" mt="10px">
                  <Dropdown
                    placeholder="Select a Job"
                    options={[{ name: "Plumbing" }, { name: "Electricial" }]}
                    optionLabel="name"
                    optionValue="name"
                    onValueChange={(value: any) => (values.jobId = value)}
                  />
                  <Dropdown
                    placeholder="Select a issue"
                    options={[
                      { name: "Leakage" },
                      { name: "Broken" },
                      { name: "Others" },
                    ]}
                    optionLabel="name"
                    optionValue="name"
                    onValueChange={(value: any) => (values.issueId = value)}
                  />
                  <Dropdown
                    placeholder="Select a location"
                    options={[
                      { name: "Kitchen" },
                      { name: "Bedroom" },
                      { name: "Sitting Room" },
                      { name: "Visitors Room" },
                      { name: "Others" },
                    ]}
                    optionLabel="name"
                    optionValue="name"
                    onValueChange={(value: any) => {
                      values.location = value;
                    }}
                  />
                  <Input
                    border="1"
                    background="#fff"
                    mb="20px"
                    placeholder="Short Description"
                    pl="20px"
                    pr="20px"
                    pt="10px"
                    pb="10px"
                    multiline={true}
                    borderRadius="10px"
                    onBlur={handleBlur("shortDescription")}
                    onChangeText={handleChange("shortDescription")}
                  />
                  {values.jobId != "" &&
                  values.location != "" &&
                  values.issueId != "" &&
                  values.shortDescription ? (
                    <Button onPress={handleSubmit}>
                      <ButtonText>Submit</ButtonText>
                    </Button>
                  ) : (
                    <Container
                      background="#D9D9D9"
                      height="50px"
                      borderRadius="10px"
                      items="center"
                      justify="center"
                    >
                      <Paragraph color="#fff">Submit</Paragraph>
                    </Container>
                  )}
                </Container>
              </Container>
            )}
          </Formik>
        </Container>
      </Container>
    </KeyboardAvoidingWrapper>
  );
};

export default ServiceRequestForm;
