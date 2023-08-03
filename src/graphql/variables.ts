import { makeVar } from "@apollo/client";
import { AdminProfile, Filter, InputMaybe, User } from "./__generatedTypes__";

export const globalErrorMessageVariable = makeVar<{ message: string | null }>({
  message: null,
});
export const globalSuccessMessageVariable = makeVar<{ message: string | null }>(
  {
    message: null,
  },
);
export const LoggedInUser = makeVar<User | undefined>(undefined);
export const LoggedInProfile = makeVar<AdminProfile | undefined>(undefined);
export const AuthToken = makeVar<string>("");
/////////////////////////////////////////////////
export const queryFilterInitial = {
  country: "",
  email: "",
  id: "",
  name: "",
};
export const QueryFilterUni = makeVar<InputMaybe<Filter>>(queryFilterInitial);
export const ActivePageUniversity = makeVar<number>(0); //first-page by default
/////////////////////////////////////////////////////////////
export const ActivePageStudents = makeVar<number>(0);
export const QueryFilterStudents =
  makeVar<InputMaybe<Filter>>(queryFilterInitial);
///////////////////////////////////////////
export const ActivePageAgents = makeVar<number>(0);
export const QueryFilterAgents =
  makeVar<InputMaybe<Filter>>(queryFilterInitial);
///////////////////////////////////////////
export const SnackbarVar = makeVar({
  open: false,
  message: "",
});
