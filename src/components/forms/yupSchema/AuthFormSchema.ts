import { AppFormScehma } from "./AppFormSchema";
import * as Yup from "yup";

export const resetPasswordValidationSchema = () =>
  Yup.object().shape({
    password: AppFormScehma.password,
    match: AppFormScehma.matchPassowrd,
  });

export const forgotPassValidationSchema = () =>
  Yup.object().shape({
    email: AppFormScehma.email,
  });

export const loginValidationSchema = () =>
  Yup.object().shape({
    email: AppFormScehma.email,
    password: AppFormScehma.password,
  });

export const singupValidationSchema = Yup.object({
  email: AppFormScehma.email,
  firstName: AppFormScehma.firstName,
  lastName: AppFormScehma.lastName,
  password: AppFormScehma.password,
  acceptTerms: AppFormScehma.acceptTerms,
});

//form initial values
export const singupInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  acceptTerms: false,
};

export const loginInitialValues = {
  email: "",
  password: "",
  rememberMe: false,
};

export interface ISignupForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  acceptTerms: boolean;
}

export interface ILoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}
