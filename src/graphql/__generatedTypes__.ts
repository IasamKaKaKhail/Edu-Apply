export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: "Query";
  getAgents: AgentsData;
  getAgentById: AgentData;
  getEvents: Array<Event>;
  getStudentById: GetStudentRes;
  getStudents: GetStudentsRes;
  getStudentTraining: Array<StudentTrainingData>;
  getUniById: UniversityData;
  getUniversities: UniversitiesData;
  ping: Scalars["String"];
};

export type QueryGetAgentsArgs = {
  filter: Filter;
  count?: InputMaybe<Scalars["Float"]>;
  offset?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetAgentByIdArgs = {
  agentId: Scalars["ID"];
};

export type QueryGetEventsArgs = {
  userDate?: InputMaybe<Scalars["DateTime"]>;
};

export type QueryGetStudentByIdArgs = {
  studentId: Scalars["ID"];
};

export type QueryGetStudentsArgs = {
  filter: Filter;
  count?: InputMaybe<Scalars["Float"]>;
  offset?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetUniByIdArgs = {
  universityId: Scalars["ID"];
};

export type QueryGetUniversitiesArgs = {
  filter: Filter;
  count?: InputMaybe<Scalars["Float"]>;
  offset?: InputMaybe<Scalars["Float"]>;
};

/** Get Pagination Agent */
export type AgentsData = {
  __typename?: "AgentsData";
  agentsProfile: Array<AgentProfile>;
  total: Scalars["Float"];
};

/** Agent object */
export type AgentProfile = {
  __typename?: "AgentProfile";
  id: Scalars["ID"];
  name: Scalars["String"];
  email: Scalars["String"];
  phone: Scalars["String"];
  designation: Scalars["String"];
  department: Scalars["String"];
  dob: Scalars["DateTime"];
  education: Scalars["String"];
  website: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  gender: Scalars["String"];
  acitveAgencyAt: Scalars["String"];
  street: Scalars["String"];
  city: Scalars["String"];
  state: Scalars["String"];
  postalCode: Scalars["String"];
  country: Scalars["String"];
  bankName: Scalars["String"];
  accountHolderName: Scalars["String"];
  AccountNumber: Scalars["String"];
  iban: Scalars["String"];
  branchName: Scalars["String"];
  transitNumber: Scalars["String"];
  swiftCode: Scalars["String"];
};

export type Filter = {
  id: Scalars["String"];
  name: Scalars["String"];
  country: Scalars["String"];
  email: Scalars["String"];
};

/** Agent with Docs object */
export type AgentData = {
  __typename?: "AgentData";
  id: Scalars["ID"];
  agentProfile: AgentProfile;
  documents?: Maybe<Array<Documents>>;
};

/** Generic docs object */
export type Documents = {
  __typename?: "Documents";
  id: Scalars["ID"];
  url: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  userId: Scalars["String"];
};

/** Event object */
export type Event = {
  __typename?: "Event";
  id: Scalars["ID"];
  name: Scalars["String"];
  organize: Scalars["String"];
  place: Scalars["String"];
  date: Scalars["DateTime"];
  type: Scalars["String"];
  host: Scalars["String"];
  chiefGuest: Scalars["String"];
  subject: Scalars["String"];
  description: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

/** Profile object */
export type GetStudentRes = {
  __typename?: "GetStudentRes";
  id: Scalars["ID"];
  student: StudentProfile;
  documents?: Maybe<Array<Documents>>;
};

/** Profile object */
export type StudentProfile = {
  __typename?: "StudentProfile";
  id: Scalars["ID"];
  firstname: Scalars["String"];
  lastname: Scalars["String"];
  middlename: Scalars["String"];
  email: Scalars["String"];
  photo?: Maybe<Scalars["String"]>;
  userId: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  dob: Scalars["DateTime"];
  citizenship: Scalars["String"];
  firstLanguage: Scalars["String"];
  passportNumber: Scalars["String"];
  passportExpiryDate: Scalars["DateTime"];
  gender: Scalars["String"];
  martialStatus: Scalars["String"];
  address: Scalars["String"];
  cityTown: Scalars["String"];
  country: Scalars["String"];
  state: Scalars["String"];
  postalZipCode: Scalars["String"];
  countryOfEducation: Scalars["String"];
  HighestLevelOfEducation: Scalars["String"];
  gradingScheme: Scalars["String"];
  gradeAverage: Scalars["String"];
};

/** Profile object */
export type GetStudentsRes = {
  __typename?: "GetStudentsRes";
  students: Array<StudentProfile>;
  total: Scalars["Float"];
};

/** Student Training object */
export type StudentTrainingData = {
  __typename?: "StudentTrainingData";
  id?: Maybe<Scalars["ID"]>;
  courseName: Scalars["String"];
  programName: Scalars["String"];
  totalMarks: Scalars["String"];
  timeDuration: Scalars["String"];
  questionType: Scalars["String"];
  testDate: Scalars["String"];
  document?: Maybe<Scalars["String"]>;
};

/** University object */
export type UniversityData = {
  __typename?: "UniversityData";
  id: Scalars["ID"];
  universityProfile: UniversityProfile;
  documents?: Maybe<Array<Documents>>;
};

/** University object */
export type UniversityProfile = {
  __typename?: "UniversityProfile";
  id: Scalars["ID"];
  name: Scalars["String"];
  website: Scalars["String"];
  email: Scalars["String"];
  country: Scalars["String"];
  yearOfEstablished: Scalars["DateTime"];
  type: Scalars["String"];
  address: Scalars["String"];
  city: Scalars["String"];
  state: Scalars["String"];
  pincode: Scalars["String"];
  phone: Scalars["String"];
  faxNumber: Scalars["String"];
  agentsRelationManager: Scalars["String"];
  contactPersonName: Scalars["String"];
  contactPersonEmail: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

/** University object */
export type UniversitiesData = {
  __typename?: "UniversitiesData";
  universitiesProfile: Array<UniversityProfile>;
  total: Scalars["Float"];
};

export type Mutation = {
  __typename?: "Mutation";
  createAgent: AgentData;
  deleteAgentById: Success;
  editAgent: AgentProfile;
  createEvent: Event;
  createStudent: GetStudentRes;
  deleteStudentById: Success;
  editStudent: StudentProfile;
  createStudentTraining: StudentTrainingData;
  createUniversity: UniversityData;
  deleteUniversityById: Success;
  editUni: UniversityProfile;
  adminSignup: SignupAdmin;
  loginAdmin: AuthenticatedUser;
  resetPassword: Success;
  sendEmailVerificationCode: EmailVerificationStatus;
  sendPasswordResetCode: ResetPasswordCodeStatus;
  verifyEmailCode: EmailVerificationStatus;
  resendEmailVerificationCode: EmailVerificationStatus;
  resendPasswordResetCode: EmailVerificationStatus;
};

export type MutationCreateAgentArgs = {
  createAgentData: CreateAgentData;
};

export type MutationDeleteAgentByIdArgs = {
  agentId: Scalars["ID"];
};

export type MutationEditAgentArgs = {
  editAgentInput: EditAgentInput;
  agentId: Scalars["ID"];
};

export type MutationCreateEventArgs = {
  createEvent: CreateEvent;
};

export type MutationCreateStudentArgs = {
  createStudentData: CreateStudentData;
};

export type MutationDeleteStudentByIdArgs = {
  studentId: Scalars["ID"];
};

export type MutationEditStudentArgs = {
  editStudentInput: EditStudentInput;
  studentId: Scalars["ID"];
};

export type MutationCreateStudentTrainingArgs = {
  studentTrainingInput: StudentTrainingInput;
};

export type MutationCreateUniversityArgs = {
  createUniversityData: CreateUniversityData;
};

export type MutationDeleteUniversityByIdArgs = {
  universityId: Scalars["ID"];
};

export type MutationEditUniArgs = {
  editUniInput: EditUniInput;
  uniId: Scalars["ID"];
};

export type MutationAdminSignupArgs = {
  user: CreateAdminUserInput;
};

export type MutationLoginAdminArgs = {
  credentials: CredentialsInput;
};

export type MutationResetPasswordArgs = {
  resetPassword: ResetPasswordInput;
};

export type MutationSendEmailVerificationCodeArgs = {
  email: Scalars["String"];
};

export type MutationSendPasswordResetCodeArgs = {
  email: Scalars["String"];
};

export type MutationVerifyEmailCodeArgs = {
  code: Scalars["String"];
  verificationId: Scalars["ID"];
};

export type MutationResendEmailVerificationCodeArgs = {
  verificationId: Scalars["ID"];
};

export type MutationResendPasswordResetCodeArgs = {
  verificationId: Scalars["ID"];
};

export type CreateAgentData = {
  name: Scalars["String"];
  phone: Scalars["String"];
  designation: Scalars["String"];
  department: Scalars["String"];
  dob: Scalars["DateTime"];
  education: Scalars["String"];
  website: Scalars["String"];
  gender: Scalars["String"];
  acitveAgencyAt: Scalars["String"];
  street: Scalars["String"];
  city: Scalars["String"];
  state: Scalars["String"];
  postalCode: Scalars["String"];
  country: Scalars["String"];
  bankName: Scalars["String"];
  accountHolderName: Scalars["String"];
  AccountNumber: Scalars["String"];
  iban: Scalars["String"];
  branchName: Scalars["String"];
  transitNumber: Scalars["String"];
  swiftCode: Scalars["String"];
  email: Scalars["String"];
  documents?: InputMaybe<Array<Scalars["String"]>>;
};

/** Generic success response */
export type Success = {
  __typename?: "Success";
  /** true if operation was successful */
  success: Scalars["Boolean"];
};

export type EditAgentInput = {
  name: Scalars["String"];
  phone: Scalars["String"];
  designation: Scalars["String"];
  department: Scalars["String"];
  dob: Scalars["DateTime"];
  education: Scalars["String"];
  website: Scalars["String"];
  gender: Scalars["String"];
  acitveAgencyAt: Scalars["String"];
  street: Scalars["String"];
  city: Scalars["String"];
  state: Scalars["String"];
  postalCode: Scalars["String"];
  country: Scalars["String"];
  bankName: Scalars["String"];
  accountHolderName: Scalars["String"];
  AccountNumber: Scalars["String"];
  iban: Scalars["String"];
  branchName: Scalars["String"];
  transitNumber: Scalars["String"];
  swiftCode: Scalars["String"];
};

export type CreateEvent = {
  name: Scalars["String"];
  organize: Scalars["String"];
  place: Scalars["String"];
  date: Scalars["DateTime"];
  type: Scalars["String"];
  host: Scalars["String"];
  chiefGuest: Scalars["String"];
  subject: Scalars["String"];
  description: Scalars["String"];
};

export type CreateStudentData = {
  firstname: Scalars["String"];
  lastname: Scalars["String"];
  middlename: Scalars["String"];
  photo?: InputMaybe<Scalars["String"]>;
  dob: Scalars["DateTime"];
  citizenship: Scalars["String"];
  firstLanguage: Scalars["String"];
  passportNumber: Scalars["String"];
  passportExpiryDate: Scalars["DateTime"];
  gender: Scalars["String"];
  martialStatus: Scalars["String"];
  address: Scalars["String"];
  cityTown: Scalars["String"];
  country: Scalars["String"];
  state: Scalars["String"];
  postalZipCode: Scalars["String"];
  countryOfEducation: Scalars["String"];
  HighestLevelOfEducation: Scalars["String"];
  gradingScheme: Scalars["String"];
  gradeAverage: Scalars["String"];
  email: Scalars["String"];
  documents?: InputMaybe<Array<Scalars["String"]>>;
};

export type EditStudentInput = {
  firstname: Scalars["String"];
  lastname: Scalars["String"];
  middlename: Scalars["String"];
  photo?: InputMaybe<Scalars["String"]>;
  dob: Scalars["DateTime"];
  citizenship: Scalars["String"];
  firstLanguage: Scalars["String"];
  passportNumber: Scalars["String"];
  passportExpiryDate: Scalars["DateTime"];
  gender: Scalars["String"];
  martialStatus: Scalars["String"];
  address: Scalars["String"];
  cityTown: Scalars["String"];
  country: Scalars["String"];
  state: Scalars["String"];
  postalZipCode: Scalars["String"];
  countryOfEducation: Scalars["String"];
  HighestLevelOfEducation: Scalars["String"];
  gradingScheme: Scalars["String"];
  gradeAverage: Scalars["String"];
};

export type StudentTrainingInput = {
  courseName: Scalars["String"];
  programName: Scalars["String"];
  totalMarks: Scalars["String"];
  timeDuration: Scalars["String"];
  questionType: Scalars["String"];
  testDate: Scalars["String"];
  document?: InputMaybe<Scalars["String"]>;
};

export type CreateUniversityData = {
  name: Scalars["String"];
  website: Scalars["String"];
  country: Scalars["String"];
  yearOfEstablished: Scalars["DateTime"];
  type: Scalars["String"];
  address: Scalars["String"];
  city: Scalars["String"];
  state: Scalars["String"];
  pincode: Scalars["String"];
  phone: Scalars["String"];
  faxNumber: Scalars["String"];
  agentsRelationManager: Scalars["String"];
  contactPersonName: Scalars["String"];
  contactPersonEmail: Scalars["String"];
  email: Scalars["String"];
  documents?: InputMaybe<Array<Scalars["String"]>>;
};

export type EditUniInput = {
  name: Scalars["String"];
  website: Scalars["String"];
  country: Scalars["String"];
  yearOfEstablished: Scalars["DateTime"];
  type: Scalars["String"];
  address: Scalars["String"];
  city: Scalars["String"];
  state: Scalars["String"];
  pincode: Scalars["String"];
  phone: Scalars["String"];
  faxNumber: Scalars["String"];
  agentsRelationManager: Scalars["String"];
  contactPersonName: Scalars["String"];
  contactPersonEmail: Scalars["String"];
};

/** Authenticated user and access token */
export type SignupAdmin = {
  __typename?: "SignupAdmin";
  /** true if operation was successful */
  success: Scalars["Boolean"];
  adminProfile: AdminProfile;
  user: User;
  token: Scalars["String"];
};

/** Profile object */
export type AdminProfile = {
  __typename?: "AdminProfile";
  id: Scalars["ID"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
  photo?: Maybe<Scalars["String"]>;
  userId: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

/** User object */
export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  username: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  verificationStatus: VerificationStatus;
  roleId: Roles;
};

export enum VerificationStatus {
  CodeSent = "CODE_SENT",
  Verified = "VERIFIED",
  Failed = "FAILED",
  ResetPasswordCodeSent = "RESET_PASSWORD_CODE_SENT",
  NotAssigned = "NOT_ASSIGNED",
  PasswordSentInEmail = "PASSWORD_SENT_IN_EMAIL",
}

export enum Roles {
  SuperAdmin = "SUPER_ADMIN",
  Admin = "ADMIN",
  Agent = "AGENT",
  Student = "STUDENT",
  NotAssigned = "NOT_ASSIGNED",
  UniFocalPerson = "UNI_FOCAL_PERSON",
}

export type CreateAdminUserInput = {
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  username: Scalars["String"];
  password: Scalars["String"];
  superAdminSecret: Scalars["String"];
};

/** Authenticated user and access token */
export type AuthenticatedUser = {
  __typename?: "AuthenticatedUser";
  user: User;
  token: Scalars["String"];
  adminProfile?: Maybe<AdminProfile>;
};

export type CredentialsInput = {
  username: Scalars["String"];
  password: Scalars["String"];
};

/** Reset Password Input */
export type ResetPasswordInput = {
  username: Scalars["String"];
  newPassword: Scalars["String"];
  verificationId: Scalars["String"];
};

/** Generic success response */
export type EmailVerificationStatus = {
  __typename?: "EmailVerificationStatus";
  /** Current verification state */
  status: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  verificationId: Scalars["ID"];
};

/** Generic success response */
export type ResetPasswordCodeStatus = {
  __typename?: "ResetPasswordCodeStatus";
  verificationId: Scalars["ID"];
  /** Current verification state */
  status: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
};
