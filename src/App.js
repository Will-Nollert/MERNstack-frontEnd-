import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import memories from "./images/memories.png";
const app = () => {
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Race Report
        </Typography>
        <img src={memories} alt="memories" height="60" />
      </AppBar>
    </Container>
  );
};

export default app;
