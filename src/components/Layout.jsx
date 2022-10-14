import React from "react";
// import { ThemeProvider } from "@mui/material";
// import { theme } from "../theme";
import PropTypes from "prop-types";
import style from "../style.css";

const Layout = ({ children, theme }) => {
  //   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  return <>{children}</>;
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
