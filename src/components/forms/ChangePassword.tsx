import { RESET_PASSWORD } from "@/graphql";
import {
  EmailVerificationStatus,
  Mutation,
  MutationResetPasswordArgs,
} from "@/graphql/__generatedTypes__";
import { SVGS } from "@/utils";
import { useMutation } from "@apollo/client";
import { IconButton, InputAdornment } from "@mui/material";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { Fragment, useState } from "react";
import { AppButton, AppInput, SecondaryButton } from "..";
import { CardFooter } from "../login";
import { resetPasswordValidationSchema } from "./yupSchema";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [resetPassword] = useMutation<Mutation, MutationResetPasswordArgs>(
    RESET_PASSWORD,
  );
  const { enqueueSnackbar } = useSnackbar();
  const { status, verificationId, email } =
    router.query as EmailVerificationStatus & { email: string };
  console.log("kyotto", status, verificationId);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event?.preventDefault();
  };

  const submitResetPassword = async ({
    password,
    match,
  }: {
    password: string;
    match: string;
  }) => {
    try {
      if (password !== match) throw "Passwords does not match";
      const res = await resetPassword({
        variables: {
          resetPassword: {
            newPassword: password,
            verificationId,
            username: email?.toLowerCase(),
          },
        },
      });
      if (res.data?.resetPassword.success) {
        router.replace(`/login`);
        enqueueSnackbar(`Password Changed successfully`, {
          variant: "success",
        });
      } else {
        enqueueSnackbar(`Something went wrong try again`, { variant: "error" });
      }
    } catch (error: any) {
      console.error("error res login", error);
      enqueueSnackbar(`${error?.message}`, { variant: "error" });
    }
  };

  const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
    useFormik({
      initialValues: { password: "", match: "" },
      validationSchema: resetPasswordValidationSchema,
      onSubmit: (values) => submitResetPassword(values),
    });

  return (
    <Fragment>
      <form noValidate onSubmit={handleSubmit}>
        <AppInput
          touched={touched.password}
          errorText={errors.password}
          title={"New Password"}
          id="password-reset"
          type={showPassword ? "text" : "password"}
          value={values.password}
          name="password"
          onBlur={handleBlur}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                size="large"
              >
                {showPassword ? (
                  <Image
                    src={SVGS.eyeSlash}
                    alt="aside auth humane"
                    width={24}
                    height={24}
                    style={{ aspectRatio: 1, objectFit: "contain" }}
                  />
                ) : (
                  <Image
                    src={SVGS.eyeOpen}
                    alt="aside auth humane"
                    width={24}
                    height={24}
                    style={{ aspectRatio: 1, objectFit: "contain" }}
                  />
                )}
              </IconButton>
            </InputAdornment>
          }
          placeholder="Enter your Password"
        />
        <AppInput
          touched={touched.match}
          errorText={errors.match}
          title={"Conform Password"}
          id="conform-password-reset"
          type={showPassword ? "text" : "password"}
          value={values.match}
          name="match"
          onBlur={handleBlur}
          onChange={handleChange}
          sx={{ mt: "2rem" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                size="large"
              >
                {showPassword ? (
                  <Image
                    src={SVGS.eyeSlash}
                    alt="aside auth humane"
                    width={24}
                    height={24}
                    style={{ aspectRatio: 1, objectFit: "contain" }}
                  />
                ) : (
                  <Image
                    src={SVGS.eyeOpen}
                    alt="aside auth humane"
                    width={24}
                    height={24}
                    style={{ aspectRatio: 1, objectFit: "contain" }}
                  />
                )}
              </IconButton>
            </InputAdornment>
          }
          placeholder="Enter your Password"
        />
        <CardFooter>
          <AppButton type="submit" sx={{ mb: "2.5rem" }}>
            Send
          </AppButton>
          <SecondaryButton onClick={() => router.back()}>
            Cancel
          </SecondaryButton>
        </CardFooter>
      </form>
    </Fragment>
  );
};

export default ChangePassword;
