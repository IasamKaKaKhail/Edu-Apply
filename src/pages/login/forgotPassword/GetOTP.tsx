import { AppButton, SecondaryButton, SubTitle, TitleText } from "@/components";
import { AuthLayout } from "@/components/layout";
import { CardFooter, otpInputStyles } from "@/components/login";
import { VERIFY_EMAIL_CODE } from "@/graphql";
import {
  Mutation,
  MutationVerifyEmailCodeArgs,
  ResetPasswordCodeStatus,
} from "@/graphql/__generatedTypes__";
import { useMutation } from "@apollo/client";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React, { ReactElement, useState } from "react";
import OtpInput from "react-otp-input";

const Page = () => {
  const [code, setCode] = useState("");
  const router = useRouter();
  const { email, firstName, lastName, status, verificationId } =
    router.query as ResetPasswordCodeStatus;
  console.log(email, firstName, lastName, status, verificationId);
  const [verifyEmailCode] = useMutation<Mutation, MutationVerifyEmailCodeArgs>(
    VERIFY_EMAIL_CODE,
  );
  const { enqueueSnackbar } = useSnackbar();

  // router.push("ChangePassword")

  const handleSubmit = async () => {
    try {
      const res = await verifyEmailCode({
        variables: {
          code,
          verificationId,
        },
      });
      const data = res.data?.verifyEmailCode;
      if (data) {
        router.push({
          pathname: "ChangePassword",
          query: { ...data, email },
        });
      }
    } catch (error: any) {
      console.error("error res login", error);
      enqueueSnackbar(`${error?.message}`, { variant: "error" });
    }
  };

  return (
    <Grid container spacing={"1rem"}>
      <Grid item xs={12}>
        <TitleText>Get OTP</TitleText>
      </Grid>
      <Grid item xs={12}>
        <SubTitle mt={"1rem"}>
          Please enter the 4 digit code send to your email.
        </SubTitle>
        <Grid item xs={12}>
          <SubTitle my={"0.5rem"}>{`${email}`}</SubTitle>
        </Grid>
      </Grid>
      <Grid item xs={12} mt={"4rem"}>
        <OtpInput
          value={code}
          onChange={setCode}
          numInputs={4}
          inputStyle={otpInputStyles}
        />
      </Grid>
      <CardFooter>
        <Grid item xs={12} mb={"2.5rem"}>
          <AppButton onClick={handleSubmit}>Verify</AppButton>
        </Grid>
        <Grid item xs={12}>
          <SecondaryButton onClick={() => router.back()}>
            Cancel
          </SecondaryButton>
        </Grid>
      </CardFooter>
    </Grid>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Page;
