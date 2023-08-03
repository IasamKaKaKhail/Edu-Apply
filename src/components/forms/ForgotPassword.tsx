import { SEND_PASSWORD_RESET_CODE } from "@/graphql";
import {
  Mutation,
  MutationSendPasswordResetCodeArgs,
} from "@/graphql/__generatedTypes__";
import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { Fragment } from "react";
import { AppButton, AppInput, SecondaryButton } from "..";
import { CardFooter } from "../login";
import { forgotPassValidationSchema } from "./yupSchema";

const ForgotPassword = () => {
  const router = useRouter();
  const [sendPasswordResetCode] = useMutation<
    Mutation,
    MutationSendPasswordResetCodeArgs
  >(SEND_PASSWORD_RESET_CODE);
  const { enqueueSnackbar } = useSnackbar();

  const sendOTP = async ({ email }: { email: string }) => {
    try {
      const res = await sendPasswordResetCode({
        variables: { email },
      });
      console.log(res.data?.sendPasswordResetCode);
      const data = res.data?.sendPasswordResetCode;
      if (data) {
        router.push({
          pathname: "forgotPassword/GetOTP",
          query: data,
        });
      }
    } catch (err: any) {
      console.error("error res login", err);
      enqueueSnackbar(`${err?.message}`, { variant: "error" });
    }
  };
  const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
    useFormik({
      initialValues: { email: "" },
      validationSchema: forgotPassValidationSchema,
      onSubmit: (values) => sendOTP(values),
    });

  return (
    <Fragment>
      <form noValidate onSubmit={handleSubmit}>
        <AppInput
          touched={touched.email}
          errorText={errors.email}
          title="Email"
          id="email-login"
          type="email"
          value={values.email}
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter your email"
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

export default ForgotPassword;
