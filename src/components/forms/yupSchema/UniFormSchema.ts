import {
  CreateUniversityData,
  EditUniInput,
} from "@/graphql/__generatedTypes__";
import * as Yup from "yup";
import { AppFormScehma } from "./AppFormSchema";

const commonFieldsUni = {
  name: AppFormScehma.maxRequiredString,
  website: AppFormScehma.maxRequiredString,
  country: AppFormScehma.maxRequiredString,
  yearOfEstablished: AppFormScehma.maxRequiredString,
  type: AppFormScehma.maxRequiredString,
  address: AppFormScehma.maxRequiredString,
  city: AppFormScehma.maxRequiredString,
  state: AppFormScehma.maxRequiredString,
  pincode: AppFormScehma.maxRequiredString,
  phone: AppFormScehma.maxRequiredString,
  faxNumber: AppFormScehma.maxRequiredString,
  agentsRelationManager: AppFormScehma.maxRequiredString,
  contactPersonName: AppFormScehma.maxRequiredString,
  contactPersonEmail: AppFormScehma.email,
};

export const createUniValidateSchema = () =>
  Yup.object().shape({
    ...commonFieldsUni,
    email: AppFormScehma.email,
  });

export const editUniValidateSchema = () =>
  Yup.object().shape({ ...commonFieldsUni });

//// forms initial values
const commonInitialField = {
  name: "",
  website: "",
  country: "",
  yearOfEstablished: "",
  type: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  phone: "",
  faxNumber: "",
  agentsRelationManager: "",
  contactPersonName: "",
  contactPersonEmail: "",
};

interface IEditUniInitialValues
  extends Omit<EditUniInput, "yearOfEstablished"> {
  yearOfEstablished: string;
}
export let editUniInitialVal: IEditUniInitialValues = {
  ...commonInitialField,
};

export const editTheUni = (val: IEditUniInitialValues) => {
  editUniInitialVal = val;
};

interface ICreateUniInitialValues
  extends Omit<CreateUniversityData, "yearOfEstablished"> {
  yearOfEstablished: string;
}

export const createUniInitialValues: ICreateUniInitialValues = {
  ...commonInitialField,
  email: "",
};
