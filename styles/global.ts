"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::selection {
    background-color: none;
    color: none;
  }

  main {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    min-height: 100vh;
    justify-content: center;
    background-color: #070707;
  }
`;
