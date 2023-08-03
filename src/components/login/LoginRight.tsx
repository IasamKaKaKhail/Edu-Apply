import { Box, Typography } from "@mui/material";
import React from "react";
import AppCard from "../Card";
import LoginForm from "../forms/Login";

const LoginRight = () => {
  return (
    <Box
      sx={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        height: `100%`,
      }}
    >
      <AppCard>
        <Typography fontWeight={700} fontSize={`3.4rem`} color={`primary.main`}>
          Login
        </Typography>
        <Typography
          color={`#BBBBC7`}
          fontSize={`1.8rem`}
          mt={`1.8rem`}
          mb={`4.4rem`}
        >
          Welcome back! Please enter your details.
        </Typography>
        <LoginForm />
      </AppCard>
    </Box>
  );
};

export default LoginRight;
