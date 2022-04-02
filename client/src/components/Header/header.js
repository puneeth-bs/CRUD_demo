import React, { useContext, useEffect, useRef, useState } from "react";
import "../Header/header.css";
import styled from "styled-components";
import { hpe } from "grommet-theme-hpe";
import "bootstrap/dist/css/bootstrap.css";
import {
  Box,
  Button,
  Grommet,
  Header,
  Menu,
  Nav,
  ResponsiveContext,
  Text,
  TextInput,
} from "grommet";
import { Search as SearchIcon, Hpe } from "grommet-icons";

const StyledTextInput = styled(TextInput).attrs(() => ({
  "aria-labelledby": "search-icon-example",
}))``;

const items = [
  { label: 'About' }
];

const HeaderComponent = () => {
  const size = useContext(ResponsiveContext);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focused, setFocused]);

  return (
    <div className="shadow-sm p-3 mb-5 bg-white rounded">
      <Grommet theme={hpe}>
        <Header
          fill="horizontal"
          pad={{ horizontal: "medium", vertical: "" }}
          background="background-front"
        >
          <Button>
            <Box
              direction="row"
              align="start"
              gap="medium"
              // pad maintains accessible hit target
              // non-responsive maintains same dimensions for mobile
              pad={{ vertical: "small" }}
              responsive={false}
            >
              <Hpe color="brand" />
              {(!["xsmall", "small"].includes(size) ||
                (["xsmall", "small"].includes(size) && !focused)) && (
                <Box direction="row" gap="xsmall" wrap>
                  <Text color="text-strong" weight="bold">
                    HPE
                  </Text>
                  <Text color="text-strong"></Text>
                </Box>
              )}
            </Box>
          </Button>
          {!["xsmall", "small"].includes(size) ? (
            <Nav direction="row">
              {items.map((item) => (
                <Button label={item.label} key={item.label} />
              ))}
            </Nav>
          ) : (
            <Menu label="Menu" items={items} />
          )}
        </Header>
      </Grommet>
    </div>
  );
};

export default HeaderComponent;
