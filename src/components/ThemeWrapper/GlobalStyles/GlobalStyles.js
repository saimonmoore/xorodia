import React from "react";
import { createGlobalStyle } from "styled-components";
import { baseTheme } from "../theme";

const CSSReset = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    background: ${({ theme }) => theme.colors.appBackground};
    color: ${({ theme }) => theme.colors.primaryText};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => `calc(${theme.fontSizes[2]} + 1vw);`};
    line-height: ${({ theme }) => `calc(${theme.lineHeights[2]} + 0.5vw)`};
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  a:not([class]) {
    color: ${({ theme }) => theme.colors.linkText};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;

CSSReset.defaultProps = {
  theme: baseTheme,
};

const GlobalStyles = () => {
  return <CSSReset />;
};

export { CSSReset, GlobalStyles };
