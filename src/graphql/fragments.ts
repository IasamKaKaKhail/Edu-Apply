import { gql } from "@apollo/client";

export const CORE_DOCUMENTS_FIELDS = gql`
  fragment CoreDocumentsFields on Documents {
    id
    url
    createdAt
    updatedAt
    userId
  }
`;

export const CORE_STUDENT_PROFILE_FIELDS = gql`
  fragment CoreStudentProfileFields on StudentProfile {
    id
    email
    firstname
    lastname
    middlename
    photo
    userId
    createdAt
    updatedAt
    dob
    citizenship
    firstLanguage
    passportNumber
    passportExpiryDate
    gender
    martialStatus
    address
    cityTown
    country
    state
    postalZipCode
    countryOfEducation
    HighestLevelOfEducation
    gradingScheme
    gradeAverage
  }
`;

export const CORE_AGENTS_PROFILE_FIELDS = gql`
  fragment CoreAgentsProfileFields on AgentProfile {
    id
    name
    email
    phone
    designation
    department
    dob
    education
    website
    createdAt
    updatedAt
    gender
    acitveAgencyAt
    street
    city
    state
    postalCode
    country
    bankName
    accountHolderName
    AccountNumber
    iban
    branchName
    transitNumber
    swiftCode
  }
`;

export const CORE_UNIVERSITY_PROFILE_FIELDS = gql`
  fragment CoreUniversityProfileFields on UniversityProfile {
    id
    name
    website
    email
    country
    yearOfEstablished
    type
    address
    city
    state
    pincode
    phone
    faxNumber
    agentsRelationManager
    contactPersonName
    contactPersonEmail
    createdAt
    updatedAt
  }
`;

export const CORE_ADMIN_PROFILE_FIELDS = gql`
  fragment CoreAdminProfileFields on AdminProfile {
    id
    firstName
    lastName
    email
    photo
    userId
    createdAt
    updatedAt
  }
`;

export const CORE_USER_FIELDS = gql`
  fragment CoreUserFields on User {
    id
    username
    createdAt
    updatedAt
    verificationStatus
    roleId
  }
`;
