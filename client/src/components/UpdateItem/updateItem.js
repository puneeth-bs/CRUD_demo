import React, { useContext } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
import updateItem from "../UpdateItem/updateItem.js";

const states = ["High", "Medium", "Low"];

const UpdateItemForm = () => {
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

  const formFields = [
    "IPAddress",
    "Hostname",
    "Port",
    "Protocol",
    "CVSS",
    "Severity",
    "TimeStamp",
  ];

  const onSubmit = ({ value, touched }) => {
    //submission logic here
  };

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
      <div className="container">
        <Box gap="medium" width="medium">
          <Header
            direction="column"
            align="start"
            gap="xxsmall"
            pad={{ horizontal: "xxsmall" }}
          >
            <Heading level={2} margin="none">
              Update Item
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
                <FormField htmlFor="Hostname" name="Hostname">
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
              <div className="d-flex flex-row">
                <div className="p-2">
                  <Box
                    align={
                      !["xsmall", "small"].includes(size) ? "start" : undefined
                    }
                    margin={{ top: "small", bottom: "small" }}
                  >
                    <Button label="Update" primary type="submit" />
                  </Box>
                </div>

                <div className="p-2">
                  <Box
                    align={
                      !["xsmall", "small"].includes(size) ? "start" : undefined
                    }
                    margin={{ top: "small", bottom: "small" }}
                  >
                    <Button label="Delete" primary type="submit" />
                  </Box>
                </div>
              </div>
            </Form>
          </Box>
        </Box>
      </div>
    </Grommet>
  );
};

export default UpdateItemForm;
