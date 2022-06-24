import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { myTheme } from "../theme/theme";

const Layout = (props) => {
  const { children } = props;
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        backgroundColor: myTheme.palette.background.paper,
      }}
      color={"primary"}
    >
      {children}
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
