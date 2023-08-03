import { gql } from "@apollo/client";
import {
  CORE_AGENTS_PROFILE_FIELDS,
  CORE_DOCUMENTS_FIELDS,
  CORE_STUDENT_PROFILE_FIELDS,
  CORE_UNIVERSITY_PROFILE_FIELDS,
} from "./fragments";

export const PING = gql`
  query Query {
    ping
  }
`;

export const GET_STUDENT_BY_ID = gql`
  ${CORE_STUDENT_PROFILE_FIELDS}
  ${CORE_DOCUMENTS_FIELDS}
  query GetStudentById($studentId: ID!) {
    getStudentById(studentId: $studentId) {
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

export const GET_STUDENTS = gql`
  ${CORE_STUDENT_PROFILE_FIELDS}
  query GetStudents($filter: Filter!, $count: Float, $offset: Float) {
    getStudents(filter: $filter, count: $count, offset: $offset) {
      students {
        ...CoreStudentProfileFields
      }
      total
    }
  }
`;

export const GET_AGENTS = gql`
  ${CORE_AGENTS_PROFILE_FIELDS}
  query GetAgents($offset: Float, $count: Float, $filter: Filter!) {
    getAgents(offset: $offset, count: $count, filter: $filter) {
      agentsProfile {
        ...CoreAgentsProfileFields
      }
      total
    }
  }
`;

export const GET_AGENT_BY_ID = gql`
  ${CORE_AGENTS_PROFILE_FIELDS}
  ${CORE_DOCUMENTS_FIELDS}
  query GetAgentById($agentId: ID!) {
    getAgentById(agentId: $agentId) {
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

export const GET_UNI_BY_ID = gql`
  ${CORE_UNIVERSITY_PROFILE_FIELDS}
  ${CORE_DOCUMENTS_FIELDS}
  query GetUniById($universityId: ID!) {
    getUniById(universityId: $universityId) {
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

export const GET_UNIVERSITIES = gql`
  ${CORE_UNIVERSITY_PROFILE_FIELDS}
  query GetUniversities($filter: Filter!, $count: Float, $offset: Float) {
    getUniversities(filter: $filter, count: $count, offset: $offset) {
      universitiesProfile {
        ...CoreUniversityProfileFields
      }
      total
    }
  }
`;

export const GET_EVENTS = gql`
  query GetEvents($userDate: DateTime) {
    getEvents(userDate: $userDate) {
      id
      name
      organize
      place
      date
      type
      host
      chiefGuest
      subject
      description
      createdAt
      updatedAt
    }
  }
`;

export const GET_STUDENT_TRAINING_DATA = gql`
  query GetStudentTraining {
    getStudentTraining {
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
