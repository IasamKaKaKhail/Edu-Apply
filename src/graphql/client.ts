import { SERVER_URL } from "@/utils";
import { localStorageGet } from "./../utils/localStorage";
import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "apollo-link-context";
import { globalErrorMessageVariable } from "./variables";

const cache = new InMemoryCache();

//todo --> refreshToken on the fly
const errorLink = onError(
  ({ graphQLErrors, networkError, operation, response }) => {
    let errorMessageVar: string | null = null;
    if (graphQLErrors || networkError || response) {
      operation.query.definitions.forEach((definition) => {
        const op = "operation" in definition ? definition.operation : "";
        const errorMessage = `[Operation EduApply] apollo ${op} ${
          operation.operationName || ""
        }`;
        console.error(errorMessage);
        errorMessageVar = (errorMessageVar || "") + errorMessage;
      });
    }
    if (response) {
      const errorMessage = `[Operation Result EduApply] ${JSON.stringify(
        response,
      )}`;
      console.warn(errorMessage);
      errorMessageVar = (errorMessageVar || "") + errorMessage;
    }
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        const locationsStr = JSON.stringify(locations);
        const errorMessage = `[GraphQL Error EduApply] Message: "${message}", Locations: ${locationsStr}, Path: "${path}"`;
        console.warn(errorMessage);
        errorMessageVar = (errorMessageVar || "") + errorMessage;
      });
    }
    if (networkError) {
      const errorMessage = `[Network Error EduApply] "${networkError}"`;
      console.error(errorMessage);
      errorMessageVar = (errorMessageVar || "") + errorMessage;
    }
    globalErrorMessageVariable({ message: errorMessageVar });
  },
);

const httpLink = new HttpLink({
  uri: SERVER_URL,
});

const authMiddleware = setContext(() =>
  localStorageGet("token").then((token: string) => {
    console.log("localStorage token", token);
    return {
      // Make sure to actually set the headers here
      headers: {
        authorization: `Bearer ${token}` || null,
      },
    };
  }),
);

const client = new ApolloClient({
  link: from([errorLink, authMiddleware as unknown as ApolloLink, httpLink]),
  cache,
  connectToDevTools: true,
});
export default client;
