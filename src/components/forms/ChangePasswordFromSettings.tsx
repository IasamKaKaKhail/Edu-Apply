import { SVGS } from "@/utils";
import { Box, IconButton, InputAdornment } from "@mui/material";
import { Formik } from "formik";
import Image from "next/image";
// import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { InputOutlined, AppButton, SecondaryButton } from "..";
import { forgotPassValidationSchema } from "./yupSchema";

type Props = {
  onPressCancel?: () => void;
  onPressSave?: () => void;
};

const ChangePassword = ({ onPressCancel, onPressSave }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  // const router = useRouter();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event?.preventDefault();
  };
  return (
    <Fragment>
      <Formik
        initialValues={{ password: "", match: "", currentPassword: "" }}
        validationSchema={forgotPassValidationSchema}
        onSubmit={async (values, { setStatus, setSubmitting }) => {
          try {
            console.log("api login submit", values);
          } catch (err: any) {
            setStatus({ success: false });
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <InputOutlined
              touched={touched.currentPassword}
              errorText={errors.currentPassword}
              title={"Current Password"}
              id="-password-login"
              type={showPassword ? "text" : "password"}
              value={values.currentPassword}
              name="currentPassword"
              onBlur={handleBlur}
              placeholder="Current Password"
              onChange={handleChange}
              inputStyles={{ paddingLeft: 0 }}
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
                        style={{
                          aspectRatio: 1,
                          objectFit: "contain",
                          width: "2.4rem",
                          height: "2.4rem",
                        }}
                      />
                    ) : (
                      <Image
                        src={SVGS.eyeOpen}
                        alt="aside auth humane"
                        width={24}
                        height={24}
                        style={{
                          aspectRatio: 1,
                          objectFit: "contain",
                          width: "2.4rem",
                          height: "2.4rem",
                        }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              startAdornment={
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    size="large"
                  >
                    <Image
                      src={SVGS.lock}
                      alt="aside auth humane"
                      width={24}
                      height={24}
                      style={{
                        aspectRatio: 1,
                        objectFit: "contain",
                        width: "2.4rem",
                        height: "2.4rem",
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              }
            />

            <InputOutlined
              touched={touched.password}
              errorText={errors.password}
              title={"New Password"}
              id="-password-login"
              type={showPassword ? "text" : "password"}
              value={values.password}
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              inputStyles={{ paddingLeft: 0 }}
              sx={{ mt: "1.7rem" }}
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
                        style={{
                          aspectRatio: 1,
                          objectFit: "contain",
                          width: "2.4rem",
                          height: "2.4rem",
                        }}
                      />
                    ) : (
                      <Image
                        src={SVGS.eyeOpen}
                        alt="aside auth humane"
                        width={24}
                        height={24}
                        style={{
                          aspectRatio: 1,
                          objectFit: "contain",
                          width: "2.4rem",
                          height: "2.4rem",
                        }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              startAdornment={
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    size="large"
                  >
                    <Image
                      src={SVGS.lock}
                      alt="aside auth humane"
                      width={24}
                      height={24}
                      style={{
                        aspectRatio: 1,
                        objectFit: "contain",
                        width: "2.4rem",
                        height: "2.4rem",
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              }
              placeholder="New Password"
            />

            <InputOutlined
              touched={touched.match}
              errorText={errors.match}
              title={"Confirm Password"}
              id="-password-login"
              type={showPassword ? "text" : "password"}
              value={values.match}
              name="match"
              onBlur={handleBlur}
              onChange={handleChange}
              sx={{ mt: "1.7rem" }}
              inputStyles={{ paddingLeft: 0 }}
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
                        style={{
                          aspectRatio: 1,
                          objectFit: "contain",
                          width: "2.4rem",
                          height: "2.4rem",
                        }}
                      />
                    ) : (
                      <Image
                        src={SVGS.eyeOpen}
                        alt="aside auth humane"
                        width={24}
                        height={24}
                        style={{
                          aspectRatio: 1,
                          objectFit: "contain",
                          width: "2.4rem",
                          height: "2.4rem",
                        }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              startAdornment={
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    size="large"
                  >
                    <Image
                      src={SVGS.lock}
                      alt="aside auth humane"
                      width={24}
                      height={24}
                      style={{
                        aspectRatio: 1,
                        objectFit: "contain",
                        width: "2.4rem",
                        height: "2.4rem",
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Confirm Password"
            />
            <Box
              sx={{
                display: "flex",
                gap: "2rem",
                marginX: "7.5rem",
                marginTop: "3rem",
              }}
            >
              <SecondaryButton onClick={onPressCancel}>Cancel</SecondaryButton>
              <AppButton onClick={onPressSave}>Save</AppButton>
            </Box>
          </form>
        )}
      </Formik>
    </Fragment>
  );
};

export default ChangePassword;
