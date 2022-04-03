import React, { useContext } from "react";
import Axios from "axios"
import "bootstrap/dist/css/bootstrap.css";
import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Header,
  Heading,
  MaskedInput,
  ResponsiveContext,
  Select,
  Text,
  TextInput,
  Grommet,
} from "grommet";
import { hpe } from "grommet-theme-hpe";

const states = ["High", "Medium", "Low"];

const AddItemForm = () => {
  const [formValues, setFormValues] = React.useState({
    IPAddress: "",
    Hostname: "",
    Port: "",
    Protocol: "",
    CVSS: "",
    Severity: "",
    TimeStamp: "",
  });
  const size = useContext(ResponsiveContext);

  // eslint-disable-next-line no-unused-vars
  
  const onSubmit = ({ value, touched }) => {
    // Your submission logic here
    console.log(value)
    Axios.post("http://localhost:3001/create", value).then(() => {
       console.log("success");
    });
  };

  // provide order of formfields for validation
  // to properly place focus on any errors or infos
  const formFields = [
    "IPAddress",
    "Hostname",
    "Port",
    "Protocol",
    "CVSS",
    "Severity",
    "TimeStamp",
  ];

  const onValidate = (validationResults) => {
    const target = formFields.find(
      (field) =>
        field in validationResults.errors || field in validationResults.infos
    );
    if (target) {
      const targetFormField = document.getElementsByName(target);
      targetFormField[0].focus();
    }
  };

  return (
    <Grommet theme={hpe}>
      <div className="container ">
        <Box gap="medium" width="medium">
          <Header
            direction="column"
            align="start"
            gap="xxsmall"
            pad={{ horizontal: "xxsmall" }}
          >
            <Heading level={2} margin="none">
              Add Item
            </Heading>
            <Text></Text>
          </Header>
          <Box
            // Padding used to prevent focus from being cutoff
            pad={{ horizontal: "xxsmall" }}
          >
            <Form
              value={formValues}
              onChange={setFormValues}
              messages={{
                required: "This is a required field.",
              }}
              onSubmit={({ value, touched }) => onSubmit({ value, touched })}
              onValidate={onValidate}
              method="post"
              validate="submit"
            >
              <Box>
                <FormField required htmlFor="IPAddress" name="IPAddress">
                  <TextInput
                    id="IPAddress"
                    name="IPAddress"
                    placeholder="IP Address"
                  />
                </FormField>
                <FormField required htmlFor="Hostname" name="Hostname">
                  <TextInput
                    id="Hostname"
                    name="Hostname"
                    placeholder="Hostname"
                  />
                </FormField>
                <FormField htmlFor="Port" name="Port">
                  <TextInput id="Port" name="Port" placeholder="Port" />
                </FormField>
                <FormField htmlFor="Protocol" name="Protocol">
                  <TextInput
                    id="Protocol"
                    name="Protocol"
                    placeholder="Protocol"
                  />
                </FormField>
                <FormField required htmlFor="CVSS" name="CVSS">
                  <TextInput id="CVSS" name="CVSS" placeholder="CVSS" />
                </FormField>
                <FormField htmlFor="Severity" name="Severity">
                  <Select
                    id="Severity"
                    name="Severity"
                    dropHeight="small"
                    options={states}
                    placeholder="Select Severity"
                  />
                </FormField>
                <FormField htmlFor="TimeStamp" name="TimeStamp">
                  <TextInput
                    id="TimeStamp"
                    name="TimeStamp"
                    placeholder="TimeStamp"
                  />
                </FormField>
              </Box>
              <Box
                align={
                  !["xsmall", "small"].includes(size) ? "start" : undefined
                }
                margin={{ top: "small", bottom: "small" }}
              >
                <Button label="Submit" primary type="submit" />
              </Box>
            </Form>
          </Box>
        </Box>
      </div>
    </Grommet>
  );
};

export default AddItemForm;
