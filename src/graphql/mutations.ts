import { gql } from "@apollo/client";
import {
  CORE_DOCUMENTS_FIELDS,
  CORE_STUDENT_PROFILE_FIELDS,
  CORE_ADMIN_PROFILE_FIELDS,
  CORE_AGENTS_PROFILE_FIELDS,
  CORE_UNIVERSITY_PROFILE_FIELDS,
  CORE_USER_FIELDS,
} from "./fragments";

export const ADMIN_SIGNUP = gql`
  ${CORE_ADMIN_PROFILE_FIELDS}
  ${CORE_USER_FIELDS}
  mutation AdminSignup($user: CreateAdminUserInput!) {
    adminSignup(user: $user) {
      success
      adminProfile {
        ...CoreAdminProfileFields
      }
      user {
        ...CoreUserFields
      }
      token
    }
  }
`;

export const LOGIN_ADMIN = gql`
  ${CORE_ADMIN_PROFILE_FIELDS}
  ${CORE_USER_FIELDS}
  mutation LoginAdmin($credentials: CredentialsInput!) {
    loginAdmin(credentials: $credentials) {
      user {
        ...CoreUserFields
      }
      token
      adminProfile {
        ...CoreAdminProfileFields
      }
    }
  }
`;

export const RESEND_EMAIL_VERIFICATION_CODE = gql`
  mutation ResendEmailVerificationCode($verificationId: ID!) {
    resendEmailVerificationCode(verificationId: $verificationId) {
      status
      message
      verificationId
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation ResetPassword($resetPassword: ResetPasswordInput!) {
    resetPassword(resetPassword: $resetPassword) {
      success
    }
  }
`;

export const SEND_EMAIL_VERIFICATION_CODE = gql`
  mutation SendEmailVerificationCode($email: String!) {
    sendEmailVerificationCode(email: $email) {
      status
      message
      verificationId
    }
  }
`;

export const SEND_PASSWORD_RESET_CODE = gql`
  mutation SendPasswordResetCode($email: String!) {
    sendPasswordResetCode(email: $email) {
      verificationId
      status
      message
      firstName
      lastName
      email
    }
  }
`;

export const VERIFY_EMAIL_CODE = gql`
  mutation VerifyEmailCode($code: String!, $verificationId: ID!) {
    verifyEmailCode(code: $code, verificationId: $verificationId) {
      status
      message
      verificationId
    }
  }
`;

export const CREATE_STUDENT = gql`
  ${CORE_DOCUMENTS_FIELDS}
  ${CORE_STUDENT_PROFILE_FIELDS}
  mutation CreateStudent($createStudentData: CreateStudentData!) {
    createStudent(createStudentData: $createStudentData) {
      id
      student {
        ...CoreStudentProfileFields
      }
      documents {
        ...CoreDocumentsFields
      }
    }
  }
`;

export const CREATE_AGENT = gql`
  ${CORE_AGENTS_PROFILE_FIELDS}
  ${CORE_DOCUMENTS_FIELDS}
  mutation CreateAgent($createAgentData: CreateAgentData!) {
    createAgent(createAgentData: $createAgentData) {
      id
      agentProfile {
        ...CoreAgentsProfileFields
      }
      documents {
        ...CoreDocumentsFields
      }
    }
  }
`;

export const CREATE_UNIVERSITY = gql`
  ${CORE_UNIVERSITY_PROFILE_FIELDS}
  ${CORE_DOCUMENTS_FIELDS}
  mutation CreateUniversity($createUniversityData: CreateUniversityData!) {
    createUniversity(createUniversityData: $createUniversityData) {
      id
      universityProfile {
        ...CoreUniversityProfileFields
      }
      documents {
        ...CoreDocumentsFields
      }
    }
  }
`;

export const EDIT_UNIVERSITY = gql`
  ${CORE_UNIVERSITY_PROFILE_FIELDS}
  mutation EditUni($editUniInput: EditUniInput!, $uniId: ID!) {
    editUni(editUniInput: $editUniInput, uniId: $uniId) {
      ...CoreUniversityProfileFields
    }
  }
`;

export const EDIT_STUDENT = gql`
  ${CORE_STUDENT_PROFILE_FIELDS}
  mutation EditStudent($editStudentInput: EditStudentInput!, $studentId: ID!) {
    editStudent(editStudentInput: $editStudentInput, studentId: $studentId) {
      ...CoreStudentProfileFields
    }
  }
`;

export const EDIT_AGENT = gql`
  ${CORE_AGENTS_PROFILE_FIELDS}
  mutation EditAgent($editAgentInput: EditAgentInput!, $agentId: ID!) {
    editAgent(editAgentInput: $editAgentInput, agentId: $agentId) {
      ...CoreAgentsProfileFields
    }
  }
`;

export const DELETE_STUDENT_BY_ID = gql`
  mutation DeleteStudentById($studentId: ID!) {
    deleteStudentById(studentId: $studentId) {
      success
    }
  }
`;

export const DELETE_AGENT_BY_ID = gql`
  mutation DeleteAgentById($agentId: ID!) {
    deleteAgentById(agentId: $agentId) {
      success
    }
  }
`;

export const DELETE_UNI_BY_ID = gql`
  mutation DeleteUniversityById($universityId: ID!) {
    deleteUniversityById(universityId: $universityId) {
      success
    }
  }
`;

export const CREATE_STUDENT_TRAINING = gql`
  mutation CreateStudentTraining($studentTrainingInput: StudentTrainingInput!) {
    createStudentTraining(studentTrainingInput: $studentTrainingInput) {
      courseName
      document
      id
      programName
      questionType
      testDate
      timeDuration
      totalMarks
    }
  }
`;

export const CREATE_EVENT = gql`
  mutation CreateEvent($createEvent: CreateEvent!) {
    createEvent(createEvent: $createEvent) {
      chiefGuest
      createdAt
      date
      description
      host
      id
      name
      organize
      place
      subject
      type
      updatedAt
    }
  }
`;
