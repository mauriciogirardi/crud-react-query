import React from "react";
import ReactDOM from "react-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import preset from "@rebass/preset";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { GlobalStyles } from "./styles/GlobalStyles";
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <ThemeProvider theme={preset}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
