import { AppFormScehma } from "./AppFormSchema";
import * as Yup from "yup";
import {
  CreateStudentData,
  EditStudentInput,
} from "@/graphql/__generatedTypes__";

const commonFieldStudent = {
  firstname: AppFormScehma.firstName,
  lastname: AppFormScehma.lastName,
  middlename: AppFormScehma.maxString,
  photo: AppFormScehma.maxString,
  dob: AppFormScehma.maxRequiredString,
  citizenship: AppFormScehma.maxRequiredString,
  firstLanguage: AppFormScehma.maxRequiredString,
  passportNumber: AppFormScehma.maxRequiredString,
  passportExpiryDate: AppFormScehma.maxRequiredString,
  gender: AppFormScehma.maxRequiredString,
  martialStatus: AppFormScehma.maxRequiredString,
  address: AppFormScehma.maxRequiredString,
  cityTown: AppFormScehma.maxRequiredString,
  country: AppFormScehma.maxRequiredString,
  state: AppFormScehma.maxRequiredString,
  postalZipCode: AppFormScehma.maxRequiredString,
  countryOfEducation: AppFormScehma.maxRequiredString,
  HighestLevelOfEducation: AppFormScehma.maxRequiredString,
  gradingScheme: AppFormScehma.maxRequiredString,
  gradeAverage: AppFormScehma.maxRequiredString,
};
export const createStudentValidateSchema = () =>
  Yup.object().shape({
    ...commonFieldStudent,
    email: AppFormScehma.email,
  });

export const editStudentValidateSchema = () =>
  Yup.object().shape({
    ...commonFieldStudent,
  });

// form initial values
const commonInitailField = {
  firstname: "",
  lastname: "",
  middlename: "",
  photo: "",
  dob: "",
  citizenship: "",
  firstLanguage: "",
  passportNumber: "",
  passportExpiryDate: "",
  gender: "",
  martialStatus: "",
  address: "",
  cityTown: "",
  country: "",
  state: "",
  postalZipCode: "",
  countryOfEducation: "",
  HighestLevelOfEducation: "",
  gradingScheme: "",
  gradeAverage: "",
};

interface ICreateStudentInitialValues
  extends Omit<CreateStudentData, "dob" | "passportExpiryDate"> {
  dob: string;
  passportExpiryDate: string;
}
export const createStudentInitialValues: ICreateStudentInitialValues = {
  ...commonInitailField,
  email: "",
};

interface IEditStudentInitialValues
  extends Omit<EditStudentInput, "dob" | "passportExpiryDate" | "email"> {
  dob: string;
  passportExpiryDate: string;
}
export let editStudentInitialValues: IEditStudentInitialValues = {
  ...commonInitailField,
};

export const editTheStudent = (val: IEditStudentInitialValues) => {
  editStudentInitialValues = val;
};
