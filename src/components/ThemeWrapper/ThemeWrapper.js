import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./theme";
import { GlobalStyles } from "./GlobalStyles";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

const ThemeWrapper = ({ children }) => {
  library.add(fas);

  return (
    <ThemeProvider theme={baseTheme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
};

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeWrapper;
