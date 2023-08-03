import { SignupForm } from "@/components/forms";
import { AuthLayout } from "@/components/layout";
import { Typography } from "@mui/material";
import React, { Fragment, ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Typography fontWeight={700} fontSize={`3.4rem`} color={`primary.main`}>
        Sign up
      </Typography>
      <Typography
        color={`#BBBBC7`}
        fontSize={`1.8rem`}
        mt={`1.8rem`}
        mb={`4.4rem`}
      >
        Welcome back! Please enter your details.
      </Typography>
      <SignupForm />
    </Fragment>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Page;
