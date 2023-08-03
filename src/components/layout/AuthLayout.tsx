import {
  AuthContainerRight,
  cardWrapper,
  LoginLeftView,
} from "@/components/login";
import React, { ReactElement } from "react";
import AppCard from "../Card";
import { Container } from "./styled";

type Props = {
  children: ReactElement;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <Container>
      <LoginLeftView />
      <AuthContainerRight
        sx={{ minHeight: "100vh", flex: [null, 1, 0.5, null, null] }}
      >
        <AppCard style={cardWrapper}>{children}</AppCard>
      </AuthContainerRight>
    </Container>
  );
};

export default AuthLayout;
