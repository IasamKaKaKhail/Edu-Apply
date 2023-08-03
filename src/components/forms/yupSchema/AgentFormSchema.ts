import { AppFormScehma } from "./AppFormSchema";
import * as Yup from "yup";
import { CreateAgentData, EditAgentInput } from "@/graphql/__generatedTypes__";

const commonFieldsAgent = {
  name: AppFormScehma.maxRequiredString,
  phone: AppFormScehma.maxRequiredString,
  designation: AppFormScehma.maxRequiredString,
  department: AppFormScehma.maxRequiredString,
  dob: AppFormScehma.maxRequiredString,
  education: AppFormScehma.maxRequiredString,
  website: AppFormScehma.maxRequiredString,
  gender: AppFormScehma.maxRequiredString,
  acitveAgencyAt: AppFormScehma.maxRequiredString,
  street: AppFormScehma.maxRequiredString,
  city: AppFormScehma.maxRequiredString,
  state: AppFormScehma.maxRequiredString,
  postalCode: AppFormScehma.maxRequiredString,
  country: AppFormScehma.maxRequiredString,
  bankName: AppFormScehma.maxRequiredString,
  accountHolderName: AppFormScehma.maxRequiredString,
  AccountNumber: AppFormScehma.maxRequiredString,
  iban: AppFormScehma.maxRequiredString,
  branchName: AppFormScehma.maxRequiredString,
  transitNumber: AppFormScehma.maxRequiredString,
  swiftCode: AppFormScehma.maxRequiredString,
};

export const createAgentValidateSchema = () =>
  Yup.object().shape({
    ...commonFieldsAgent,
    email: AppFormScehma.email,
  });

export const editAgentValidateSchema = () =>
  Yup.object().shape({
    ...commonFieldsAgent,
  });

//// forms initial values
const commonInitialField = {
  name: "",
  phone: "",
  designation: "",
  department: "",
  dob: "",
  education: "",
  website: "",
  gender: "",
  acitveAgencyAt: "",
  street: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
  bankName: "",
  accountHolderName: "",
  AccountNumber: "",
  iban: "",
  branchName: "",
  transitNumber: "",
  swiftCode: "",
};

interface ICreateAgentInitialValues extends Omit<CreateAgentData, "dob"> {
  dob: string;
}
export const createAgentInitialValues: ICreateAgentInitialValues = {
  ...commonInitialField,
  email: "",
};

interface IEditAgentInitialValues extends Omit<EditAgentInput, "dob"> {
  dob: string;
}
export let editAgentInitialValues: IEditAgentInitialValues = {
  ...commonInitialField,
};

export const editTheAgent = (val: IEditAgentInitialValues) => {
  editAgentInitialValues = val;
};
