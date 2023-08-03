import { useState } from "react";
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
import {
  ILoginForm,
  loginInitialValues,
  loginValidationSchema,
} from "./yupSchema";
import { useMutation } from "@apollo/client";
import { LOGIN_ADMIN } from "@/graphql";
import { Mutation, MutationLoginAdminArgs } from "@/graphql/__generatedTypes__";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginAdmin] = useMutation<Mutation, MutationLoginAdminArgs>(
    LOGIN_ADMIN,
  );
  const { loginUser } = useUser();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event?.preventDefault();
  };

  const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
    useFormik({
      initialValues: loginInitialValues,
      validationSchema: loginValidationSchema,
      onSubmit: (values) => handleLogin(values),
    });

  const handleLogin = async (values: ILoginForm) => {
    try {
      const res = await loginAdmin({
        variables: {
          credentials: {
            password: values.password,
            username: values.email.toLowerCase(),
          },
        },
      });
      if (res?.data) {
        const { token, user, adminProfile } = res?.data?.loginAdmin;
        if (adminProfile && user && token) {
          loginUser({
            profile: adminProfile,
            token,
            user,
            remember: values.rememberMe,
          });
          //todo --> should route automatically when userisLoggedIn
          router.replace(`/dashboard`);
        }
      }
    } catch (err: any) {
      console.error("error res login", err);
      enqueueSnackbar(`${err?.message}`, { variant: "error" });
    }
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit}>
        <Grid
          container
          spacing={"1.6rem"}
          alignItems={"center"}
          justifyContent={"center"}
        >
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
                id="-password-login"
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
          <Grid item xs={12} mx={1} mt={"-1.6rem"} mb={"15rem"}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.rememberMe}
                    onChange={handleChange}
                    name="rememberMe"
                    color="primary"
                    size="medium"
                  />
                }
                label={<AppText>Remember me</AppText>}
              />
              <Link href={"/login/forgotPassword"}>
                <AppText
                  sx={{
                    color: "primary.main",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Forgot password
                </AppText>
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={11} mt={1}>
            {/* <Link href={"/dashboard"}> */}
            <AppButton type="submit">Log in</AppButton>
            {/* </Link> */}
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
            <Link href={"/Signup"}>
              <Stack
                sx={{ cursor: "pointer" }}
                direction="row"
                alignItems={"center"}
                justifyContent={"center"}
              >
                <AppText>Don’t have an account? </AppText>
                <AppText sx={{ color: "primary.main" }}>&nbsp;Sign up</AppText>
              </Stack>
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Login;
