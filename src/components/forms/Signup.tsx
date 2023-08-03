export {};
import { Fragment, useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
} from "@mui/material";
import { useFormik } from "formik";
import Image from "next/image";
import { SVGS } from "@/utils";
import {
  AppButton,
  AppInput,
  AppText,
  HorizentalLineText,
  SecondaryButton,
  SubHeading,
} from "..";
import Link from "next/link";
import { singupInitialValues, singupValidationSchema } from "./yupSchema";
import { useMutation } from "@apollo/client";
import {
  Mutation,
  MutationAdminSignupArgs,
} from "@/graphql/__generatedTypes__";
import { ADMIN_SIGNUP } from "@/graphql";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";

interface ISignupForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  acceptTerms: boolean;
}

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signupAdmin] = useMutation<Mutation, MutationAdminSignupArgs>(
    ADMIN_SIGNUP,
  );
  const { loginUser } = useUser();
  const router = useRouter();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event?.preventDefault();
  };

  const { handleSubmit, errors, handleBlur, handleChange, values, touched } =
    useFormik({
      initialValues: singupInitialValues,
      validationSchema: singupValidationSchema,
      onSubmit: (values) => handleSignup(values),
    });

  const handleSignup = async (values: ISignupForm) => {
    const { acceptTerms, email, firstName, lastName, password } = values;
    console.log("sumbitt", values);
    try {
      if (!acceptTerms) throw "accept terms and conditions";
      const res = await signupAdmin({
        variables: {
          user: {
            firstName,
            lastName,
            password,
            username: email.toLowerCase(),
            superAdminSecret: "123QWEasd!@#",
          },
        },
      });
      if (res.data?.adminSignup) {
        const { adminProfile, success, token, user } = res.data.adminSignup;
        if (!success) throw "something went wrong try again";
        loginUser({
          profile: adminProfile,
          token,
          user,
        });
        //todo --> should route automatically when userisLoggedIn
        router.replace(`/dashboard`);
      }
    } catch (error) {
      console.error("error res signupAdmin", error);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={"0.5rem"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item xs={6}>
            <AppInput
              touched={touched.firstName}
              errorText={errors.firstName}
              title="First Name"
              id="first-name"
              type="text"
              value={values.firstName}
              name="firstName"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Enter your user ID"
            />
          </Grid>
          <Grid item xs={6}>
            <AppInput
              touched={touched.lastName}
              errorText={errors.lastName}
              title="Last Name"
              id="last-name"
              type="lastName"
              value={values.lastName}
              name="lastName"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Enter your user ID"
            />
          </Grid>
          <Grid item xs={12}>
            <AppInput
              touched={touched.email}
              errorText={errors.email}
              title="User ID"
              id="email-login"
              type="email"
              value={values.email}
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Enter your user ID"
            />
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <AppInput
                touched={touched.password}
                errorText={errors.password}
                title={"Password"}
                id="password-login"
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
                          src={SVGS.eyeOpen}
                          alt="aside auth humane"
                          width={24}
                          height={24}
                          style={{ aspectRatio: 1, objectFit: "contain" }}
                        />
                      ) : (
                        <Image
                          src={SVGS.eyeSlash}
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
            </Stack>
          </Grid>
          <Grid item xs={12} mx={1} mt={"-1.6rem"} mb={"12rem"}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.acceptTerms}
                  onChange={handleChange}
                  name="acceptTerms"
                  color="primary"
                  size="medium"
                />
              }
              label={
                <AppText
                  sx={{
                    color:
                      touched.acceptTerms && errors.acceptTerms
                        ? "red"
                        : "#111111",
                  }}
                >
                  I Accept the Terms of Service and Privacy Policy
                </AppText>
              }
            />
          </Grid>
          <Grid item xs={11} mt={1}>
            <AppButton type="submit">Sign Up</AppButton>
          </Grid>
          <Grid item xs={11}>
            <HorizentalLineText text="Or continue with" />
          </Grid>
          <Grid item xs={11}>
            <SecondaryButton sx={{ border: "1px solid #EBEBEB" }}>
              <Image
                src={SVGS.iconGoogle}
                alt="google icon"
                width={24}
                height={24}
                style={{ aspectRatio: 1, objectFit: "contain" }}
              />
              <SubHeading sx={{ ml: "2rem" }}>Sign up with Google</SubHeading>
            </SecondaryButton>
          </Grid>
          <Grid item sx={{ flexDirection: "row" }}>
            <Link href={"/login"}>
              <Stack
                sx={{ cursor: "pointer" }}
                direction="row"
                alignItems={"center"}
                justifyContent={"center"}
              >
                <AppText>Already have an account?</AppText>
                <AppText sx={{ color: "primary.main" }}>&nbsp;Sign in</AppText>
              </Stack>
            </Link>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default Signup;
