import { AuthLayout } from "@/components/layout";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { Box, Typography } from "@mui/material";
import { AppButton, HorizentalLineText } from "@/components";
import { useRouter } from "next/router";

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <Box sx={{ marginTop: "25%" }}>
      <Typography variant="h5" color={"primary.main"} textAlign={"center"}>
        Login
      </Typography>
      <Typography color={"#BBBBC7"} pt={"24px"} textAlign={"center"}>
        Give us some of your information to get access to education.
      </Typography>
      <AppButton
        onClick={() => {
          router.push("/login");
        }}
        sx={{ marginTop: "120px" }}
        variant="contained"
      >
        Log In as a Admin
      </AppButton>
      <HorizentalLineText text="Or" my={"38px"} />
      <AppButton variant="contained">Log In as a RIOs</AppButton>
    </Box>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Page;
