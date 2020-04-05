import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./theme";
import { GlobalStyles } from "./GlobalStyles";

const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={baseTheme}>
    <>
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
);

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeWrapper;
