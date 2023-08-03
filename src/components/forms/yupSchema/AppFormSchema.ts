import * as Yup from "yup";

export const AppFormScehma = {
  firstName: Yup.string().max(32).required("First Name is required"),
  lastName: Yup.string().max(32).required("Last Name is required"),
  email: Yup.string()
    .email("Must be a valid email")
    .max(60)
    .required("Email is required"),
  password: Yup.string()
    .required()
    .min(8, "Password must be at least 8 characters long")
    .max(32)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least 1 capital letter and 1 number",
    ),
  acceptTerms: Yup.boolean().oneOf(
    [true],
    "You need to accept Terms of Terms of Service and Privacy Policy",
  ),
  matchPassowrd: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords do not match",
  ),
  maxString: Yup.string().max(32),
  maxRequiredString: Yup.string().max(32).required(),
  courseName: Yup.string().required("Course Name is required "),
  programeName: Yup.string().required("Programe Name is required "),
  totalMarks: Yup.string().required(" Total Marks are required "),
  timeDuration: Yup.string().required(" Time Duration is required "),
  // testDate
};
