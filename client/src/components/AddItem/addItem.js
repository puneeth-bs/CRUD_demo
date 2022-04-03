import React, { useContext } from "react";
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

const emailMask = [
  {
    regexp: /^[\w\-_.]+$/,
    placeholder: "jane.smith",
  },
  { fixed: "@" },
  {
    regexp: /^[\w]+$/,
    placeholder: "hpe",
  },
  { fixed: "." },
  {
    regexp: /^[\w]+$/,
    placeholder: "com",
  },
];

const states = ["High", "Medium", "Low"];

const phoneMask = [
  { fixed: "(" },
  {
    length: 3,
    regexp: /^[0-9]{1,3}$/,
    placeholder: "XXX",
  },
  { fixed: ")" },
  { fixed: " " },
  {
    length: 3,
    regexp: /^[0-9]{1,3}$/,
    placeholder: "XXX",
  },
  { fixed: "-" },
  {
    length: 4,
    regexp: /^[0-9]{1,4}$/,
    placeholder: "XXXX",
  },
];

const emailValidation = [
  {
    regexp: new RegExp("[^@ \\t\\r\\n]+@"),
    message: "Enter a valid email address.",
    status: "error",
  },
  {
    regexp: new RegExp("[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+"),
    message: "Enter a valid email address.",
    status: "error",
  },
  {
    regexp: new RegExp("[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+"),
    message: "Enter a valid email address.",
    status: "error",
  },
];

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
  };

  // provide order of formfields for validation
  // to properly place focus on any errors or infos
  const formFields = [
    "IP Adress",
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
                <FormField required htmlFor="firstName" name="firstName">
                  <TextInput
                    id="firstName"
                    name="firstName"
                    placeholder="IP Address"
                  />
                </FormField>
                <FormField required htmlFor="lastName" name="lastName">
                  <TextInput
                    id="lastName"
                    name="lastName"
                    placeholder="Hostname"
                  />
                </FormField>
                <FormField htmlFor="address1" name="address1">
                  <TextInput id="address1" name="address1" placeholder="Port" />
                </FormField>
                <FormField htmlFor="address2" name="address2">
                  <TextInput
                    id="address2"
                    name="address2"
                    placeholder="Protocol"
                  />
                </FormField>
                <FormField htmlFor="city" name="city">
                  <TextInput id="city" name="city" placeholder="CVSS" />
                </FormField>
                <FormField htmlFor="state" name="state">
                  <Select
                    id="state"
                    name="state"
                    dropHeight="small"
                    options={states}
                    placeholder="Select Severity"
                  />
                </FormField>
                <FormField htmlFor="zipcode" name="zipcode">
                  <TextInput
                    id="zipcode"
                    name="zipcode"
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
                <Button label="Continue" primary type="submit" />
              </Box>
            </Form>
          </Box>
        </Box>
      </div>
    </Grommet>
  );
};

export default AddItemForm;
